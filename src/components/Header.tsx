import { useState, useEffect } from "react";
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Enable smooth scroll on hash navigation
  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Check if it's a hash link
    if (href.includes("#")) {
      e.preventDefault();
      const [path, hash] = href.split("#");

      if (location.pathname === "/" || path === "/") {
        // We're on the home page, just scroll to section
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to home page with hash
        navigate(href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features", hasDropdown: true },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/products" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-foreground">
            Epic-Sound
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsFeaturesOpen(true)}
                    onMouseLeave={() => setIsFeaturesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-foreground/80 hover:text-accent transition-colors font-medium">
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isFeaturesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isFeaturesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-background rounded-xl shadow-medium p-2 animate-slide-up">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-secondary rounded-lg transition-colors"
                        >
                          Sound Quality
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-secondary rounded-lg transition-colors"
                        >
                          Bluetooth
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-secondary rounded-lg transition-colors"
                        >
                          Battery Life
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-foreground/80 hover:text-accent transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors hidden sm:block">
              <Search size={20} className="text-foreground/70" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors hidden sm:block">
              <Heart size={20} className="text-foreground/70" />
            </button>
            <Link
              to="/cart"
              className="p-2 hover:bg-secondary rounded-full transition-colors relative"
            >
              <ShoppingCart size={20} className="text-foreground/70" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-semibold animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-background rounded-2xl shadow-medium animate-slide-up">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-foreground/80 hover:text-accent transition-colors font-medium py-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
