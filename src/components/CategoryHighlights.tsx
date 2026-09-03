import React from 'react';
import { Gender } from '../types';

interface CategoryHighlightsProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  selectedGender: Gender;
}

const CATEGORIES = [
  { id: 'all', label: 'All Collections', gender: 'all', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=300&q=80' },
  { id: 'kurta-sets', label: 'Kurta Sets', gender: 'women', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=300&q=80' },
  { id: 'sarees', label: 'Banarasi Sarees', gender: 'women', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=300&q=80' },
  { id: 'lehengas', label: 'Lehenga Choli', gender: 'women', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=300&q=80' },
  { id: 'men-kurtas', label: 'Men Kurtas', gender: 'men', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=300&q=80' },
  { id: 'nehru-jackets', label: 'Nehru Jackets', gender: 'men', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80' },
  { id: 'linen-shirts', label: 'Khadi & Linen Shirts', gender: 'men', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=300&q=80' },
  { id: 'women-dresses', label: 'Indo-Western Dresses', gender: 'women', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80' },
  { id: 'co-ords', label: 'Co-ord Sets', gender: 'women', image: 'https://images.unsplash.com/photo-1729347917808-e3e35a462fec?auto=format&fit=crop&w=300&q=80' },
  { id: 'casual-tees', label: 'Everyday Tees', gender: 'men', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=300&q=80' },
  { id: 'sherwanis', label: 'Royal Sherwanis', gender: 'men', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=300&q=80' }
];

export const CategoryHighlights: React.FC<CategoryHighlightsProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedGender
}) => {
  const filtered = CATEGORIES.filter(c => {
    if (selectedGender === 'all') return true;
    return c.gender === 'all' || c.gender === selectedGender;
  });

  return (
    <div className="w-full min-w-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            Shop by Category
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">Explore authentic handcrafted Indian silhouettes</p>
        </div>
      </div>

      {/* Horizontal scrolling container */}
      <div className="w-full flex gap-3 sm:gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x">
        {filtered.map(cat => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex-shrink-0 flex flex-col items-center gap-2 group snap-start transition-all ${
                isSelected ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 p-0.5 transition ${
                isSelected ? 'border-amber-600 shadow-md ring-2 ring-amber-300' : 'border-stone-200 group-hover:border-amber-400'
              }`}>
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition duration-300"
                />
              </div>
              <span className={`text-xs font-semibold text-center whitespace-nowrap transition ${
                isSelected ? 'text-amber-800 font-bold' : 'text-stone-700 group-hover:text-amber-900'
              }`}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
