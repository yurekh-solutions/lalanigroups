import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Building2, MapPin } from "lucide-react";

const slides = [
   {
    image: "/src/assets/hero-2.jpg",
    title: "Luxury Homes in",
    titleHighlight: "Mumbai",
    subtitle: "Premium residences crafted for discerning families",
    location: "Andheri, Malad, Khar",
    tag: "Residential"
  },
  {

    image: "/src/assets/hero-1.jpg",
    title: "Building Trust Since",
    titleHighlight: "1985",
    subtitle: "40+ years of delivering excellence in real estate",
    location: "Mumbai, India",
       tag: "Commercial"

  },
 
  {
    image: "/src/assets/project-3.jpg",
    title: "Premium Real Estate",
    titleHighlight: "Developers",
    subtitle: "Creating iconic landmarks across Mumbai's prime locations",
    location: "BKC, Goregaon, Jogeshwari",
     tag: "Heritage"
  },
];

// Animation variants
const imageVariants = {
  enter: { scale: 1.1, opacity: 0 },
  center: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  },
  exit: { 
    opacity: 0,
    scale: 1.05,
    transition: { duration: 0.6, ease: "easeInOut" as const }
  }
};

const kenBurnsVariants = {
  animate: {
    scale: [1, 1.08],
    x: [0, -15],
    y: [0, -10],
    transition: {
      duration: 10,
      ease: "linear" as const,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* 3D Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              variants={kenBurnsVariants}
              animate="animate"
              className="w-full h-full"
            >
              <img
                src={slides[current].image}
                alt={`${slides[current].title} ${slides[current].titleHighlight} - Lalani Group Mumbai Real Estate`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
            
            {/* Multi-layer Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />

            {/* 3D Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201, 169, 98, 0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201, 169, 98, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px"
              }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>



      {/* Content with 3D Animations */}
      <motion.div style={{ opacity }} className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-4xl"
              style={{ perspective: "1000px" }}
            >
              {/* Tag Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-3d mb-6"
              >
                <Building2 className="w-4 h-4 text-[#c9a962]" />
                <span className="text-sm font-medium text-white/90">{slides[current].tag}</span>
              </motion.div>
              
              {/* Title with 3D Effect */}
              <motion.h1 
                variants={textRevealVariants}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-1 sm:mb-2 tracking-tight leading-tight"
                style={{ transformStyle: "preserve-3d" }}
              >
                {slides[current].title}
              </motion.h1>
              
              {/* Title Highlight with Gradient */}
              {slides[current].titleHighlight && (
                <motion.h1 
                  variants={textRevealVariants}
                  className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight gradient-gold-text"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {slides[current].titleHighlight}
                </motion.h1>
              )}
              {!slides[current].titleHighlight && <div className="mb-4 sm:mb-6" />}
              
              {/* Location Badge */}
              <motion.div 
                variants={subtitleVariants}
                className="flex items-center gap-2 text-white/70 mb-3 sm:mb-4"
              >
                <MapPin className="w-4 h-4 text-[#c9a962]" />
                <span className="text-sm sm:text-base">{slides[current].location}</span>
              </motion.div>
              
              {/* Subtitle */}
              <motion.p 
                variants={subtitleVariants}
                className="font-body text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-lg sm:max-w-xl"
              >
                {slides[current].subtitle}
              </motion.p>
              
              {/* Buttons with 3D Effect */}
              <motion.div 
                variants={buttonContainerVariants}
                className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
              >
                <motion.div variants={buttonVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#c9a962] to-[#d4b876] text-black font-semibold text-sm md:text-base shadow-depth-2 hover:shadow-glow-gold transition-all duration-300 btn-3d"
                  >
                    Explore Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div variants={buttonVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border-2 border-white/60 text-white font-semibold text-sm md:text-base hover:bg-white/10 hover:border-white/80 transition-all duration-300 glass-3d"
                  >
                    <Play className="w-4 h-4" />
                    Schedule a Visit
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
