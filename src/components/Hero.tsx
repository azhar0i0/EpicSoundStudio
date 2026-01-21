import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import headphoneImg from "@/assets/headphone.png";
import heroPersonImg from "@/assets/hero-person.png";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] bg-background overflow-hidden pt-24 sm:pt-28 lg:pt-36">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[65vh] sm:min-h-[70vh]">
          {/* Left Content */}
          <div className="relative z-20 animate-slide-right text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              Unveiling{" "}
              <span className="text-accent">Headphone</span>
              <br />
              Wonders
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
              Epic-Sound provides a meticulously curated collection of headphones
              that redefine the audio experience. Immerse yourself in rich sound.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                to="/explore"
                className="group flex items-center gap-2.5 bg-accent text-accent-foreground px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg font-medium text-sm sm:text-base hover:opacity-90 transition-opacity duration-200"
              >
                Explore More
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </Link>

              {/* Discount Badge */}
              <div className="bg-peach text-foreground px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm">
                30% OFF
              </div>
            </div>

            {/* Limited Demo Tag */}
            <div className="mt-10 sm:mt-14 hidden sm:block">
              <span className="inline-block border border-border text-muted-foreground px-5 py-2 rounded-md text-sm font-medium">
                Limited Demo
              </span>
            </div>
          </div>

          {/* Right Content - Headphone */}
          <div className="relative flex justify-center items-center mt-4 sm:mt-0">
            {/* Circular Background - Subtle */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-secondary/60" />

            {/* Main Headphone Image */}
            <img
              src={headphoneImg}
              alt="Premium wireless headphone"
              className="relative z-10 w-44 sm:w-56 md:w-72 lg:w-[340px] animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            />

            {/* Small Headphone Thumbnails */}
            <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-0 lg:right-12 flex gap-2 sm:gap-2.5 animate-slide-up delay-300">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-card border border-border rounded-lg p-1.5 sm:p-2 hover:border-accent/50 transition-colors cursor-pointer"
                >
                  <img
                    src={headphoneImg}
                    alt="Headphone variant"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Person */}
        <div className="absolute bottom-0 left-4 sm:left-12 z-30 hidden md:block animate-slide-up delay-200">
          <div className="relative">
            <div className="absolute -inset-6 bg-peach/40 rounded-full blur-2xl" />
            <img
              src={heroPersonImg}
              alt="Person with headphones"
              className="relative w-24 md:w-28 lg:w-40 xl:w-48 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
