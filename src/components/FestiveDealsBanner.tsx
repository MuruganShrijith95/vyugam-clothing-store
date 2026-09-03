import React, { useState } from 'react';
import { Sparkles, Copy, Check, Percent, Gift } from 'lucide-react';
import { AVAILABLE_COUPONS } from '../data/products';

export const FestiveDealsBanner: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div id="festive-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-8">
      <div className="rounded-2xl bg-gradient-to-r from-amber-900 via-rose-950 to-stone-900 text-white p-6 sm:p-8 shadow-xl border border-amber-600/30 relative overflow-hidden">
        
        {/* Background Decorative Pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-500/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Indian Festive Discounts</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
              Utsav & Shaadi Season Offers
            </h3>
            <p className="text-sm text-stone-300">
              Upgrade your celebration wardrobe with pure silks, handloom kurtas, and designer lehengas. Apply these coupons at checkout.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap sm:flex-nowrap gap-3">
            {AVAILABLE_COUPONS.slice(0, 2).map((coupon) => (
              <div
                key={coupon.code}
                className="flex-1 bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl p-3.5 border border-white/20 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono font-bold text-sm tracking-wider text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-amber-400/40">
                    {coupon.code}
                  </span>
                  <button
                    onClick={() => handleCopy(coupon.code)}
                    className="p-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-white transition flex items-center gap-1 text-xs"
                    title="Copy coupon code"
                  >
                    {copiedCode === coupon.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] font-bold text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-stone-200 line-clamp-2">
                  {coupon.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
