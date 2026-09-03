import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { formatINR } from '../utils/pincodeChecker';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const isWishlisted = isInWishlist(product.id);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Free Size');

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize);
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative aspect-[3/4] overflow-hidden bg-stone-100 cursor-pointer"
      >
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.isFestiveSpecial && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-rose-900/90 text-rose-100 backdrop-blur-sm shadow flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-amber-300" /> Festive
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-stone-950 shadow">
              Bestseller
            </span>
          )}
          {product.isNewArrival && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-stone-900 text-stone-100 shadow">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full shadow-md backdrop-blur-md transition transform active:scale-90 ${
            isWishlisted 
              ? 'bg-rose-50 text-rose-600' 
              : 'bg-white/80 text-stone-700 hover:bg-white hover:text-rose-600'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
        </button>

        {/* Quick View Overlay Button */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hidden sm:flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2 px-3 bg-white/95 hover:bg-white text-stone-900 rounded-xl text-xs font-bold tracking-wide shadow-lg flex items-center justify-center gap-1.5 backdrop-blur-sm transition"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details info */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          {/* Category & Fabric badge */}
          <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
            <span className="uppercase tracking-wider font-semibold text-amber-800">
              {product.categoryLabel}
            </span>
            <span className="bg-stone-100 px-2 py-0.5 rounded text-[10px] font-medium text-stone-600">
              {product.fabric}
            </span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif text-sm font-bold text-stone-900 group-hover:text-amber-800 transition line-clamp-1 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-1 mt-0.5 font-light">
            {product.subtitle}
          </p>
        </div>

        {/* Sizes Pill Selector */}
        <div className="flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none">
          <span className="text-[10px] text-stone-400 font-medium mr-1">Sizes:</span>
          {product.sizes.slice(0, 4).map((size) => (
            <button
              key={size}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSize(size);
              }}
              className={`text-[10px] px-1.5 py-0.5 rounded border transition ${
                selectedSize === size
                  ? 'border-stone-900 bg-stone-900 text-white font-bold'
                  : 'border-stone-200 text-stone-600 hover:border-stone-400'
              }`}
            >
              {size.split(' ')[0]}
            </button>
          ))}
          {product.sizes.length > 4 && (
            <span className="text-[10px] text-stone-400">+{product.sizes.length - 4}</span>
          )}
        </div>

        {/* Price & Rating Bar */}
        <div className="pt-2 border-t border-stone-100 flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-stone-900">
                {formatINR(product.price)}
              </span>
              <span className="text-xs text-stone-400 line-through">
                {formatINR(product.originalPrice)}
              </span>
            </div>
            <span className="text-[11px] font-bold text-emerald-700">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
            <Star className="w-3 h-3 text-amber-600 fill-amber-500" />
            <span className="text-xs font-bold text-stone-800">{product.rating}</span>
            <span className="text-[10px] text-stone-400">({product.reviewCount})</span>
          </div>
        </div>

        {/* Add to Bag Button */}
        <button
          onClick={handleQuickAdd}
          className="w-full mt-1 py-2 bg-stone-900 hover:bg-amber-800 text-white rounded-xl text-xs font-bold tracking-wider transition flex items-center justify-center gap-2 shadow-sm"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
};
