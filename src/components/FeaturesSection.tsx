import headphoneImg from "@/assets/headphone.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Perfect Sound Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    alignment: "left",
  },
  {
    number: "02",
    title: "Awesome Microphone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    alignment: "right",
  },
  {
    number: "03",
    title: "Easy To Control Bluetooth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex.",
    alignment: "left",
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-card overflow-hidden"
      id="features"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-muted-foreground">Features</span> Of
            <br />
            Product
          </h2>
          <button className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
            View All
          </button>
        </div>

        {/* Features Grid */}
        <div className="space-y-12 lg:space-y-0">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 lg:py-12 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Number Background */}
              <div
                className={`absolute ${
                  feature.alignment === "left"
                    ? "left-0 lg:left-10"
                    : "right-0 lg:right-10"
                } top-1/2 -translate-y-1/2 text-[150px] lg:text-[200px] font-bold text-muted/30 select-none z-0`}
              >
                {feature.number}
              </div>

              {/* Content */}
              <div
                className={`relative z-10 ${
                  feature.alignment === "right" ? "lg:order-2" : ""
                }`}
              >
                <div className="bg-sand/50 rounded-3xl p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <button className="group flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative z-10 flex justify-center ${
                  feature.alignment === "right" ? "lg:order-1" : ""
                }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary rounded-full blur-2xl opacity-60 scale-110" />
                  <img
                    src={headphoneImg}
                    alt={feature.title}
                    className="relative w-48 lg:w-64 object-contain hover:scale-110 hover:rotate-6 transition-all duration-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
