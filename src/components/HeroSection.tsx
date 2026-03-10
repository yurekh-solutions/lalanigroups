import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [
  {
    image: hero1,
    title: "Vision Beyond Spaces",
    subtitle: "Crafting luxury residences that redefine modern living in Mumbai",
  },
  {
    image: hero2,
    title: "Where Dreams Take Shape",
    subtitle: "Premium residential & commercial projects across prime locations",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 tracking-tight px-4">
                {slides[current].title}
              </h1>
              <p className="font-body text-base sm:text-lg md:text-xl text-cream-muted mb-8 md:mb-10 max-w-2xl mx-auto px-4">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
                <Link
                  to="/projects"
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm md:text-base hover:bg-gold-light transition-colors duration-300 text-center"
                >
                  Explore Projects
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 rounded-full border-2 border-primary text-primary font-body font-semibold text-sm md:text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center"
                >
                  Schedule a Visit
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-cream-muted/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
