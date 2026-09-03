import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, ArrowRight, Sparkles, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter & Indian Craftsmanship Pledge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-800 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join The VYUGAM Privilege Club</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-100">
              Get ₹500 OFF on your first festive order
            </h3>
            <p className="text-stone-400 max-w-md">
              Subscribe for exclusive artisan drop previews, wedding styling lookbooks, and private sale access.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-10 pr-3 py-3 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition flex items-center gap-1.5 shrink-0"
              >
                <span>Join</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-emerald-400 font-bold text-xs mt-2 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Welcome! Coupon code VYUGAM500 is sent to your inbox.
              </p>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/50 shadow-md bg-stone-900 shrink-0 p-0.5">
                <img
                  src="/logo.jpg"
                  alt="VYUGAM Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-stone-100">
                  VYUGAM
                </span>
                <span className="text-[9px] tracking-[0.2em] font-medium text-amber-400 uppercase -mt-0.5">
                  Luxury Indian Apparel
                </span>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed text-xs max-w-sm">
              Dedicated to celebrating India's rich handloom heritage. Curating pure silks, hand-embroidered kurtas, linen apparel, and wedding couture with contemporary grace.
            </p>
            <div className="space-y-1.5 text-stone-400 text-[11px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Atelier & Flagship Store: Jaipur & Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Customer Care: +91 (080) 4892-0000 (10 AM - 7 PM IST)</span>
              </div>
            </div>
          </div>

          {/* Women's Couture */}
          <div className="space-y-3">
            <h4 className="font-bold text-stone-100 uppercase tracking-wider text-xs">
              Women's Wear
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition">Banarasi Silk Sarees</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Anarkali & Kurta Sets</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Festive & Bridal Lehengas</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Pure Linen Midi Dresses</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Georgette Co-ord Sets</a></li>
            </ul>
          </div>

          {/* Men's Collection */}
          <div className="space-y-3">
            <h4 className="font-bold text-stone-100 uppercase tracking-wider text-xs">
              Men's Collection
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition">Chanderi Silk Kurtas</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Brocade Nehru Jackets</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Groom Sherwani Sets</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Organic Khadi Linen Shirts</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Tailored Chino Trousers</a></li>
            </ul>
          </div>

          {/* Customer Care & Policies */}
          <div className="space-y-3">
            <h4 className="font-bold text-stone-100 uppercase tracking-wider text-xs">
              Customer Support
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition">Track Your Order</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Indian Sizing Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">7-Day Return & Exchange</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Delivery & COD Terms</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Authenticity & Silk Mark</a></li>
            </ul>
          </div>

        </div>

        {/* Indian Payment Badges & Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-stone-400 text-[11px]">
            <span>Supported Indian Payment Modes:</span>
            <span className="bg-stone-900 border border-stone-700 px-2 py-0.5 rounded text-stone-200 font-bold">UPI</span>
            <span className="bg-stone-900 border border-stone-700 px-2 py-0.5 rounded text-stone-200 font-bold">Google Pay</span>
            <span className="bg-stone-900 border border-stone-700 px-2 py-0.5 rounded text-stone-200 font-bold">PhonePe</span>
            <span className="bg-stone-900 border border-stone-700 px-2 py-0.5 rounded text-stone-200 font-bold">RuPay</span>
            <span className="bg-stone-900 border border-stone-700 px-2 py-0.5 rounded text-stone-200 font-bold">COD</span>
          </div>

          <div className="text-stone-500 text-[11px] flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} VYUGAM Luxury Apparel India Pvt Ltd. Handcrafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>in India.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
