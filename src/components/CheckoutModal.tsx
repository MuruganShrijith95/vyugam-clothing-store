import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  CreditCard, 
  QrCode, 
  Banknote, 
  Building2, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  Smartphone,
  Lock,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { ShippingAddress, PaymentMethod, Order } from '../types';
import { checkDeliveryPincode, formatINR } from '../utils/pincodeChecker';
import { INDIAN_STATES } from '../data/products';
import { buildOrderWhatsAppUrl, openWhatsAppOrder } from '../utils/whatsappOrder';
import { isWhatsAppConfigured, isUpiConfigured, UPI_VPA } from '../config/store';
import {
  UpiApp,
  UPI_APP_LABELS,
  buildUpiUrl,
  buildUpiQrDataUrl,
  supportsUpiIntent
} from '../utils/upiPayment';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderPlaced: (order: Order) => void;
}

const makeOrderId = (): string => `VY-${Math.floor(100000 + Math.random() * 900000)}`;

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onOrderPlaced
}) => {
  const { cart, subtotal, couponDiscount, shippingFee, finalTotal, addOrder, appliedCoupon } = useCart();

  const [address, setAddress] = useState<ShippingAddress>({
    fullName: '',
    phoneNumber: '',
    email: '',
    pincode: '',
    flatHouse: '',
    areaStreet: '',
    landmark: '',
    city: '',
    state: 'Maharashtra',
    addressType: 'Home'
  });

  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(
    isUpiConfigured() ? 'upi' : 'cod'
  );
  const [upiApp, setUpiApp] = useState<UpiApp>('any');
  // Reserved up front so the UPI reference on the QR matches the order we file.
  const [orderId, setOrderId] = useState<string>(() => makeOrderId());
  const [upiQrDataUrl, setUpiQrDataUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  // Held when the browser blocks the WhatsApp tab, so we can offer a manual link.
  const [blockedOrder, setBlockedOrder] = useState<Order | null>(null);

  // Auto-fill city/state when pincode changes
  useEffect(() => {
    if (address.pincode.length === 6) {
      const pinResult = checkDeliveryPincode(address.pincode);
      if (pinResult.valid) {
        setAddress(prev => ({
          ...prev,
          city: pinResult.city.split(',')[0],
          state: INDIAN_STATES.includes(pinResult.state) ? pinResult.state : prev.state
        }));
      }
    }
  }, [address.pincode]);

  // Regenerate the payee QR whenever the payable amount or order reference changes.
  useEffect(() => {
    if (!isOpen || selectedPayment !== 'upi' || !isUpiConfigured() || finalTotal <= 0) {
      setUpiQrDataUrl('');
      return;
    }
    let active = true;
    buildUpiQrDataUrl({ amount: finalTotal, orderId })
      .then(url => { if (active) setUpiQrDataUrl(url); })
      .catch(() => { if (active) setUpiQrDataUrl(''); });
    return () => { active = false; };
  }, [isOpen, selectedPayment, finalTotal, orderId]);

  if (!isOpen) return null;

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!address.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!/^\d{10}$/.test(address.phoneNumber.trim())) errors.phoneNumber = 'Enter a valid 10-digit mobile number';
    if (!/^\d{6}$/.test(address.pincode.trim())) errors.pincode = 'Enter a valid 6-digit Indian PIN code';
    if (!address.flatHouse.trim()) errors.flatHouse = 'House / Flat details required';
    if (!address.areaStreet.trim()) errors.areaStreet = 'Area / Locality required';
    if (!address.city.trim()) errors.city = 'City required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!isWhatsAppConfigured()) {
      setFormErrors({
        submit: 'Ordering is temporarily unavailable. Please contact the store directly.'
      });
      return;
    }

    setIsProcessing(true);
    setBlockedOrder(null);

    const pinRes = checkDeliveryPincode(address.pincode);
    const deliveryDate = pinRes.valid ? pinRes.deliveryDateStr : 'Within 3-4 Days';

    const newOrder: Order = {
      id: orderId,
      items: [...cart],
      shippingAddress: address,
      subtotal,
      discount: couponDiscount,
      shippingFee,
      total: finalTotal,
      paymentMethod: selectedPayment,
      paymentDetails: selectedPayment === 'upi' ? { upiId: UPI_VPA } : undefined,
      orderDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      estimatedDeliveryDate: deliveryDate,
      status: 'Confirmed',
      trackingNumber: `BD${Math.floor(10000000 + Math.random() * 90000000)}IN`
    };

    // Must run synchronously inside the submit handler — deferring this behind a
    // timeout gets the WhatsApp tab blocked as an unsolicited popup.
    const opened = openWhatsAppOrder(newOrder);
    setIsProcessing(false);

    if (!opened) {
      setBlockedOrder(newOrder);
      setFormErrors({
        submit: 'Your browser blocked the WhatsApp window. Use the link below to send your order.'
      });
      return;
    }

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    addOrder(newOrder);
    onOrderPlaced(newOrder);
    // Next order in this session needs its own reference.
    setOrderId(makeOrderId());
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl relative border border-stone-200 overflow-hidden animate-scale-in max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            <h3 className="font-serif text-lg font-bold">
              Secure Checkout & Delivery
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handlePlaceOrder} className="overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Delivery Address & Payment */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section 1: Shipping Address */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                <MapPin className="w-4 h-4 text-amber-800" />
                <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wide">
                  1. Indian Delivery Address
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:ring-1 focus:ring-amber-800"
                  />
                  {formErrors.fullName && <p className="text-rose-600 text-[10px] mt-0.5">{formErrors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Mobile Number (for SMS & Courier) *</label>
                  <div className="flex">
                    <span className="bg-stone-200 border border-r-0 border-stone-300 rounded-l-xl px-2.5 py-2 text-stone-600 font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="9876543210"
                      value={address.phoneNumber}
                      onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value.replace(/\D/g, '') })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-r-xl px-3 py-2 text-stone-800 focus:ring-1 focus:ring-amber-800"
                    />
                  </div>
                  {formErrors.phoneNumber && <p className="text-rose-600 text-[10px] mt-0.5">{formErrors.phoneNumber}</p>}
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">6-Digit PIN Code *</label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="e.g. 110001, 560001"
                    value={address.pincode}
                    onChange={(e) => setAddress({ ...address, pincode: e.target.value.replace(/\D/g, '') })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:ring-1 focus:ring-amber-800 font-mono"
                  />
                  {formErrors.pincode && <p className="text-rose-600 text-[10px] mt-0.5">{formErrors.pincode}</p>}
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Email ID (for Invoice)</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={address.email}
                    onChange={(e) => setAddress({ ...address, email: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:ring-1 focus:ring-amber-800"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-stone-700 font-bold mb-1">Flat, House no., Building, Apartment *</label>
                  <input
                    type="text"
                    placeholder="e.g. Flat 402, Royal Palms Apartment"
                    value={address.flatHouse}
                    onChange={(e) => setAddress({ ...address, flatHouse: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:ring-1 focus:ring-amber-800"
                  />
                  {formErrors.flatHouse && <p className="text-rose-600 text-[10px] mt-0.5">{formErrors.flatHouse}</p>}
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Area, Street, Sector, Village *</label>
                  <input
                    type="text"
                    placeholder="e.g. Indiranagar 100ft Road"
                    value={address.areaStreet}
                    onChange={(e) => setAddress({ ...address, areaStreet: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:ring-1 focus:ring-amber-800"
                  />
                  {formErrors.areaStreet && <p className="text-rose-600 text-[10px] mt-0.5">{formErrors.areaStreet}</p>}
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Landmark (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Near Metro Station"
                    value={address.landmark}
                    onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:ring-1 focus:ring-amber-800"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">City / Town *</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:ring-1 focus:ring-amber-800"
                  />
                  {formErrors.city && <p className="text-rose-600 text-[10px] mt-0.5">{formErrors.city}</p>}
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">State / UT *</label>
                  <select
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-800 focus:ring-1 focus:ring-amber-800"
                  >
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Payment Method */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                <CreditCard className="w-4 h-4 text-amber-800" />
                <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wide">
                  2. Select Payment Method
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* UPI */}
                {isUpiConfigured() && (
                <button
                  type="button"
                  onClick={() => setSelectedPayment('upi')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                    selectedPayment === 'upi'
                      ? 'border-amber-800 bg-amber-50/70 ring-1 ring-amber-800'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Smartphone className="w-4 h-4 text-amber-800" />
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">Fastest</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs font-bold text-stone-900 block">UPI / QR</span>
                    <span className="text-[10px] text-stone-500">GPay, PhonePe, Paytm</span>
                  </div>
                </button>
                )}

                {/* COD */}
                <button
                  type="button"
                  onClick={() => setSelectedPayment('cod')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                    selectedPayment === 'cod'
                      ? 'border-amber-800 bg-amber-50/70 ring-1 ring-amber-800'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Banknote className="w-4 h-4 text-stone-700" />
                  <div className="mt-2">
                    <span className="text-xs font-bold text-stone-900 block">Cash on Delivery</span>
                    <span className="text-[10px] text-stone-500">Pay at Doorstep</span>
                  </div>
                </button>

              </div>

              {/* UPI Sub-Options */}
              {selectedPayment === 'upi' && (
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 animate-fade-in text-xs">
                  {/* Payee QR — scannable by any UPI app */}
                  <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-stone-200">
                    <div className="w-24 h-24 rounded-lg border border-stone-200 bg-white flex items-center justify-center shrink-0 overflow-hidden">
                      {upiQrDataUrl ? (
                        <img
                          src={upiQrDataUrl}
                          alt={`UPI QR to pay ${formatINR(finalTotal)} to ${UPI_VPA}`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <QrCode className="w-10 h-10 text-stone-300 animate-pulse" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-stone-900">
                        Scan to pay {formatINR(finalTotal)}
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Works with PhonePe, Google Pay, Paytm, BHIM or any UPI app.
                      </p>
                      <p className="text-[10px] text-stone-500">
                        Paying to <strong className="text-stone-700">{UPI_VPA}</strong>
                      </p>
                      <p className="text-[10px] text-stone-500">
                        Reference <strong className="text-stone-700">{orderId}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Direct app hand-off — only resolves on a phone with the app installed */}
                  {supportsUpiIntent() && (
                    <div className="space-y-1.5">
                      <p className="text-stone-700 font-bold">Or open your UPI app directly</p>
                      <div className="grid grid-cols-2 gap-2">
                        {(['phonepe', 'gpay', 'paytm', 'any'] as UpiApp[]).map(app => (
                          <a
                            key={app}
                            href={buildUpiUrl(app, { amount: finalTotal, orderId })}
                            className={`px-3 py-2 rounded-lg font-bold text-xs text-center transition border ${
                              app === 'phonepe'
                                ? 'bg-[#5F259F] text-white border-[#5F259F] hover:bg-[#4d1e80]'
                                : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            {UPI_APP_LABELS[app]}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-[11px] text-stone-600 bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                    Pay first, then tap <strong>Send order on WhatsApp</strong> below and attach
                    the payment screenshot. We confirm your order once payment reflects.
                  </p>
                </div>
              )}

              {selectedPayment === 'cod' && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1 animate-fade-in">
                  <p className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-800" /> Cash on Delivery Confirmed
                  </p>
                  <p className="text-[11px]">
                    You can pay <strong className="text-amber-950">{formatINR(finalTotal)}</strong> in cash or via UPI to our delivery partner at your doorstep.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Order Summary & Place CTA */}
          <div className="lg:col-span-5 bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wide border-b border-stone-200 pb-2">
                Order Summary ({cart.length} items)
              </h4>

              {/* Items mini list */}
              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 text-xs">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-10 h-12 object-cover rounded-lg border border-stone-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-stone-800 truncate">{item.product.name}</p>
                      <p className="text-[10px] text-stone-500">Size: {item.selectedSize} &times; {item.quantity}</p>
                    </div>
                    <span className="font-bold text-stone-900">{formatINR(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-200 pt-3">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span>{formatINR(subtotal)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Coupon ({appliedCoupon.code})</span>
                    <span>-{formatINR(couponDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Delivery across India</span>
                  <span className={shippingFee === 0 ? 'text-emerald-700 font-bold' : ''}>
                    {shippingFee === 0 ? 'FREE' : formatINR(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Total Payable</span>
                  <span className="text-amber-900">{formatINR(finalTotal)}</span>
                </div>
              </div>
            </div>

            {/* Place Order CTA */}
            <div className="space-y-2 pt-4">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 bg-stone-900 hover:bg-amber-800 disabled:bg-stone-400 text-white rounded-xl text-xs font-extrabold tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-stone-900/10"
              >
                {isProcessing ? (
                  <span>Opening WhatsApp...</span>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4 text-amber-400" />
                    <span>SEND ORDER ON WHATSAPP ({formatINR(finalTotal)})</span>
                  </>
                )}
              </button>

              {formErrors.submit && (
                <p className="text-rose-600 text-[11px] font-bold text-center">{formErrors.submit}</p>
              )}

              {blockedOrder && (
                <a
                  href={buildOrderWhatsAppUrl(blockedOrder)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 bg-[#075E54] hover:bg-[#0a7161] text-white rounded-xl text-xs font-extrabold tracking-wider text-center transition"
                >
                  OPEN WHATSAPP MANUALLY
                </a>
              )}

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Order confirmed on WhatsApp &bull; Genuine Indian Handloom</span>
              </div>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
};
