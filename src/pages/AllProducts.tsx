import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  Heart,
  Filter,
  Grid,
  List,
  ChevronDown,
  Search,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import headphoneImg from "@/assets/headphone.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";

// Generate 50 demo products
const generateProducts = () => {
  const categories = [
    "Wireless",
    "Wired",
    "Premium",
    "Sport",
    "Professional",
    "Gaming",
    "Kids",
    "Travel",
  ];
  const colors = [
    "Olive Green",
    "Rose Gold",
    "Midnight Black",
    "Vintage Brown",
    "Electric Blue",
    "Platinum Silver",
    "Neon Green",
    "Candy Pink",
    "Charcoal Gray",
    "Arctic White",
  ];
  const badges = ["Best Seller", "New", "Popular", "Pro", "Safe", null];
  const adjectives = [
    "Premium",
    "Ultra",
    "Pro",
    "Elite",
    "Classic",
    "Modern",
    "Vintage",
    "Studio",
    "Sport",
    "Gaming",
  ];
  const nouns = [
    "Headphone",
    "Earbuds",
    "Headset",
    "Audio",
    "Sound",
    "Bass",
    "Beats",
    "Rhythm",
  ];

  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `${adjectives[i % adjectives.length]} ${nouns[i % nouns.length]} ${i + 1}`,
    price: Math.floor(Math.random() * 250) + 50,
    rating: Math.floor(Math.random() * 2) + 4,
    category: categories[i % categories.length],
    color: colors[i % colors.length],
    badge: badges[i % badges.length],
  }));
};

const allProducts = generateProducts();
const categories = [
  "All",
  "Wireless",
  "Wired",
  "Premium",
  "Sport",
  "Professional",
  "Gaming",
  "Kids",
  "Travel",
];
const sortOptions = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Rating",
  "Newest",
];
const ITEMS_PER_PAGE = 9;

const AllProducts = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [tempPriceRange, setTempPriceRange] = useState([0, 500]);
  const [tempCategory, setTempCategory] = useState("All");
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Sync temp filters with actual filters when drawer opens
  useEffect(() => {
    if (mobileFilterOpen) {
      setTempPriceRange(priceRange);
      setTempCategory(selectedCategory);
    }
  }, [mobileFilterOpen, priceRange, selectedCategory]);

  const applyMobileFilters = () => {
    setPriceRange(tempPriceRange);
    setSelectedCategory(tempCategory);
    setMobileFilterOpen(false);
  };

  const clearAllFilters = () => {
    setTempPriceRange([0, 500]);
    setTempCategory("All");
    setPriceRange([0, 500]);
    setSelectedCategory("All");
    setSearchQuery("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy, priceRange, searchQuery]);

  const filteredProducts = useMemo(() => {
    return allProducts
      .filter(
        (p) => selectedCategory === "All" || p.category === selectedCategory
      )
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
      .filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.color.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Price: High to Low") return b.price - a.price;
        if (sortBy === "Rating") return b.rating - a.rating;
        return 0;
      });
  }, [selectedCategory, sortBy, priceRange, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleToggleWishlist = (product: typeof allProducts[0]) => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: headphoneImg,
      category: product.category,
    });
  };

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: headphoneImg,
    });
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">All Products</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Our <span className="text-primary">Premium</span> Collection
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the perfect headphones for every moment. From studio
              sessions to gym workouts, we have you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block lg:w-72 space-y-6">
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
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
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
                <div className="px-2 mb-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    min={0}
                    step={10}
                    className="w-full"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                    placeholder="Min"
                  />
                  <span className="text-muted-foreground">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
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
                    <button
                      key={rating}
                      className="w-full flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        & up
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-card rounded-2xl p-3 sm:p-4 border border-border">
              <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                {/* Mobile Filter Drawer */}
                <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="lg:hidden shrink-0"
                    >
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      Filters
                      {(selectedCategory !== "All" || priceRange[0] > 0 || priceRange[1] < 500) && (
                        <span className="ml-1.5 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
                          {(selectedCategory !== "All" ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0)}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[320px] p-0 flex flex-col">
                    <SheetHeader className="p-5 border-b border-border">
                      <SheetTitle className="flex items-center gap-2 text-left">
                        <SlidersHorizontal className="w-5 h-5" />
                        Filters
                      </SheetTitle>
                    </SheetHeader>
                    
                    <div className="flex-1 overflow-y-auto p-5 space-y-6">
                      {/* Categories */}
                      <div>
                        <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wide">Category</h4>
                        <div className="space-y-1">
                          {categories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setTempCategory(cat)}
                              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                                tempCategory === cat
                                  ? "bg-primary text-primary-foreground font-medium"
                                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price Range */}
                      <div>
                        <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wide">Price Range</h4>
                        <div className="px-2 mb-4">
                          <Slider
                            value={tempPriceRange}
                            onValueChange={setTempPriceRange}
                            max={500}
                            min={0}
                            step={10}
                            className="w-full"
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <label className="text-xs text-muted-foreground mb-1 block">Min</label>
                            <input
                              type="number"
                              value={tempPriceRange[0]}
                              onChange={(e) =>
                                setTempPriceRange([Number(e.target.value), tempPriceRange[1]])
                              }
                              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                            />
                          </div>
                          <span className="text-muted-foreground mt-5">—</span>
                          <div className="flex-1">
                            <label className="text-xs text-muted-foreground mb-1 block">Max</label>
                            <input
                              type="number"
                              value={tempPriceRange[1]}
                              onChange={(e) =>
                                setTempPriceRange([tempPriceRange[0], Number(e.target.value)])
                              }
                              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Sort Options in Mobile */}
                      <div>
                        <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wide">Sort By</h4>
                        <div className="space-y-1">
                          {sortOptions.map((option) => (
                            <button
                              key={option}
                              onClick={() => setSortBy(option)}
                              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                                sortBy === option
                                  ? "bg-primary text-primary-foreground font-medium"
                                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <SheetFooter className="p-5 border-t border-border gap-2 flex-row">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </Button>
                      <Button
                        className="flex-1"
                        onClick={applyMobileFilters}
                      >
                        Apply Filters
                      </Button>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>

                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-9 pr-9 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <span className="text-muted-foreground text-sm hidden sm:block shrink-0">
                  <span className="text-foreground font-medium">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                {/* Sort Dropdown - Desktop only */}
                <div className="relative hidden lg:block">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-background border border-border rounded-xl px-4 py-2 pr-10 text-sm cursor-pointer hover:border-primary transition-colors"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>

                {/* View Toggle */}
                <div className="flex items-center border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                  >
                    <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                  >
                    <List className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No products found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setPriceRange([0, 500]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {paginatedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`group bg-card rounded-3xl border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Product Image */}
                    <div
                      className={`relative bg-gradient-to-br from-primary/5 to-secondary/20 overflow-hidden ${
                        viewMode === "list" ? "w-48 shrink-0" : "p-8"
                      }`}
                    >
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={headphoneImg}
                          alt={product.name}
                          className={`drop-shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                            viewMode === "list"
                              ? "w-full h-full object-contain p-4"
                              : "w-full max-w-[180px] mx-auto"
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
                          onClick={() => handleToggleWishlist(product)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            isInWishlist(product.id)
                              ? "bg-red-500 text-white"
                              : "bg-card/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                          }`}
                        >
                          <Heart
                            className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-current" : ""}`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div
                      className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}
                    >
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          ({product.rating}.0)
                        </span>
                      </div>

                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.category} • {product.color}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-foreground">
                            ${product.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            ${Math.round(product.price * 1.3)}
                          </span>
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
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {getPageNumbers().map((page, index) =>
                  page === "..." ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-2 text-muted-foreground"
                    >
                      ...
                    </span>
                  ) : (
                    <Button
                      key={page}
                      variant={page === currentPage ? "default" : "outline"}
                      size="icon"
                      className="rounded-full"
                      onClick={() => goToPage(page as number)}
                    >
                      {page}
                    </Button>
                  )
                )}
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProducts;
