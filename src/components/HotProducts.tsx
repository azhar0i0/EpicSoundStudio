import { Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Unique Headphone",
    price: 20.5,
    rating: 4,
    color: "peach",
  },
  {
    id: 2,
    name: "Colored Headphones",
    price: 36.5,
    rating: 5,
    color: "accent",
  },
  {
    id: 3,
    name: "Modern Headphone",
    price: 24.0,
    rating: 4,
    color: "sand",
  },
  {
    id: 4,
    name: "Classic Headphone",
    price: 28.0,
    rating: 5,
    color: "peach",
  },
  {
    id: 5,
    name: "Pro Headphone",
    price: 45.0,
    rating: 5,
    color: "accent",
  },
];

const HotProducts = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleAddToCart = (product: typeof products[0]) => {
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
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-background shadow-soft flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-background disabled:hover:text-foreground"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-full bg-accent text-accent-foreground shadow-soft flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="grid gap-6 lg:gap-8 transition-all duration-500"
            style={{
              gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
            }}
          >
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-card rounded-3xl p-6 shadow-soft hover-lift transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Product Image */}
                <div
                  className={`relative h-48 lg:h-56 mb-6 rounded-2xl flex items-center justify-center ${
                    product.color === "peach"
                      ? "bg-secondary"
                      : product.color === "accent"
                      ? "bg-secondary/80"
                      : "bg-muted"
                  }`}
                >
                  <img
                    src={headphoneImg}
                    alt={product.name}
                    className="w-40 lg:w-48 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
                  />
                </div>

                {/* Product Info */}
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < product.rating
                          ? "fill-accent text-accent"
                          : "text-muted"
                      }
                    />
                  ))}
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-glow transition-all"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "w-8 bg-accent"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
