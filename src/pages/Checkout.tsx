import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { CreditCard, Truck, Shield, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearCart();
    navigate("/order-success");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 container-custom text-center">
          <h1 className="text-3xl font-bold mb-4">No items to checkout</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 container-custom">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Cart
        </Link>

        <h1 className="text-4xl lg:text-5xl font-bold mb-12 animate-fade-in">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8 animate-fade-in">
            {/* Shipping Info */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Truck size={20} className="text-accent" />
                </div>
                <h2 className="text-xl font-bold">Shipping Information</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <CreditCard size={20} className="text-accent" />
                </div>
                <h2 className="text-xl font-bold">Payment Method</h2>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <Shield size={20} className="text-primary" />
              <span className="text-sm">
                Your payment information is secured with 256-bit SSL encryption
              </span>
            </div>
          </div>

          {/* Order Summary */}
          <div className="animate-fade-in delay-200">
            <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-28">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-primary font-medium">Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (10%)</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span className="text-accent">
                      ${(totalPrice * 1.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-accent text-accent-foreground py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-glow disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="opacity-25"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        className="opacity-75"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Place Order"
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
