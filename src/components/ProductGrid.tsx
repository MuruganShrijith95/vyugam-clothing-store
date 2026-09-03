import React from 'react';
import { Product, FilterState } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, X, Frown } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  onQuickView: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  filters,
  onFilterChange,
  onResetFilters,
  onQuickView
}) => {
  const activeChips: { label: string; key: keyof FilterState; value: any }[] = [];

  if (filters.gender !== 'all') {
    activeChips.push({ label: `Gender: ${filters.gender}`, key: 'gender', value: 'all' });
  }
  if (filters.category !== 'all') {
    activeChips.push({ label: `Category: ${filters.category}`, key: 'category', value: 'all' });
  }
  if (filters.occasion !== 'all') {
    activeChips.push({ label: `Occasion: ${filters.occasion}`, key: 'occasion', value: 'all' });
  }
  if (filters.fabric !== 'all') {
    activeChips.push({ label: `Fabric: ${filters.fabric}`, key: 'fabric', value: 'all' });
  }
  if (filters.searchQuery) {
    activeChips.push({ label: `Search: "${filters.searchQuery}"`, key: 'searchQuery', value: '' });
  }

  return (
    <div className="flex-1 space-y-4">
      
      {/* Top status bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 capitalize">
            {filters.category !== 'all' ? filters.category.replace('-', ' ') : 'Our Curated Collection'}
          </h2>
          <p className="text-xs text-stone-500">
            Showing <span className="font-bold text-stone-800">{products.length}</span> luxury handcrafted garments
          </p>
        </div>

        {/* Active Filter Chips */}
        {activeChips.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {activeChips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium"
              >
                <span>{chip.label}</span>
                <button
                  onClick={() => onFilterChange({ [chip.key]: chip.value })}
                  className="hover:text-stone-900 p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <button
              onClick={onResetFilters}
              className="text-xs text-stone-500 hover:text-amber-800 underline ml-1"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Grid or Empty State */}
      {products.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-stone-200/80 space-y-3">
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-400">
            <Frown className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-800">
            No matching outfits found
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Try adjusting your fabric, occasion, or budget filters to explore more of our Indian handcrafted collection.
          </p>
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      )}

    </div>
  );
};
