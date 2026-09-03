import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { formatINR } from '../utils/pincodeChecker';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickView: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  onQuickView
}) => {
  const { wishlist, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl relative border border-stone-200 animate-scale-in max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Your Saved Wishlist ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto py-4 flex-1">
          {wishlist.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-400">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-base font-bold text-stone-800">Your wishlist is empty</h4>
              <p className="text-xs text-stone-500">Tap the heart icon on any outfit to save your favorites for later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {wishlist.map((product) => (
                <div 
                  key={product.id}
                  className="flex gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-200 justify-between items-center"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-20 object-cover rounded-xl border border-stone-200 shrink-0 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onQuickView(product);
                    }}
                  />
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 
                      className="font-serif text-xs font-bold text-stone-900 truncate cursor-pointer hover:text-amber-800"
                      onClick={() => {
                        onClose();
                        onQuickView(product);
                      }}
                    >
                      {product.name}
                    </h4>
                    <p className="text-[10px] text-stone-500">{product.fabric} &bull; {product.categoryLabel}</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xs font-bold text-stone-900">{formatINR(product.price)}</span>
                      <span className="text-[10px] text-stone-400 line-through">{formatINR(product.originalPrice)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        addToCart(product, product.sizes[0] || 'Free Size');
                        toggleWishlist(product);
                      }}
                      className="p-2 bg-stone-900 hover:bg-amber-800 text-white rounded-xl text-xs flex items-center gap-1 shadow-sm"
                      title="Move to Bag"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="p-2 text-stone-400 hover:text-rose-600 hover:bg-stone-200 rounded-xl"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {wishlist.length > 0 && (
          <div className="pt-4 border-t border-stone-200 flex justify-between items-center">
            <button
              onClick={clearWishlist}
              className="text-xs text-stone-500 hover:text-rose-600"
            >
              Clear Wishlist
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
