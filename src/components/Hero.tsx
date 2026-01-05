import { ArrowRight } from "lucide-react";
import headphoneImg from "@/assets/headphone.png";
import heroPersonImg from "@/assets/hero-person.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-background to-sand overflow-hidden pt-24 lg:pt-32">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="relative z-20 animate-slide-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Unveiling{" "}
              <span className="text-accent">Headphone</span>
              <br />
              Wonders
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md mb-8 leading-relaxed">
              Epic-Sound provides a meticulously curated collection of headphones
              that redefine the audio experience. Immerse yourself in rich sound.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="group flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-all duration-300">
                Explore More
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Discount Badge */}
              <div className="relative animate-pulse-glow rounded-full">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm">
                  30% OFF
                </div>
              </div>
            </div>

            {/* Limited Demo Tag */}
            <div className="mt-12 hidden sm:block">
              <span className="inline-block bg-peach text-foreground px-6 py-2 rounded-full text-sm font-medium">
                Limited Demo
              </span>
            </div>
          </div>

          {/* Right Content - Headphone */}
          <div className="relative flex justify-center items-center">
            {/* Circular Glow Background - lighter for black headphone */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-cream via-secondary to-sand opacity-90" />
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-secondary/80" />

            {/* Main Headphone Image */}
            <img
              src={headphoneImg}
              alt="Premium wireless headphone"
              className="relative z-10 w-64 sm:w-80 lg:w-[400px] animate-float drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)]"
            />

            {/* Small Headphone Thumbnails */}
            <div className="absolute bottom-4 right-0 lg:right-8 flex gap-2 animate-slide-up delay-500">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary rounded-xl p-2 shadow-soft hover:scale-110 transition-transform cursor-pointer">
                <img
                  src={headphoneImg}
                  alt="Headphone variant"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary rounded-xl p-2 shadow-soft hover:scale-110 transition-transform cursor-pointer">
                <img
                  src={headphoneImg}
                  alt="Headphone variant"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary rounded-xl p-2 shadow-soft hover:scale-110 transition-transform cursor-pointer">
                <img
                  src={headphoneImg}
                  alt="Headphone variant"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Person */}
        <div className="absolute bottom-0 left-0 sm:left-8 z-30 hidden sm:block animate-slide-up delay-300">
          <div className="relative">
            <div className="absolute -inset-4 bg-peach rounded-full blur-2xl opacity-60" />
            <img
              src={heroPersonImg}
              alt="Person with headphones"
              className="relative w-32 lg:w-48 xl:w-56 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent rounded-full animate-bounce-subtle opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-bounce-subtle delay-300 opacity-60" />
      <div className="absolute bottom-1/4 right-10 w-5 h-5 bg-accent/50 rounded-full animate-bounce-subtle delay-500 opacity-60" />
    </section>
  );
};

export default Hero;
