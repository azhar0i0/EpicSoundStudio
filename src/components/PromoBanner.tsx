import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PromoBanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="container-custom">
        <div
          className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-primary" />

          <div className="relative z-10 grid md:grid-cols-2 gap-6 sm:gap-10 p-6 sm:p-8 lg:p-14 items-center">
            {/* Headphone */}
            <div className="relative flex justify-center order-1 md:order-none">
              <img
                src={headphoneImg}
                alt="Premium headphone"
                className="w-32 sm:w-40 lg:w-60 object-contain animate-float-slow drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] brightness-105"
              />
            </div>

            {/* Content */}
            <div className="text-primary-foreground text-center md:text-left">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] mb-4 sm:mb-5 tracking-tight">
                Musical Sound,
                <br />
                Stylish Quality
              </h2>
              <p className="text-primary-foreground/75 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0 leading-relaxed text-xs sm:text-sm">
                Discover our latest collection of premium headphones designed for
                those who appreciate exceptional audio quality and timeless design.
              </p>
              <Link
                to="/explore"
                className="group inline-flex items-center gap-2 sm:gap-2.5 bg-accent text-accent-foreground px-5 sm:px-7 py-3 sm:py-3.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Explore More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
