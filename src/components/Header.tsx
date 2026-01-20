import { useState, useEffect } from "react";
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const { totalItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();

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
    if (href.includes("#")) {
      e.preventDefault();
      const [path, hash] = href.split("#");

      if (location.pathname === "/" || path === "/") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate(href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features", hasDropdown: true },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/products" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-display text-xl font-semibold text-foreground tracking-tight">
            Epic-Sound
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsFeaturesOpen(true)}
                    onMouseLeave={() => setIsFeaturesOpen(false)}
                  >
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isFeaturesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isFeaturesOpen && (
                      <div className="absolute top-full left-0 mt-3 w-44 bg-background border border-border rounded-lg shadow-medium p-1.5 animate-scale-in">
                        {["Sound Quality", "Bluetooth", "Battery Life"].map((label) => (
                          <a
                            key={label}
                            href="#"
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                          >
                            {label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right side icons */}
          <div className="flex items-center gap-2">
            <button className="p-2.5 hover:bg-muted rounded-md transition-colors hidden sm:block">
              <Search size={18} className="text-muted-foreground" />
            </button>
            <Link
              to="/wishlist"
              className="p-2.5 hover:bg-muted rounded-md transition-colors hidden sm:block relative"
            >
              <Heart size={18} className="text-muted-foreground" />
              {wishlistItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] rounded-full flex items-center justify-center font-semibold">
                  {wishlistItems}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="p-2.5 hover:bg-muted rounded-md transition-colors relative"
            >
              <ShoppingCart size={18} className="text-muted-foreground" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2.5 hover:bg-muted rounded-md transition-colors ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-background border border-border rounded-lg shadow-medium animate-scale-in">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-muted-foreground hover:text-foreground hover:bg-muted transition-colors font-medium py-2.5 px-3 rounded-md text-sm"
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
