import React from 'react';
import { Star, ShieldCheck, Truck, RefreshCw, HeartHandshake, Award } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sneha Kulkarni',
    city: 'Mumbai',
    quote: 'The Banarasi silk saree quality surpassed my expectations. The zari is genuine and soft. Best Indian ethnic online boutique!',
    rating: 5,
    tag: 'Saree Collection'
  },
  {
    name: 'Arjun Verma',
    city: 'Bengaluru',
    quote: 'Ordered the Chanderi Silk Kurta Set and Nehru Jacket for Diwali. Fitting was exact according to the size chart, delivered in 2 days to Bangalore.',
    rating: 5,
    tag: 'Men Festive'
  },
  {
    name: 'Pooja Agarwal',
    city: 'New Delhi',
    quote: 'Breathable Jaipur mulmul anarkali! Love the authentic block prints and quick COD delivery with SMS updates.',
    rating: 5,
    tag: 'Anarkali Sets'
  }
];

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="bg-stone-100/70 border-y border-stone-200/80 py-16 my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-amber-800 uppercase">
            Customer Love Across India
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Trusted by 50,000+ Happy Shoppers
          </h2>
          <p className="text-xs text-stone-500">
            Real experiences from patrons across Delhi, Mumbai, Bangalore, Chennai, Kolkata, and beyond.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    {t.tag}
                  </span>
                </div>
                <p className="text-xs text-stone-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{t.name}</h4>
                  <p className="text-[11px] text-stone-400">{t.city}, India</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  ✓ Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-stone-200">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-stone-200/80">
            <Award className="w-6 h-6 text-amber-700 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-stone-900">Certified Weaves</h4>
              <p className="text-[10px] text-stone-500">Silk Mark & Handloom Assured</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-stone-200/80">
            <Truck className="w-6 h-6 text-amber-700 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-stone-900">Express Delivery</h4>
              <p className="text-[10px] text-stone-500">Across 19,000+ Indian PIN Codes</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-stone-200/80">
            <RefreshCw className="w-6 h-6 text-amber-700 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-stone-900">7-Day Free Exchange</h4>
              <p className="text-[10px] text-stone-500">Doorstep pickup & quick refund</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-stone-200/80">
            <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-stone-900">100% Safe Payments</h4>
              <p className="text-[10px] text-stone-500">UPI, COD, NetBanking & Cards</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
