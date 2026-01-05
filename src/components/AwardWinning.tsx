import { Mic, Zap, Battery } from "lucide-react";
import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Mic,
    title: "Voice Assistant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex.",
  },
  {
    icon: Zap,
    title: "Fast Charging",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex.",
  },
  {
    icon: Battery,
    title: "1500mAh Battery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex.",
  },
];

const AwardWinning = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-background overflow-hidden"
      id="about"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div
            className={`relative flex justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-secondary blur-xl opacity-70" />
            <img
              src={headphoneImg}
              alt="Award winning headphone"
              className="relative z-10 w-64 lg:w-96 drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Award-Winning
              <br />
              True <span className="text-accent">Wireless</span>
              <br />
              Headphones
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 group"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-peach rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <feature.icon
                      size={24}
                      className="text-accent group-hover:text-accent-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardWinning;
