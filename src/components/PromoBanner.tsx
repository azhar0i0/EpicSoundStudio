import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PromoBanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 overflow-hidden"
    >
      <div className="container-custom">
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-olive-light to-primary animate-gradient" />

          {/* Wave Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg
              viewBox="0 0 1200 400"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 C300,200 600,0 900,100 C1050,150 1150,100 1200,100 L1200,400 L0,400 Z"
                fill="currentColor"
                className="text-background/10"
              />
            </svg>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 lg:p-16 items-center">
            {/* Floating Headphone */}
            <div className="relative flex justify-center order-1 lg:order-none">
              <img
                src={headphoneImg}
                alt="Premium headphone"
                className="w-48 lg:w-72 object-contain animate-float-slow drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)] brightness-110"
              />
            </div>

            {/* Content */}
            <div className="text-primary-foreground">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Musical Sound,
                <br />
                Stylish Quality
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
              <Link
                to="/explore"
                className="group flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-all duration-300"
              >
                Explore More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
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
