import React from 'react';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  MapPin, 
  Download, 
  Share2, 
  Sparkles, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Order } from '../types';
import { formatINR } from '../utils/pincodeChecker';

interface OrderSuccessModalProps {
  order: Order | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 animate-scale-in max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Celebration Header */}
        <div className="text-center space-y-2 pb-6 border-b border-stone-100">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Order Confirmed!
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Thank you, <strong className="text-stone-900">{order.shippingAddress.fullName}</strong>. Your artisanal garments are being hand-packed.
          </p>
          <div className="inline-block bg-stone-100 px-3 py-1 rounded-full text-xs font-mono font-bold text-stone-800">
            Order ID: {order.id}
          </div>
        </div>

        {/* Delivery Timeline Progress */}
        <div className="my-6 p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-amber-950 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-amber-700" />
              Estimated Delivery: <strong className="text-amber-900">{order.estimatedDeliveryDate}</strong>
            </span>
            <span className="text-[11px] font-mono text-stone-600 font-semibold">
              Track: {order.trackingNumber}
            </span>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-4 gap-2 pt-2 text-center text-[10px] font-bold">
            <div className="space-y-1">
              <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xs">✓</div>
              <span className="text-emerald-800 block">Confirmed</span>
            </div>
            <div className="space-y-1">
              <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto text-xs animate-pulse">2</div>
              <span className="text-amber-900 block">Handcrafting</span>
            </div>
            <div className="space-y-1">
              <div className="w-6 h-6 bg-stone-200 text-stone-500 rounded-full flex items-center justify-center mx-auto text-xs">3</div>
              <span className="text-stone-400 block">BlueDart Dispatch</span>
            </div>
            <div className="space-y-1">
              <div className="w-6 h-6 bg-stone-200 text-stone-500 rounded-full flex items-center justify-center mx-auto text-xs">4</div>
              <span className="text-stone-400 block">Delivered</span>
            </div>
          </div>
        </div>

        {/* Order Details & Summary */}
        <div className="space-y-4 text-xs">
          
          {/* Address & Payment Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <div>
              <span className="text-stone-400 font-bold uppercase text-[10px] block mb-1">
                Shipping Destination
              </span>
              <p className="font-bold text-stone-800">{order.shippingAddress.fullName}</p>
              <p className="text-stone-600">{order.shippingAddress.flatHouse}, {order.shippingAddress.areaStreet}</p>
              <p className="text-stone-600">{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
              <p className="text-stone-500 mt-1">Phone: +91 {order.shippingAddress.phoneNumber}</p>
            </div>

            <div>
              <span className="text-stone-400 font-bold uppercase text-[10px] block mb-1">
                Payment Details
              </span>
              <p className="font-bold text-stone-800 capitalize">
                {order.paymentMethod === 'upi' ? 'UPI Payment (Prepaid)' : order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Card / NetBanking'}
              </p>
              {order.paymentDetails?.upiId && (
                <p className="text-stone-500 text-[11px]">VPA: {order.paymentDetails.upiId}</p>
              )}
              <p className="text-emerald-700 font-semibold mt-1">Status: Paid / Verified</p>
            </div>
          </div>

          {/* Purchased Items List */}
          <div>
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-2">
              Items in this Order
            </h4>
            <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden bg-white">
              {order.items.map((item, idx) => (
                <div key={idx} className="p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-14 object-cover rounded-xl border border-stone-200"
                    />
                    <div>
                      <p className="font-bold text-stone-900 line-clamp-1">{item.product.name}</p>
                      <p className="text-[11px] text-stone-500">Size: {item.selectedSize} &bull; Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-bold text-stone-900">{formatINR(item.product.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="p-4 bg-stone-900 text-white rounded-2xl flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider">Total Paid Amount</span>
            <span className="text-xl font-serif font-extrabold text-amber-400">{formatINR(order.total)}</span>
          </div>

        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-stone-200">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-4 py-2.5 border border-stone-300 hover:bg-stone-100 rounded-xl text-xs font-bold text-stone-700 transition flex items-center justify-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Invoice</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-stone-900 hover:bg-amber-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
