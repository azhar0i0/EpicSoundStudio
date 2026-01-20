import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/products" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 lg:py-14">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link to="/" className="font-display text-xl font-semibold text-foreground tracking-tight">
            Epic-Sound
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social placeholder - kept minimal */}
          <div className="flex gap-2">
            {["X", "In", "Ig"].map((label) => (
              <a
                key={label}
                href="#"
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors text-xs font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © 2024 Epic-Sound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
