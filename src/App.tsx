import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { PRODUCTS_DATA } from './data/products';
import { Product, FilterState, Gender, Order } from './types';

// Components
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { CategoryHighlights } from './components/CategoryHighlights';
import { FestiveDealsBanner } from './components/FestiveDealsBanner';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { OrdersListModal } from './components/OrdersListModal';
import { WishlistModal } from './components/WishlistModal';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { WhatsAppSupportButton } from './components/WhatsAppSupportButton';
import { Footer } from './components/Footer';

const INITIAL_FILTERS: FilterState = {
  gender: 'all',
  category: 'all',
  occasion: 'all',
  fabric: 'all',
  priceRange: [0, 20000],
  sizes: [],
  colors: [],
  sortBy: 'featured',
  searchQuery: ''
};

export const AppContent: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  
  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Filter handlers
  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  const handleSelectGender = (gender: Gender) => {
    setFilters(prev => ({ ...prev, gender, category: 'all' }));
  };

  const handleSelectCategory = (catId: string) => {
    setFilters(prev => ({ ...prev, category: catId }));
    // Scroll down to products grid
    const target = document.getElementById('products-grid-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreFestive = () => {
    setFilters(prev => ({ ...prev, occasion: 'Wedding' }));
    const target = document.getElementById('products-grid-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(p => {
      // Gender filter
      if (filters.gender !== 'all' && p.gender !== filters.gender) {
        return false;
      }
      // Category filter
      if (filters.category !== 'all' && p.category !== filters.category) {
        return false;
      }
      // Occasion filter
      if (filters.occasion !== 'all' && p.occasion !== filters.occasion) {
        return false;
      }
      // Fabric filter
      if (filters.fabric !== 'all' && p.fabric !== filters.fabric) {
        return false;
      }
      // Price range
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) {
        return false;
      }
      // Search query (matches name, subtitle, fabric, categoryLabel)
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesSub = p.subtitle.toLowerCase().includes(q);
        const matchesFabric = p.fabric.toLowerCase().includes(q);
        const matchesCat = p.categoryLabel.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        if (!matchesName && !matchesSub && !matchesFabric && !matchesCat && !matchesDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'discount') return b.discountPercentage - a.discountPercentage;
      if (filters.sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [filters]);

  const handleOrderPlaced = (order: Order) => {
    setIsCheckoutOpen(false);
    setActiveOrder(order);
    setIsOrderSuccessOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navbar */}
      <Navbar
        selectedGender={filters.gender}
        onSelectGender={handleSelectGender}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => handleFilterChange({ searchQuery: q })}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenOrders={() => setIsOrdersOpen(true)}
        onToggleMobileFilters={() => setIsMobileFiltersOpen(true)}
      />

      {/* Hero Banner with Gender Switch */}
      <HeroBanner
        onSelectGender={handleSelectGender}
        onExploreFestive={handleExploreFestive}
      />

      {/* Category Visual Highlight Carousel */}
      <CategoryHighlights
        selectedCategory={filters.category}
        onSelectCategory={handleSelectCategory}
        selectedGender={filters.gender}
      />

      {/* Festive Offers & Coupons Banner */}
      <FestiveDealsBanner />

      {/* Main Product Catalog Section */}
      <main id="products-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            isOpenMobile={isMobileFiltersOpen}
            onCloseMobile={() => setIsMobileFiltersOpen(false)}
          />

          {/* Product Cards Grid */}
          <ProductGrid
            products={filteredProducts}
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            onQuickView={(p) => setQuickViewProduct(p)}
          />

        </div>
      </main>

      {/* Customer Love & Trust Badges */}
      <CustomerTestimonials />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Stylist Floating Widget */}
      <WhatsAppSupportButton />

      {/* Modals & Drawers */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        defaultGender={filters.gender === 'men' ? 'men' : 'women'}
      />

      <CartDrawer
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderPlaced={handleOrderPlaced}
      />

      <OrderSuccessModal
        order={activeOrder}
        onClose={() => setIsOrderSuccessOpen(false)}
      />

      <OrdersListModal
        isOpen={isOrdersOpen}
        onClose={() => setIsOrdersOpen(false)}
        onViewOrder={(o) => {
          setIsOrdersOpen(false);
          setActiveOrder(o);
          setIsOrderSuccessOpen(true);
        }}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <AppContent />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
