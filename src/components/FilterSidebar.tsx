import React from 'react';
import { X, RotateCcw, Filter, Sparkles } from 'lucide-react';
import { FilterState, Gender, Occasion, Fabric } from '../types';
import { formatINR } from '../utils/pincodeChecker';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

const OCCASIONS: Occasion[] = ['Festive', 'Wedding', 'Casual', 'Workwear', 'Party'];
const FABRICS: Fabric[] = [
  'Pure Cotton', 
  'Chanderi Silk', 
  'Banarasi Silk', 
  'Mulmul', 
  'Pure Linen', 
  'Georgette', 
  'Khadi', 
  'Raw Silk'
];

const PRICE_PRESETS = [
  { label: 'All Prices', min: 0, max: 20000 },
  { label: 'Under ₹2,000', min: 0, max: 2000 },
  { label: '₹2,000 - ₹5,000', min: 2000, max: 5000 },
  { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
  { label: 'Above ₹10,000', min: 10000, max: 20000 }
];

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  isOpenMobile,
  onCloseMobile
}) => {
  const content = (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-amber-800" />
          <h3 className="font-serif text-base font-bold text-stone-900">
            Refine Collection
          </h3>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs text-stone-500 hover:text-amber-800 flex items-center gap-1 transition"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Gender Segmented Tabs */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
          Gender
        </label>
        <div className="grid grid-cols-3 gap-1.5 bg-stone-100 p-1 rounded-xl">
          {(['all', 'women', 'men'] as Gender[]).map((g) => (
            <button
              key={g}
              onClick={() => onFilterChange({ gender: g, category: 'all' })}
              className={`py-1.5 text-xs font-bold rounded-lg capitalize transition ${
                filters.gender === g
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Occasion Filter */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
          Occasion
        </label>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onFilterChange({ occasion: 'all' })}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
              filters.occasion === 'all'
                ? 'bg-amber-900 text-white border-amber-900 font-bold'
                : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
            }`}
          >
            All Occasions
          </button>
          {OCCASIONS.map((occ) => (
            <button
              key={occ}
              onClick={() => onFilterChange({ occasion: filters.occasion === occ ? 'all' : occ })}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                filters.occasion === occ
                  ? 'bg-amber-900 text-white border-amber-900 font-bold'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
              }`}
            >
              {occ === 'Festive' || occ === 'Wedding' ? `✨ ${occ}` : occ}
            </button>
          ))}
        </div>
      </div>

      {/* Fabric Filter */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
          Authentic Indian Fabric
        </label>
        <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
          <button
            onClick={() => onFilterChange({ fabric: 'all' })}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition flex items-center justify-between ${
              filters.fabric === 'all' ? 'bg-amber-50 text-amber-900 font-bold' : 'text-stone-600 hover:bg-stone-50'
            }`}
          >
            <span>All Fabrics</span>
          </button>
          {FABRICS.map((fab) => (
            <button
              key={fab}
              onClick={() => onFilterChange({ fabric: filters.fabric === fab ? 'all' : fab })}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition flex items-center justify-between ${
                filters.fabric === fab ? 'bg-amber-50 text-amber-900 font-bold' : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              <span>{fab}</span>
              {filters.fabric === fab && <span className="w-1.5 h-1.5 rounded-full bg-amber-800"></span>}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
          Price Budget (INR)
        </label>
        <div className="space-y-1.5">
          {PRICE_PRESETS.map((preset, idx) => {
            const isSelected = 
              filters.priceRange[0] === preset.min && filters.priceRange[1] === preset.max;
            return (
              <button
                key={idx}
                onClick={() => onFilterChange({ priceRange: [preset.min, preset.max] })}
                className={`w-full text-left px-3 py-1.5 rounded-xl text-xs transition border ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 font-bold'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sort By */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700 font-medium"
        >
          <option value="featured">Featured & Recommended</option>
          <option value="price-low">Price: Low to High (₹)</option>
          <option value="price-high">Price: High to Low (₹)</option>
          <option value="rating">Customer Rating</option>
          <option value="discount">Biggest Discounts (%)</option>
        </select>
      </div>

    </div>
  );

  return (
    <>
      {/* Desktop static sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm sticky top-24 self-start">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden bg-black/60 backdrop-blur-sm flex justify-start">
          <div className="bg-white w-full max-w-xs h-full p-6 overflow-y-auto shadow-2xl relative animate-slide-in">
            <div className="flex justify-end pb-2">
              <button
                onClick={onCloseMobile}
                className="p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {content}
            <div className="mt-8 pt-4 border-t border-stone-200">
              <button
                onClick={onCloseMobile}
                className="w-full py-3 bg-stone-900 text-white rounded-xl text-xs font-bold shadow-md"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
