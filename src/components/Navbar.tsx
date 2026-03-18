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
        scrolled || !isHomePage
          ? "bg-[#1a1f2e] shadow-lg" 
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img 
                src={logo} 
                alt="Lalani Group Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-xl font-bold tracking-wider text-[#c9a962]">
                LALANI
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase font-medium text-white/80">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  location.pathname === link.href
                    ? "text-[#c9a962] bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:02267280000"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4b876] hover:bg-[#c9a962] transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-black" />
              <span className="text-black font-semibold text-sm">022-6728 0000</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#1a1f2e] mx-4 mt-2 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <ul className="flex flex-col gap-2">
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
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        location.pathname === link.href
                          ? "text-[#c9a962] bg-white/5"
                          : "text-white/80 hover:text-white hover:bg-white/5"
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
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#d4b876] text-black font-semibold text-sm"
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
