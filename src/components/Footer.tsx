import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "About Us", href: "#about" },
    { name: "Product", href: "#products" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-card py-12 lg:py-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-foreground">
            Epic-Sound
          </a>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Epic-Sound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
