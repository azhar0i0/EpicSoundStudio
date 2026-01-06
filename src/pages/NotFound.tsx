import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ArrowLeft, Search, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import headphoneImg from "@/assets/headphone.png";

const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Glitch effect
  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    const originalText = "404";
    
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        let glitched = "";
        for (let i = 0; i < 3; i++) {
          glitched += Math.random() > 0.5 
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : originalText[i];
        }
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div 
          className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ 
            top: '10%', 
            left: '10%',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ 
            bottom: '10%', 
            right: '10%',
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating headphones decoration */}
        <div className="absolute top-20 left-20 opacity-10 animate-float">
          <Headphones className="w-32 h-32 text-primary" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Headphones className="w-24 h-24 text-accent" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-5 animate-float" style={{ animationDelay: '1s' }}>
          <Headphones className="w-16 h-16 text-primary" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 with headphone */}
          <div className="relative mb-8">
            {/* Giant 404 */}
            <h1 
              className="text-[180px] md:text-[250px] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/20 leading-none select-none"
              style={{
                textShadow: '0 0 100px hsl(var(--primary) / 0.3)',
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            >
              {glitchText}
            </h1>
            
            {/* Headphone replacing the 0 */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px)) rotate(${mousePosition.x * 0.5}deg)`
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-150 animate-pulse" />
                <img 
                  src={headphoneImg} 
                  alt="Lost Headphone"
                  className="w-48 md:w-64 drop-shadow-2xl animate-float relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Oops! Looks like you're
              <span className="text-primary"> lost in the sound</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for has gone silent. Maybe it's taking a break to enjoy some music?
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-6 py-4 pl-14 rounded-full border-2 border-border bg-card/50 backdrop-blur-sm focus:border-primary focus:outline-none transition-all group-hover:border-primary/50"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button size="lg" className="rounded-full gap-2 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full gap-2 px-8"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Popular destinations:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "All Products", path: "/products" },
                { name: "Cart", path: "/cart" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground text-sm">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        Error Code: 404 - Page Not Found
      </div>
    </div>
  );
};

export default NotFound;
