import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Buyers' Guide", href: "/buyers-guide" },
  { label: "Media Room", href: "/media-room" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-3d py-2 shadow-depth-2" 
          : isHomePage 
            ? "bg-transparent py-4" 
            : "glass-3d py-3"
      }`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Ambient Light Effect */}
      {scrolled && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(201, 169, 98, 0.05) 0%, transparent 100%)",
          }}
        />
      )}
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo with 3D Effect */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group perspective">
            <motion.div 
              className={`w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 overflow-hidden transition-all duration-300`}
              whileHover={{ 
                rotateY: 10, 
                rotateX: -5, 
                scale: 1.05 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img 
                src={logo} 
                alt="Lalani Group Logo - Premium Real Estate Developers Mumbai" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className={`font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-wider transition-all duration-300 group-hover:scale-105 ${scrolled || !isHomePage ? "gradient-gold-text" : "text-white drop-shadow-lg"}`}>
                Lalani
              </span>
              <span className={`text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium ${scrolled || !isHomePage ? "text-cream-muted" : "text-white/80"}`}>
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav - 3D Glass Style */}
          <div className="hidden lg:flex items-center gap-1 glass-3d px-2 py-1 rounded-full">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full btn-3d ${
                  location.pathname === link.href
                    ? scrolled || !isHomePage 
                      ? "text-primary bg-primary/10" 
                      : "text-[#c9a962] bg-white/10"
                    : scrolled || !isHomePage 
                      ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${scrolled || !isHomePage ? "bg-primary" : "bg-[#c9a962]"}`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons with 3D Effect */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href="tel:02267280000"
              className={`flex items-center gap-2 font-medium text-sm transition-all duration-300 hover:scale-105 ${scrolled || !isHomePage ? "text-foreground hover:text-primary" : "text-white hover:text-[#c9a962]"}`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">022-6728 0000</span>
            </a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl bg-gradient-to-r from-[#c9a962] to-[#d4b876] text-black font-semibold text-sm shadow-depth-2 hover:shadow-glow-gold transition-all duration-300 btn-3d"
              >
                Enquire Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle with 3D Effect */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl glass-3d text-foreground hover:shadow-glow-gold transition-all duration-300"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with 3D Glass Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: -10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden glass-3d mx-3 sm:mx-4 mt-2 rounded-2xl overflow-hidden shadow-depth-3"
            style={{ transformOrigin: "top center" }}
          >
            <div className="p-4 sm:p-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all btn-3d ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/10 shadow-glow-gold"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li 
                  className="mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="tel:02267280000"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold text-sm shadow-depth-2 hover:shadow-glow-gold transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    022-6728 0000
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
