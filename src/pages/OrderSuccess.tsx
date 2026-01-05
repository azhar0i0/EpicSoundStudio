import { Link } from "react-router-dom";
import { CheckCircle2, Package, Truck, Home, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const OrderSuccess = () => {
  const [orderNumber] = useState(() =>
    Math.random().toString(36).substring(2, 10).toUpperCase()
  );

  useEffect(() => {
    // Fire confetti on mount
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#f97316", "#707237", "#fbbf24"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#f97316", "#707237", "#fbbf24"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const steps = [
    { icon: CheckCircle2, label: "Order Confirmed", active: true },
    { icon: Package, label: "Preparing", active: false },
    { icon: Truck, label: "Shipping", active: false },
    { icon: Home, label: "Delivered", active: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="relative mb-8 animate-scale-in">
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            <CheckCircle2 size={64} className="text-primary relative z-10" />
          </div>
          <Sparkles
            size={24}
            className="text-accent absolute top-0 right-1/3 animate-bounce-subtle"
          />
          <Sparkles
            size={20}
            className="text-accent absolute bottom-4 left-1/3 animate-bounce-subtle delay-300"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          Order <span className="text-accent">Placed!</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8 animate-fade-in delay-100">
          Thank you for your purchase! Your order has been successfully placed.
        </p>

        {/* Order Number */}
        <div className="bg-card rounded-2xl p-6 shadow-soft mb-8 animate-fade-in delay-200">
          <p className="text-muted-foreground mb-2">Order Number</p>
          <p className="text-2xl font-bold tracking-wider text-foreground">
            #{orderNumber}
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            A confirmation email has been sent to your email address.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="bg-card rounded-2xl p-6 shadow-soft mb-8 animate-fade-in delay-300">
          <h3 className="font-semibold mb-6">Order Progress</h3>
          <div className="flex justify-between items-center relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-muted rounded-full">
              <div className="h-full w-1/4 bg-primary rounded-full transition-all duration-500" />
            </div>
            
            {steps.map((step, index) => (
              <div key={step.label} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    step.active
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <step.icon size={20} />
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${
                    step.active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Estimated Delivery */}
        <div className="bg-accent/10 rounded-2xl p-6 mb-8 animate-fade-in delay-400">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Truck size={24} className="text-accent" />
            <span className="font-semibold">Estimated Delivery</span>
          </div>
          <p className="text-2xl font-bold text-accent">
            {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { weekday: "long", month: "long", day: "numeric" }
            )}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Link
            to="/"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-glow"
          >
            Continue Shopping
          </Link>
          <button className="border border-border px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-colors">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
