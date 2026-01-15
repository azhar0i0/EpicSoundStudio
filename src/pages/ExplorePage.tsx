import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import headphoneImg from "@/assets/headphone.png";
import {
  Shield,
  Lock,
  Award,
  Headphones,
  Zap,
  Battery,
  Wifi,
  Volume2,
  Heart,
  Clock,
  CheckCircle,
  FileText,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Industry-leading sound quality with precision-engineered drivers for crystal-clear audio experience.",
  },
  {
    icon: Headphones,
    title: "Supreme Comfort",
    description:
      "Ergonomically designed with memory foam cushions for extended listening sessions without fatigue.",
  },
  {
    icon: Battery,
    title: "40+ Hours Battery",
    description:
      "Extended battery life with fast charging technology. 10 minutes charge for 3 hours playback.",
  },
  {
    icon: Wifi,
    title: "Seamless Connectivity",
    description:
      "Bluetooth 5.3 with multipoint connection. Switch between devices effortlessly.",
  },
  {
    icon: Volume2,
    title: "Active Noise Cancellation",
    description:
      "Advanced ANC technology blocks out distractions for immersive audio experience.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Ultra-low latency mode for gaming and video. Perfect sync between audio and video.",
  },
];

const features = [
  {
    title: "Hi-Res Audio Certified",
    description: "40mm custom drivers with frequency response up to 40kHz",
    highlight: true,
  },
  {
    title: "Spatial Audio",
    description: "360° immersive sound with head tracking support",
    highlight: false,
  },
  {
    title: "Voice Assistant Ready",
    description: "Works with Siri, Google Assistant, and Alexa",
    highlight: false,
  },
  {
    title: "Touch Controls",
    description: "Intuitive touch gestures for playback and calls",
    highlight: true,
  },
  {
    title: "Foldable Design",
    description: "Compact and portable with premium carrying case",
    highlight: false,
  },
  {
    title: "Multi-Device Pairing",
    description: "Connect to 2 devices simultaneously",
    highlight: true,
  },
];

const privacyRules = [
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "Your personal information is encrypted and stored securely. We never sell your data to third parties.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "All transactions are processed through PCI-DSS compliant payment gateways with SSL encryption.",
  },
  {
    icon: FileText,
    title: "Clear Terms",
    description:
      "Transparent terms of service with no hidden clauses. Easy-to-understand warranty and return policies.",
  },
  {
    icon: Users,
    title: "Community Guidelines",
    description:
      "Respectful community standards for reviews and interactions. Fair moderation practices.",
  },
];

const guarantees = [
  { icon: CheckCircle, text: "30-Day Money Back Guarantee" },
  { icon: Clock, text: "2-Year International Warranty" },
  { icon: Heart, text: "Lifetime Customer Support" },
  { icon: Globe, text: "Free Worldwide Shipping" },
];

const ExplorePage = () => {
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: privacyRef, isVisible: privacyVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-cream via-background to-sand overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-right">
                <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="inline w-4 h-4 mr-2" />
                  Discover Excellence
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Explore the World of
                  <br />
                  <span className="text-accent">Premium Audio</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
                  Discover why millions choose Epic-Sound for their audio needs.
                  From cutting-edge technology to unmatched customer service,
                  we're committed to your audio journey.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="group flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-all duration-300"
                  >
                    Shop Now
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    to="/#features"
                    className="flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    View Features
                  </Link>
                </div>
              </div>

              <div className="relative flex justify-center animate-slide-up">
                <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-accent/20 via-secondary to-peach/30 animate-pulse" />
                <img
                  src={headphoneImg}
                  alt="Premium Headphones"
                  className="relative z-10 w-72 lg:w-96 animate-float drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-20 lg:py-28 bg-background">
          <div className="container-custom">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                benefitsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block bg-peach text-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Unmatched <span className="text-accent">Benefits</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience audio like never before with our cutting-edge
                technology and premium craftsmanship.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`group bg-card p-8 rounded-3xl border border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-500 ${
                    benefitsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-peach rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <benefit.icon
                      size={28}
                      className="text-accent group-hover:text-accent-foreground transition-colors"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section
          ref={featuresRef}
          className="py-20 lg:py-28 bg-sand/30 overflow-hidden"
        >
          <div className="container-custom">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                featuresVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                Technical Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Advanced <span className="text-accent">Features</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Powered by the latest technology for an unparalleled audio
                experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                    feature.highlight
                      ? "bg-accent text-accent-foreground"
                      : "bg-card border border-border/50"
                  } ${
                    featuresVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div
                    className={`absolute top-6 right-6 text-6xl font-bold opacity-10 select-none`}
                  >
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p
                    className={`${
                      feature.highlight
                        ? "text-accent-foreground/80"
                        : "text-muted-foreground"
                    } leading-relaxed relative z-10`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees Banner */}
        <section className="py-12 bg-accent">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {guarantees.map((guarantee, index) => (
                <div
                  key={guarantee.text}
                  className="flex items-center gap-4 text-accent-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-accent-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <guarantee.icon size={24} />
                  </div>
                  <span className="font-semibold">{guarantee.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy & Rules Section */}
        <section ref={privacyRef} className="py-20 lg:py-28 bg-background">
          <div className="container-custom">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                privacyVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-block bg-peach text-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                Trust & Transparency
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Privacy & <span className="text-accent">Guidelines</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe in transparency and protecting our customers. Here's
                how we ensure your trust.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {privacyRules.map((rule, index) => (
                <div
                  key={rule.title}
                  className={`group flex gap-6 bg-card p-8 rounded-3xl border border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-500 ${
                    privacyVisible
                      ? "opacity-100 translate-x-0"
                      : index % 2 === 0
                      ? "opacity-0 -translate-x-10"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <rule.icon
                      size={28}
                      className="text-accent group-hover:text-accent-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{rule.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-olive-light to-primary overflow-hidden">
          <div className="container-custom text-center text-primary-foreground">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience
              <br />
              <span className="text-accent">Premium Audio?</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
              Join thousands of satisfied customers who've elevated their audio
              experience with Epic-Sound.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="group flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-full font-semibold shadow-glow hover:scale-105 transition-all duration-300"
              >
                Browse Products
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/"
                className="flex items-center gap-2 border-2 border-accent-foreground text-accent-foreground px-10 py-4 rounded-full font-semibold hover:bg-accent-foreground hover:text-primary transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExplorePage;
