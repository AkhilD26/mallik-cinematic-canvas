import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? "mt-4" : "mt-0"
      }`}
    >
      <div className={`container mx-auto px-8 py-4 flex items-center justify-between rounded-full transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border border-white/5 shadow-2xl" : "bg-transparent"
      }`}>
        <a href="#home" className="font-display text-2xl font-bold text-foreground group">
          F8<span className="gold-text-gradient italic group-hover:not-italic transition-all duration-500">PRO</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-all duration-300 luxury-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+918897888811"
            className="flex items-center gap-2 gold-gradient text-primary-foreground px-6 py-2.5 rounded-full font-body text-[0.7rem] tracking-[0.15em] uppercase hover-glow transition-all"
          >
            <Phone size={12} />
            Connect
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 p-8 rounded-3xl bg-background/95 backdrop-blur-2xl border border-white/10 shadow-3xl overflow-hidden z-40"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+918897888811"
                className="flex items-center justify-center gap-2 gold-gradient text-primary-foreground px-6 py-4 rounded-full font-body text-[0.7rem] tracking-[0.2em] uppercase hover-glow transition-all mt-4"
              >
                <Phone size={14} />
                Connect Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
