import { Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

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
];

const HotProducts = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-sand/30"
      id="products"
    >
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
              className="w-10 h-10 rounded-full bg-background shadow-soft flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-accent text-accent-foreground shadow-soft flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
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
                <button className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-glow transition-all">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
