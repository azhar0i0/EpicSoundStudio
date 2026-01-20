import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import headphoneImg from "@/assets/headphone.png";
import heroPersonImg from "@/assets/hero-person.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-background overflow-hidden pt-28 lg:pt-36">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="relative z-20 animate-slide-right">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold leading-[1.1] mb-6 tracking-tight">
              Unveiling{" "}
              <span className="text-accent">Headphone</span>
              <br />
              Wonders
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md mb-10 leading-relaxed">
              Epic-Sound provides a meticulously curated collection of headphones
              that redefine the audio experience. Immerse yourself in rich sound.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/explore"
                className="group flex items-center gap-2.5 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
              >
                Explore More
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </Link>

              {/* Discount Badge */}
              <div className="bg-peach text-foreground px-5 py-2.5 rounded-lg font-semibold text-sm">
                30% OFF
              </div>
            </div>

            {/* Limited Demo Tag */}
            <div className="mt-14 hidden sm:block">
              <span className="inline-block border border-border text-muted-foreground px-5 py-2 rounded-md text-sm font-medium">
                Limited Demo
              </span>
            </div>
          </div>

          {/* Right Content - Headphone */}
          <div className="relative flex justify-center items-center">
            {/* Circular Background - Subtle */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-secondary/60" />

            {/* Main Headphone Image */}
            <img
              src={headphoneImg}
              alt="Premium wireless headphone"
              className="relative z-10 w-56 sm:w-72 lg:w-[340px] animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            />

            {/* Small Headphone Thumbnails */}
            <div className="absolute bottom-8 right-0 lg:right-12 flex gap-2.5 animate-slide-up delay-300">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-card border border-border rounded-lg p-2 hover:border-accent/50 transition-colors cursor-pointer"
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
        <div className="absolute bottom-0 left-0 sm:left-12 z-30 hidden sm:block animate-slide-up delay-200">
          <div className="relative">
            <div className="absolute -inset-6 bg-peach/40 rounded-full blur-2xl" />
            <img
              src={heroPersonImg}
              alt="Person with headphones"
              className="relative w-28 lg:w-40 xl:w-48 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
