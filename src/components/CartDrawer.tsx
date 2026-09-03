import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  Tag, 
  Check, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/pincodeChecker';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    originalSubtotal,
    totalSavings,
    appliedCoupon,
    couponDiscount,
    applyCoupon,
    removeCoupon,
    shippingFee,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    finalTotal
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState<{ success: boolean; text: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    setCouponMessage({ success: res.success, text: res.message });
    if (res.success) setCouponInput('');
  };

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      <div 
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between animate-slide-in relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-800" />
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Shopping Bag ({cart.length})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-amber-50/80 px-5 py-3 border-b border-amber-200/60 text-xs">
          {amountNeededForFreeShipping > 0 ? (
            <div className="space-y-1.5">
              <p className="text-amber-950 font-medium flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-amber-700" />
                <span>Add <strong className="text-amber-900 font-bold">{formatINR(amountNeededForFreeShipping)}</strong> more for <strong>FREE Delivery</strong> across India</span>
              </p>
              <div className="w-full bg-amber-200/80 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          ) : (
            <p className="text-emerald-800 font-bold flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>🎉 Congratulations! You have unlocked <strong>FREE Delivery</strong> across India!</span>
            </p>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-base font-bold text-stone-800">Your bag is empty</h4>
              <p className="text-xs text-stone-500">Explore our handloom sarees, festive kurtas & linen shirts</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800 transition"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div 
                key={`${item.product.id}-${item.selectedSize}-${idx}`}
                className="flex gap-3 pb-4 border-b border-stone-100 last:border-0"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-stone-400 hover:text-rose-600 p-0.5"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Size: <span className="font-bold text-stone-800">{item.selectedSize}</span> | Fabric: <span className="text-stone-700">{item.product.fabric}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {/* Quantity counter */}
                    <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                        className="p-1 hover:bg-stone-200 text-stone-700"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-stone-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                        className="p-1 hover:bg-stone-200 text-stone-700"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="text-xs font-bold text-stone-900 block">
                        {formatINR(item.product.price * item.quantity)}
                      </span>
                      <span className="text-[10px] text-stone-400 line-through">
                        {formatINR(item.product.originalPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Area */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3.5">
            
            {/* Coupon Box */}
            <form onSubmit={handleApplyCoupon} className="space-y-1.5">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Coupon Code (e.g. FESTIVE20)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    className="w-full bg-white border border-stone-300 rounded-xl pl-9 pr-3 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-800 font-mono uppercase"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!couponInput}
                  className="px-3.5 py-1.5 bg-stone-800 hover:bg-stone-950 disabled:bg-stone-300 text-white rounded-xl text-xs font-bold transition"
                >
                  Apply
                </button>
              </div>

              {couponMessage && (
                <p className={`text-[11px] font-medium ${couponMessage.success ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {couponMessage.text}
                </p>
              )}

              {appliedCoupon && (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs">
                  <span className="font-bold text-emerald-900 flex items-center gap-1 font-mono">
                    <Sparkles className="w-3 h-3 text-emerald-600" /> {appliedCoupon.code} Applied (-{formatINR(couponDiscount)})
                  </span>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-stone-400 hover:text-rose-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </form>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-200 pt-3">
              <div className="flex justify-between">
                <span>Total MRP (Incl. Taxes)</span>
                <span className="text-stone-800">{formatINR(originalSubtotal)}</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Total Bag Discount</span>
                <span>-{formatINR(originalSubtotal - subtotal)}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Coupon Savings</span>
                  <span>-{formatINR(couponDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery across India</span>
                <span className={shippingFee === 0 ? 'text-emerald-700 font-bold' : 'text-stone-800'}>
                  {shippingFee === 0 ? 'FREE' : formatINR(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-stone-900 pt-2 border-t border-stone-200">
                <span>Order Total</span>
                <span className="text-base text-amber-900">{formatINR(finalTotal)}</span>
              </div>
            </div>

            {/* Total Savings Highlight */}
            {totalSavings > 0 && (
              <div className="bg-emerald-100/70 text-emerald-900 text-[11px] font-bold text-center py-1.5 rounded-lg">
                ✨ You are saving {formatINR(totalSavings)} on this order!
              </div>
            )}

            {/* Checkout CTA */}
            <button
              onClick={() => {
                setIsCartOpen(false);
                onProceedToCheckout();
              }}
              className="w-full py-3.5 bg-stone-900 hover:bg-amber-800 text-white rounded-xl text-xs font-extrabold tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-stone-900/10"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Safe & Secure Payments (UPI, Cards, COD)</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
