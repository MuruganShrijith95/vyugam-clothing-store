import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Heart, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  Ruler, 
  MapPin, 
  Sparkles, 
  Check, 
  HelpCircle,
  Share2
} from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { checkDeliveryPincode, formatINR, PincodeResult } from '../utils/pincodeChecker';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenSizeGuide
}) => {
  if (!product) return null;

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Free Size');
  const [quantity, setQuantity] = useState(1);
  const [pincodeInput, setPincodeInput] = useState('');
  const [pincodeResult, setPincodeResult] = useState<PincodeResult | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincodeInput.length === 6) {
      const result = checkDeliveryPincode(pincodeInput);
      setPincodeResult(result);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, product.color, quantity);
    onClose();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl relative border border-stone-200 overflow-hidden animate-scale-in max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close */}
        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md px-6 py-3 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
            <span>{product.gender === 'women' ? "Women's Collection" : "Men's Collection"}</span>
            <span>&bull;</span>
            <span className="text-amber-800">{product.categoryLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
              title="Share product"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 space-y-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.isFestiveSpecial && (
                <div className="absolute top-3 left-3 bg-rose-900/90 backdrop-blur-sm text-rose-100 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Festive Special
                </div>
              )}
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition ${
                      activeImageIndex === idx ? 'border-amber-700 shadow-md ring-2 ring-amber-300' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Craftsmanship story */}
            {product.craftsmanship && (
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 text-xs text-stone-700 space-y-1">
                <span className="font-bold text-amber-950 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Master Artisan Craftsmanship
                </span>
                <p className="text-stone-600">{product.craftsmanship}</p>
              </div>
            )}
          </div>

          {/* Right Column: Product details & actions */}
          <div className="md:col-span-6 space-y-5">
            
            {/* Title & Ratings */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-stone-500 mt-1">{product.subtitle}</p>

              <div className="flex items-center gap-3 mt-2.5">
                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200">
                  <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  <span className="text-xs font-bold text-stone-900">{product.rating}</span>
                </div>
                <span className="text-xs text-stone-500">
                  {product.reviewCount} Verified Indian Customer Ratings
                </span>
              </div>
            </div>

            {/* Price section */}
            <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200/80 flex items-baseline justify-between">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl font-extrabold text-stone-900">
                    {formatINR(product.price)}
                  </span>
                  <span className="text-sm text-stone-400 line-through">
                    {formatINR(product.originalPrice)}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {product.discountPercentage}% OFF
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Inclusive of all Indian GST Taxes &bull; Free delivery on ₹1,499+
                </p>
              </div>
            </div>

            {/* Color & Fabric Tags */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-white border border-stone-200 rounded-xl">
                <span className="text-stone-400 block font-medium text-[11px]">Color Shade</span>
                <span className="font-bold text-stone-800 flex items-center gap-1.5 mt-0.5">
                  <span className="w-3 h-3 rounded-full border border-stone-300" style={{ backgroundColor: product.colorHex }}></span>
                  {product.color}
                </span>
              </div>
              <div className="p-2.5 bg-white border border-stone-200 rounded-xl">
                <span className="text-stone-400 block font-medium text-[11px]">Fabric Weave</span>
                <span className="font-bold text-stone-800 mt-0.5 block">{product.fabric}</span>
              </div>
            </div>

            {/* Size Selector & Guide Trigger */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                  Select Size
                </span>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="text-xs text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1 transition"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Indian Size Guide</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                      selectedSize === size
                        ? 'bg-stone-900 text-white shadow-md ring-2 ring-amber-500'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-stone-700 hover:bg-stone-200 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-stone-700 hover:bg-stone-200 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-6 bg-stone-900 hover:bg-amber-800 text-white rounded-xl text-xs font-bold tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-stone-900/10"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Shopping Bag</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3 rounded-xl border transition ${
                    isWishlisted 
                      ? 'bg-rose-50 border-rose-200 text-rose-600' 
                      : 'border-stone-300 text-stone-700 hover:bg-stone-50'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                </button>
              </div>
            </div>

            {/* Indian Pincode Delivery Checker */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Check Delivery Date & COD by PIN Code</span>
              </div>

              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN (e.g. 110001, 560001)"
                  value={pincodeInput}
                  onChange={(e) => setPincodeInput(e.target.value.replace(/\D/g, ''))}
                  className="flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
                <button
                  type="submit"
                  disabled={pincodeInput.length !== 6}
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-950 disabled:bg-stone-300 text-white rounded-xl text-xs font-bold transition"
                >
                  Check
                </button>
              </form>

              {pincodeResult && pincodeResult.valid && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 text-xs text-emerald-950 space-y-1 animate-fade-in">
                  <div className="flex items-center justify-between font-bold">
                    <span>Delivers to {pincodeResult.city}, {pincodeResult.state}</span>
                    <span className="text-emerald-700 font-extrabold">{pincodeResult.deliveryDateStr}</span>
                  </div>
                  <p className="text-[11px] text-emerald-800">
                    &bull; Free Express Shipping via {pincodeResult.courierPartner}
                  </p>
                  <p className="text-[11px] text-emerald-800">
                    &bull; Cash on Delivery (COD) is Eligible at this address
                  </p>
                </div>
              )}

              {pincodeResult && !pincodeResult.valid && (
                <p className="text-xs text-rose-600">{pincodeResult.error}</p>
              )}
            </div>

            {/* Description & Care instructions */}
            <div className="space-y-2 text-xs text-stone-600">
              <h4 className="font-bold text-stone-800">Product Description</h4>
              <p className="leading-relaxed">{product.description}</p>
              
              {product.careInstructions.length > 0 && (
                <div className="pt-2">
                  <h4 className="font-bold text-stone-800 mb-1">Wash & Fabric Care</h4>
                  <ul className="list-disc pl-4 space-y-0.5 text-stone-500">
                    {product.careInstructions.map((care, i) => (
                      <li key={i}>{care}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Customer Reviews Snippet */}
            {product.reviews.length > 0 && (
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <h4 className="font-serif text-sm font-bold text-stone-900">
                  Customer Reviews ({product.reviews.length})
                </h4>
                <div className="space-y-2.5">
                  {product.reviews.map((rev) => (
                    <div key={rev.id} className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-900">{rev.userName} ({rev.userCity})</span>
                        <div className="flex items-center text-amber-500">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-500" />
                          ))}
                        </div>
                      </div>
                      <p className="font-semibold text-stone-800">{rev.title}</p>
                      <p className="text-stone-600 text-[11px]">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
