import { Mic, Zap, Battery } from "lucide-react";
import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Mic,
    title: "Voice Assistant",
    description:
      "Seamlessly connect to your preferred voice assistant for hands-free control.",
  },
  {
    icon: Zap,
    title: "Fast Charging",
    description:
      "Get hours of playback from just minutes of charging with rapid charge technology.",
  },
  {
    icon: Battery,
    title: "1500mAh Battery",
    description:
      "Extended playtime that keeps up with your longest listening sessions.",
  },
];

const AwardWinning = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-background overflow-hidden"
      id="about"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image */}
          <div
            className={`relative flex justify-center transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-secondary/50 blur-lg" />
            <img
              src={headphoneImg}
              alt="Award winning headphone"
              className="relative z-10 w-56 lg:w-80 drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-500 delay-150 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] mb-10 tracking-tight">
              Award-Winning
              <br />
              True <span className="text-accent">Wireless</span>
              <br />
              Headphones
            </h2>

            <div className="space-y-7">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 group"
                  style={{ transitionDelay: `${(index + 1) * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-11 h-11 bg-peach rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-200">
                    <feature.icon
                      size={20}
                      className="text-accent group-hover:text-accent-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{feature.title}</h3>
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
