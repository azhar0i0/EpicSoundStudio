import { Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Unique Headphone",
    price: 20.5,
    rating: 5,
    bgColor: "bg-amber-100",
  },
  {
    id: 2,
    name: "Colored Headphones",
    price: 36.5,
    rating: 5,
    bgColor: "bg-rose-100",
  },
  {
    id: 3,
    name: "Modern Headphone",
    price: 24.0,
    rating: 5,
    bgColor: "bg-slate-100",
  },
  {
    id: 4,
    name: "Classic Headphone",
    price: 28.0,
    rating: 5,
    bgColor: "bg-sky-100",
  },
  {
    id: 5,
    name: "Pro Headphone",
    price: 45.0,
    rating: 5,
    bgColor: "bg-emerald-100",
  },
];

const HotProducts = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: headphoneImg,
    });
    toast.success(`${product.name} added to cart`);
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-muted/30" id="products">
      <div className="container-custom">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-10 sm:mb-14 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight">
              The Market Provides
              <br />
              Hot <span className="text-accent">Products</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-border text-muted-foreground flex items-center justify-center hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-muted-foreground"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-accent text-accent-foreground flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="overflow-hidden">
          <div
            className="grid gap-6 sm:gap-8 lg:gap-10"
            style={{
              gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
            }}
          >
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group text-center transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Product Image - Circular Background */}
                <div className="relative mb-4 sm:mb-6 flex justify-center">
                  <div
                    className={`relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 ${product.bgColor} rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg`}
                  >
                    <Link to={`/product/${product.id}`} className="relative z-10">
                      <img
                        src={headphoneImg}
                        alt={product.name}
                        className="w-24 sm:w-32 lg:w-40 object-contain transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] group-hover:scale-105"
                      />
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-sm sm:text-base mb-2 hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex justify-center gap-0.5 mb-2 sm:mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={11}
                      className={
                        i < product.rating
                          ? "fill-accent text-accent"
                          : "text-muted"
                      }
                    />
                  ))}
                </div>

                {/* Price and Add to Cart */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                  <span className="text-base sm:text-lg font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 bg-accent text-accent-foreground px-3 sm:px-4 py-2 rounded-md text-xs font-medium transition-opacity hover:opacity-90"
                  >
                    Add To Cart
                    <ShoppingCart size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <Link
            to="/products"
            className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
