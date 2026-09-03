import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, RefreshCw, Award } from 'lucide-react';
import { Gender } from '../types';

interface HeroBannerProps {
  onSelectGender: (gender: Gender) => void;
  onExploreFestive: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onSelectGender, onExploreFestive }) => {
  return (
    <div className="relative overflow-hidden bg-stone-900 text-white">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(128,0,32,0.35),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.2),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Festive & Wedding Edit 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-100 leading-[1.15]">
              Royal Indian Weaves, <br />
              <span className="text-amber-400 italic">Contemporary Soul.</span>
            </h1>

            <p className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Curated artisanal fashion handcrafted for the modern Indian wardrobe. From Banarasi handlooms & Sanganeri Anarkalis to bespoke Chanderi kurtas & pure linen shirts.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onSelectGender('women')}
                className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide transition transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 flex items-center gap-2"
              >
                <span>Shop Women's Couture</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectGender('men')}
                className="px-6 py-3.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold text-sm tracking-wide transition border border-stone-700 hover:border-stone-500 flex items-center gap-2"
              >
                <span>Shop Men's Ethnic & Linen</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreFestive}
                className="px-5 py-3.5 rounded-full bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 font-semibold text-sm border border-rose-800/50 transition flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Wedding Collection</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800/80 text-left">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stone-200">100% Handcrafted</h4>
                  <p className="text-[11px] text-stone-400 hidden sm:block">Artisanal Mastercraft</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stone-200">Pan-India Delivery</h4>
                  <p className="text-[11px] text-stone-400 hidden sm:block">19,000+ PIN codes</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <RefreshCw className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stone-200">7-Day Free Exchange</h4>
                  <p className="text-[11px] text-stone-400 hidden sm:block">Hassle-free doorstep pickup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Dual Visual Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
            
            {/* Women card */}
            <div 
              onClick={() => onSelectGender('women')}
              className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700/50 transform hover:-translate-y-1 transition duration-300 aspect-[3/4]"
            >
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80"
                alt="Women's Indian Ethnic Collection"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex flex-col justify-end p-4">
                <span className="text-[11px] font-bold tracking-widest text-amber-300 uppercase">Women's Edit</span>
                <h3 className="font-serif text-lg font-bold text-white leading-tight">Anarkalis & Sarees</h3>
                <span className="text-xs text-stone-300 flex items-center gap-1 mt-1 group-hover:text-amber-300 transition">
                  Explore Designs &rarr;
                </span>
              </div>
            </div>

            {/* Men card */}
            <div 
              onClick={() => onSelectGender('men')}
              className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700/50 transform hover:-translate-y-1 transition duration-300 aspect-[3/4] mt-6"
            >
              <img
                src="https://images.unsplash.com/photo-1621786030684-4c64829cff1b?auto=format&fit=crop&w=700&q=80"
                alt="Men's Indian Ethnic & Linen Collection"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex flex-col justify-end p-4">
                <span className="text-[11px] font-bold tracking-widest text-amber-300 uppercase">Men's Edit</span>
                <h3 className="font-serif text-lg font-bold text-white leading-tight">Festive Kurtas & Linen</h3>
                <span className="text-xs text-stone-300 flex items-center gap-1 mt-1 group-hover:text-amber-300 transition">
                  Explore Designs &rarr;
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
