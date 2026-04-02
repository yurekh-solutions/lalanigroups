import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Play, Building2, MapPin, Home } from "lucide-react";
import valetanie from "@/assets/lalanigoodwill/valetanie.webp";
import mainElevation from "@/assets/lalanigoodwill/1 Main Elevation.jpg";
import busines from "@/assets/lalanibusinespark/busines.png";

const slides = [
  {
    image: mainElevation,
    title: "Lalani Goodwill",
    titleHighlight: "Andheri East",
    subtitle: "Thoughtfully designed 1, 2 & 3 BHK residences in Andheri East",
    location: "Andheri East, Mumbai",
    tag: "Residential",
    route: "/lalani-goodwill"
  },
  
  {
    image: busines,
    title: "Lalani Business Park",
    titleHighlight: "Khar West",
    subtitle: "Premium commercial spaces designed for growing businesses",
    location: "Khar West, Mumbai",
    tag: "Commercial",
    route: "/lalani-business-park"
  },
  {
    image: valetanie,
    title: "Velentine Apartment",
    titleHighlight: "Malad East",
    subtitle: "Ready-to-move 1BHK & 2BHK residential apartments in Malad East, Mumbai",
    location: "Malad East, Mumbai",
    tag: "Residential",
    route: "/velentine-apartment"
  },
  
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" as const }
  }
};

const textRevealVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    rotateX: -15,
    filter: "blur(12px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 1, 
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  }
};

const subtitleVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: 0.3
    }
  }
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      ease: "easeInOut" as const,
      repeat: Infinity
    }
  }
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const handleSlideClick = () => {
    navigate(slides[current].route);
    window.location.reload();
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden cursor-pointer" onClick={handleSlideClick}>
      {/* Background Images - Clean Display No Zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={`${slides[current].title} ${slides[current].titleHighlight} - Lalani Group Mumbai`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              {/* Tag Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                {slides[current].tag === "Residential" ? (
                  <Home className="w-4 h-4 text-[#c9a962]" />
                ) : (
                  <Building2 className="w-4 h-4 text-[#c9a962]" />
                )}
                <span className="text-sm font-medium text-white/90">{slides[current].tag}</span>
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight leading-tight"
              >
                {slides[current].title}
              </motion.h1>
              
              {/* Title Highlight */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight gradient-gold-text"
              >
                {slides[current].titleHighlight}
              </motion.h1>
              
              {/* Location */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-white/70 mb-4"
              >
                <MapPin className="w-4 h-4 text-[#c9a962]" />
                <span className="text-sm sm:text-base">{slides[current].location}</span>
              </motion.div>
              
              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="font-body text-base sm:text-lg text-white/80 mb-8 max-w-xl"
              >
                {slides[current].subtitle}
              </motion.p>
              
              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#c9a962] to-[#d4b876] text-black font-semibold text-sm md:text-base hover:shadow-lg transition-all duration-300"
                >
                  Explore Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact#schedule-visit"
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border-2 border-white/60 text-white font-semibold text-sm md:text-base hover:bg-white/10 hover:border-white/80 transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  Schedule a Visit
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20" onClick={(e) => e.stopPropagation()}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); setCurrent(index); }}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? 'w-8 h-2 bg-[#c9a962]'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
