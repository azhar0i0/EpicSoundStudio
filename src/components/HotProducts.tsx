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
    bgColor: "bg-yellow-200",
  },
  {
    id: 2,
    name: "Colored Headphones",
    price: 36.5,
    rating: 5,
    bgColor: "bg-pink-200",
  },
  {
    id: 3,
    name: "Modern Headphone",
    price: 24.0,
    rating: 5,
    bgColor: "bg-gray-200",
  },
  {
    id: 4,
    name: "Classic Headphone",
    price: 28.0,
    rating: 5,
    bgColor: "bg-blue-200",
  },
  {
    id: 5,
    name: "Pro Headphone",
    price: 45.0,
    rating: 5,
    bgColor: "bg-green-200",
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
    toast.success(`${product.name} added to cart!`, {
      duration: 2000,
    });
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-sand/30" id="products">
      <div className="container-custom">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            The Market Provides
            <br />
            Hot <span className="text-accent">Products</span>
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-accent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Products Grid - Matching Reference Design */}
        <div className="overflow-hidden">
          <div
            className="grid gap-8 lg:gap-12"
            style={{
              gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
            }}
          >
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group text-center transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-16 scale-95"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Product Image - Circular Background */}
                <div className="relative mb-6 flex justify-center perspective-1000">
                  <div
                    className={`relative w-48 h-48 lg:w-56 lg:h-56 ${product.bgColor} rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/20`}
                  >
                    {/* Animated ring on hover */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    <div className="absolute inset-2 rounded-full border-2 border-transparent group-hover:border-accent/20 transition-all duration-700 group-hover:scale-105 group-hover:-rotate-6" />
                    
                    <Link to={`/product/${product.id}`} className="relative z-10">
                      <img
                        src={headphoneImg}
                        alt={product.name}
                        className="w-36 lg:w-44 object-contain transition-all duration-700 ease-out drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] group-hover:scale-115 group-hover:rotate-12 group-hover:drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
                      />
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-accent transition-all duration-300 group-hover:scale-105">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex justify-center gap-0.5 mb-3 transition-transform duration-500 group-hover:scale-110">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`transition-all duration-300 ${
                        i < product.rating
                          ? "fill-accent text-accent"
                          : "text-muted"
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-center gap-4 transition-all duration-500 group-hover:gap-5">
                  <span className="text-xl font-bold transition-all duration-300 group-hover:text-accent group-hover:scale-110">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-110 hover:shadow-glow active:scale-95 group-hover:px-5"
                  >
                    Add To Cart
                    <ShoppingCart size={14} className="transition-transform duration-300 group-hover:rotate-12" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="flex justify-center mt-10">
          <Link
            to="/products"
            className="text-accent hover:underline font-medium"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
