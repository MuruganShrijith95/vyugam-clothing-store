import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, Tag, ShieldCheck } from 'lucide-react';

const MESSAGES = [
  { icon: Sparkles, text: '✨ GRAND FESTIVE SALE: Extra 20% OFF with code FESTIVE20' },
  { icon: Truck, text: '🚚 FREE Delivery Across India on orders above ₹1,499' },
  { icon: Tag, text: '🏷️ Flat 10% OFF on your first purchase with code FIRST10' },
  { icon: ShieldCheck, text: '💎 100% Handcrafted Indian Fabrics | Easy 7-Day Exchanges' }
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentMsg = MESSAGES[currentIndex];
  const Icon = currentMsg.icon;

  return (
    <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 select-none border-b border-stone-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-2 text-stone-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Dispatching within 24 Hours across 19,000+ PIN Codes</span>
        </div>

        <div className="flex-1 min-w-0 flex items-center justify-center gap-2 transition-all duration-500 font-medium">
          <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">{currentMsg.text}</span>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-stone-400">
          <span className="hover:text-amber-400 cursor-pointer transition">COD Available</span>
          <span className="text-stone-700">|</span>
          <span className="hover:text-amber-400 cursor-pointer transition">Track Order</span>
        </div>
      </div>
    </div>
  );
};
