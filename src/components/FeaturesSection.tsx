import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-sand/30 overflow-hidden"
      id="features"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-accent italic">Features</span> Of
            <br />
            Product
          </h2>
          <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform shadow-lg">
            View All
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Feature 01 - Large Card (Right aligned) */}
          <div
            className={`relative bg-card rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-700 hover:shadow-xl group ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex flex-col lg:flex-row items-start gap-6">
              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Perfect Sound
                  <br />
                  Quality
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-xs">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry. Lorem Ipsum Has Been The Industry's
                  Standard Dummy Text Ever Since The 1500s.
                </p>
                <button className="group/btn flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-all shadow-lg">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Image with number */}
              <div className="relative flex-shrink-0">
                <div className="absolute -top-4 right-0 text-[120px] lg:text-[180px] font-bold text-muted/20 select-none leading-none">
                  01
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/50 rounded-full blur-2xl scale-110" />
                  <img
                    src={headphoneImg}
                    alt="Perfect Sound Quality"
                    className="relative w-40 lg:w-56 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Feature 02 - Medium Card */}
            <div
              className={`relative bg-card rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-700 hover:shadow-xl group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center gap-6">
                {/* Image with number */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -bottom-8 -left-4 text-[100px] lg:text-[120px] font-bold text-muted/20 select-none leading-none">
                    02
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-peach/50 rounded-full blur-xl scale-110" />
                    <img
                      src={headphoneImg}
                      alt="Awesome Microphone"
                      className="relative w-28 lg:w-36 object-contain group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold">
                    Awesome Microphone
                  </h3>
                </div>
              </div>
            </div>

            {/* Feature 03 - Medium Card */}
            <div
              className={`relative bg-card rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-700 hover:shadow-xl group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">
                    Easy To Control
                    <br />
                    Bluetooth
                  </h3>
                  <button className="group/btn flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-all shadow-lg">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>

                {/* Image with number */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -bottom-6 -right-4 text-[100px] lg:text-[120px] font-bold text-muted/20 select-none leading-none">
                    03
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-200/50 rounded-full blur-xl scale-110" />
                    <img
                      src={headphoneImg}
                      alt="Easy To Control Bluetooth"
                      className="relative w-28 lg:w-36 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
