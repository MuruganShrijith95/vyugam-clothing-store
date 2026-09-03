import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Package, 
  User,
  SlidersHorizontal,
  PhoneCall
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Gender } from '../types';
import { formatINR } from '../utils/pincodeChecker';

interface NavbarProps {
  selectedGender: Gender;
  onSelectGender: (gender: Gender) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenWishlist: () => void;
  onOpenOrders: () => void;
  onToggleMobileFilters: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedGender,
  onSelectGender,
  searchQuery,
  onSearchChange,
  onOpenWishlist,
  onOpenOrders,
  onToggleMobileFilters
}) => {
  const { totalItemCount, subtotal, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4 min-w-0">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden gap-1 shrink-0">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-stone-700 hover:text-stone-950 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={onToggleMobileFilters}
              className="p-2 text-stone-700 hover:text-amber-900 rounded-lg flex items-center gap-1 text-xs font-semibold bg-stone-100 px-2 sm:px-2.5 py-1.5 shrink-0"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center gap-3 lg:gap-6 min-w-0">
            <a href="#" className="flex items-center gap-2 sm:gap-3 group min-w-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-amber-500/50 shadow-md bg-stone-900 shrink-0 p-0.5 group-hover:border-amber-400 transition">
                <img
                  src="/logo.jpg"
                  alt="VYUGAM Logo"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition"
                />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <span className="font-serif text-lg sm:text-2xl font-extrabold tracking-wider text-stone-900 group-hover:text-amber-900 transition truncate">
                  VYUGAM
                </span>
                <span className="hidden sm:block text-[9px] tracking-[0.22em] font-bold text-amber-800 uppercase -mt-0.5 truncate">
                  Luxury Indian Couture
                </span>
              </div>
            </a>

            {/* Gender Switcher Tabs (Desktop) */}
            <nav className="hidden lg:flex items-center bg-stone-100/80 p-1 rounded-full border border-stone-200">
              <button
                onClick={() => onSelectGender('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition ${
                  selectedGender === 'all'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => onSelectGender('women')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition flex items-center gap-1.5 ${
                  selectedGender === 'women'
                    ? 'bg-rose-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Women</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-rose-800 text-rose-100 rounded-full font-normal">Sarees & Kurtas</span>
              </button>
              <button
                onClick={() => onSelectGender('men')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition flex items-center gap-1.5 ${
                  selectedGender === 'men'
                    ? 'bg-amber-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Men</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-amber-800 text-amber-100 rounded-full font-normal">Ethnic & Linen</span>
              </button>
            </nav>
          </div>

          {/* Search bar (Desktop) */}
          <div className="hidden lg:flex flex-1 min-w-0 max-w-md mx-4 relative">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search kurtas, Banarasi sarees, linen shirts, lehengas..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300/80 rounded-full pl-10 pr-10 py-2 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800 transition"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-0.5 sm:gap-3 shrink-0">
            
            {/* Mobile search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-950 rounded-full hover:bg-stone-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Orders Tracking */}
            <button
              onClick={onOpenOrders}
              className="hidden sm:flex p-2 text-stone-700 hover:text-stone-950 rounded-full hover:bg-stone-100 transition relative items-center gap-1 text-xs font-medium"
              title="Your Orders"
            >
              <Package className="w-5 h-5" />
              <span className="hidden xl:inline">Orders</span>
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={onOpenWishlist}
              className="hidden sm:block p-2 text-stone-700 hover:text-stone-950 rounded-full hover:bg-stone-100 transition relative"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-3.5 py-2 rounded-full transition shadow-sm group"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                {totalItemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-amber-500 text-stone-950 text-[10px] font-extrabold rounded-full flex items-center justify-center">
                    {totalItemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold tracking-wide">
                {totalItemCount === 0 ? 'Bag' : formatINR(subtotal)}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        {searchOpen && (
          <div className="lg:hidden pb-4 pt-1">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search kurtas, sarees, lehengas, linen..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                autoFocus
                className="w-full bg-stone-50 border border-stone-300 rounded-full pl-10 pr-10 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu Drawer/Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 py-4 space-y-3 animate-fade-in">
            <div className="grid grid-cols-3 gap-2 pb-2">
              <button
                onClick={() => { onSelectGender('all'); setMobileMenuOpen(false); }}
                className={`py-2 rounded-lg text-xs font-bold ${selectedGender === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-800'}`}
              >
                All Fashion
              </button>
              <button
                onClick={() => { onSelectGender('women'); setMobileMenuOpen(false); }}
                className={`py-2 rounded-lg text-xs font-bold ${selectedGender === 'women' ? 'bg-rose-900 text-white' : 'bg-stone-100 text-stone-800'}`}
              >
                Women's
              </button>
              <button
                onClick={() => { onSelectGender('men'); setMobileMenuOpen(false); }}
                className={`py-2 rounded-lg text-xs font-bold ${selectedGender === 'men' ? 'bg-amber-900 text-white' : 'bg-stone-100 text-stone-800'}`}
              >
                Men's
              </button>
            </div>

            <div className="border-t border-stone-100 pt-3 flex flex-col gap-2 text-sm text-stone-700 font-medium">
              <a href="#festive-section" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-amber-800 hover:bg-amber-50 p-2 rounded-lg">
                <Sparkles className="w-4 h-4" />
                <span>Festive & Wedding Edit 2026</span>
              </a>
              <button onClick={() => { onOpenOrders(); setMobileMenuOpen(false); }} className="flex items-center gap-2 hover:bg-stone-100 p-2 rounded-lg text-left">
                <Package className="w-4 h-4" />
                <span>Track My Orders</span>
              </button>
              <button onClick={() => { onOpenWishlist(); setMobileMenuOpen(false); }} className="flex items-center gap-2 hover:bg-stone-100 p-2 rounded-lg text-left">
                <Heart className="w-4 h-4 text-rose-600" />
                <span>My Wishlist ({wishlist.length})</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
