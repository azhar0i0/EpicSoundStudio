import { Link } from "react-router-dom";
import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-muted/30 overflow-hidden"
      id="features"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight">
            <span className="text-accent">Features</span> Of
            <br />
            Product
          </h2>
          <Link
            to="/explore"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View All
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Feature 01 - Large Card */}
          <div
            className={`relative bg-card border border-border rounded-xl p-7 lg:p-9 overflow-hidden transition-all duration-500 hover:border-accent/30 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex flex-col lg:flex-row items-start gap-6">
              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="font-display text-xl lg:text-2xl font-semibold mb-4 tracking-tight">
                  Perfect Sound
                  <br />
                  Quality
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-xs">
                  Experience audio the way artists intended with our precision-engineered
                  40mm drivers delivering crystal-clear highs and deep, rich bass.
                </p>
                <Link
                  to="/explore"
                  className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Learn More
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </Link>
              </div>

              {/* Image with number */}
              <div className="relative flex-shrink-0">
                <div className="absolute -top-2 right-0 font-display text-[100px] lg:text-[140px] font-semibold text-muted/15 select-none leading-none tracking-tighter">
                  01
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/40 rounded-full blur-xl scale-110" />
                  <img
                    src={headphoneImg}
                    alt="Perfect Sound Quality"
                    className="relative w-36 lg:w-48 object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-5">
            {/* Feature 02 */}
            <div
              className={`relative bg-card border border-border rounded-xl p-6 lg:p-7 overflow-hidden transition-all duration-500 hover:border-accent/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center gap-6">
                {/* Image with number */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -bottom-6 -left-2 font-display text-[80px] lg:text-[100px] font-semibold text-muted/15 select-none leading-none tracking-tighter">
                    02
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-peach/40 rounded-full blur-lg scale-110" />
                    <img
                      src={headphoneImg}
                      alt="Awesome Microphone"
                      className="relative w-24 lg:w-32 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-lg lg:text-xl font-semibold tracking-tight">
                    Awesome Microphone
                  </h3>
                </div>
              </div>
            </div>

            {/* Feature 03 */}
            <div
              className={`relative bg-card border border-border rounded-xl p-6 lg:p-7 overflow-hidden transition-all duration-500 hover:border-accent/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="font-display text-lg lg:text-xl font-semibold mb-4 tracking-tight">
                    Easy To Control
                    <br />
                    Bluetooth
                  </h3>
                  <Link
                    to="/explore"
                    className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Learn More
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform duration-200"
                    />
                  </Link>
                </div>

                {/* Image with number */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -bottom-4 -right-2 font-display text-[80px] lg:text-[100px] font-semibold text-muted/15 select-none leading-none tracking-tighter">
                    03
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-sky-100/50 rounded-full blur-lg scale-110" />
                    <img
                      src={headphoneImg}
                      alt="Easy To Control Bluetooth"
                      className="relative w-24 lg:w-32 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
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
