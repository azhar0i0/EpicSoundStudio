import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Filter, Grid, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headphoneImg from "@/assets/headphone.png";

const allProducts = [
  { id: 1, name: "Unique Headphone", price: 199, rating: 5, category: "Wireless", color: "Olive Green", badge: "Best Seller" },
  { id: 2, name: "Colored Headphones", price: 149, rating: 4, category: "Wireless", color: "Rose Gold", badge: null },
  { id: 3, name: "Modern Headphone", price: 249, rating: 5, category: "Premium", color: "Midnight Black", badge: "New" },
  { id: 4, name: "Classic Headphone", price: 129, rating: 4, category: "Wired", color: "Vintage Brown", badge: null },
  { id: 5, name: "Sport Headphone", price: 179, rating: 5, category: "Sport", color: "Electric Blue", badge: "Popular" },
  { id: 6, name: "Studio Headphone", price: 299, rating: 5, category: "Professional", color: "Platinum Silver", badge: "Pro" },
  { id: 7, name: "Gaming Headphone", price: 189, rating: 4, category: "Gaming", color: "Neon Green", badge: null },
  { id: 8, name: "Kids Headphone", price: 79, rating: 4, category: "Kids", color: "Candy Pink", badge: "Safe" },
  { id: 9, name: "Travel Headphone", price: 159, rating: 5, category: "Travel", color: "Charcoal Gray", badge: null },
];

const categories = ["All", "Wireless", "Wired", "Premium", "Sport", "Professional", "Gaming", "Kids", "Travel"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Rating", "Newest"];

const AllProducts = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = allProducts
    .filter(p => selectedCategory === "All" || p.category === selectedCategory)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      if (sortBy === "Rating") return b.rating - a.rating;
      return 0;
    });

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: headphoneImg
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">All Products</span>
          </nav>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Our <span className="text-primary">Premium</span> Collection
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the perfect headphones for every moment. From studio sessions to gym workouts, we have you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-72 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-xl transition-all ${
                        selectedCategory === cat 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                    placeholder="Min"
                  />
                  <span className="text-muted-foreground">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                    placeholder="Max"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="font-medium mb-3">Rating</h4>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <button key={rating} className="w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-muted transition-colors">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">& up</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-card rounded-2xl p-4 border border-border">
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <span className="text-muted-foreground text-sm">
                  Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-background border border-border rounded-xl px-4 py-2 pr-10 text-sm cursor-pointer hover:border-primary transition-colors"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>

                {/* View Toggle */}
                <div className="flex items-center border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-colors ${viewMode === "grid" ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-colors ${viewMode === "list" ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={viewMode === "grid" 
              ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className={`group bg-card rounded-3xl border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Product Image */}
                  <div className={`relative bg-gradient-to-br from-primary/5 to-secondary/20 overflow-hidden ${
                    viewMode === "list" ? "w-48 shrink-0" : "p-8"
                  }`}>
                    <Link to={`/product/${product.id}`}>
                      <img 
                        src={headphoneImg} 
                        alt={product.name}
                        className={`drop-shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                          viewMode === "list" ? "w-full h-full object-contain p-4" : "w-full max-w-[180px] mx-auto"
                        }`}
                      />
                    </Link>
                    
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </span>
                    )}
                    
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => toggleWishlist(product.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          wishlist.includes(product.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-card/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({product.rating}.0)</span>
                    </div>
                    
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-3">{product.category} • {product.color}</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-foreground">${product.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">${Math.round(product.price * 1.3)}</span>
                      </div>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        size="sm" 
                        className="rounded-full gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden sm:inline">Add</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button variant="outline" className="rounded-full">Previous</Button>
              {[1, 2, 3].map((page) => (
                <Button 
                  key={page}
                  variant={page === 1 ? "default" : "outline"} 
                  size="icon" 
                  className="rounded-full"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" className="rounded-full">Next</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProducts;
