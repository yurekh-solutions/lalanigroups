import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Eye, ArrowRight, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";

const properties3D = [
  {
    id: 1,
    title: "Luxury 4 BHK Apartments",
    location: "Bandra West, Mumbai",
    price: "₹12.5 Cr",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    wireframe: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    specs: { beds: 4, baths: 5, sqft: "4,500" },
    tag: "3D Tour Available"
  },
  {
    id: 2,
    title: "Beachfront Villa for Sale",
    location: "Juhu Beach, Mumbai",
    price: "₹18 Cr",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    wireframe: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    specs: { beds: 5, baths: 6, sqft: "6,200" },
    tag: "Virtual Walkthrough"
  },
  {
    id: 3,
    title: "Penthouse Sea View Mumbai",
    location: "Worli Sea Face, Mumbai",
    price: "₹25 Cr",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    wireframe: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    specs: { beds: 4, baths: 5, sqft: "5,800" },
    tag: "AR Ready"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  }
};

const Card3D = ({ property }: { property: typeof properties3D[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <Link to={`/projects`}>
        <motion.div
          animate={{
            rotateY: mousePosition.x,
            rotateX: -mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] rounded-2xl overflow-hidden border border-[#c9a962]/20 hover:border-[#c9a962]/60 transition-all duration-500"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* 3D Tag */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-[#c9a962]/90 backdrop-blur-sm rounded-full">
            <Box className="w-3.5 h-3.5 text-black" />
            <span className="text-xs font-semibold text-black">{property.tag}</span>
          </div>

          {/* View Button */}
          <motion.div 
            className="absolute top-4 right-4 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Eye className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          {/* Image Container with 3D Effect */}
          <div className="relative h-72 overflow-hidden">
            {/* Main Image */}
            <motion.img
              src={property.image}
              alt={property.title}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ 
                opacity: isHovered ? 0 : 1,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Wireframe Image (shown on hover) */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={property.wireframe}
                alt={`${property.title} - 3D View`}
                className="w-full h-full object-cover"
                style={{ 
                  filter: "contrast(1.2) brightness(0.8) sepia(0.3) hue-rotate(180deg) saturate(1.5)",
                  mixBlendMode: "screen"
                }}
              />
              {/* Blueprint Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(201, 169, 98, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201, 169, 98, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px"
                }}
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent" />

            {/* 3D Depth Lines */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 border-2 border-[#c9a962]/40 rounded-2xl m-4" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-[#c9a962]/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#c9a962]/20 rounded-full" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 relative" style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#c9a962] transition-colors mb-1">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-400">{property.location}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-[#c9a962]">{property.price}</span>
              </div>
            </div>

            {/* Specs */}
            <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-800 pt-4 mb-4">
              <span>{property.specs.beds} Beds</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>{property.specs.baths} Baths</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>{property.specs.sqft} sqft</span>
            </div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-2 text-[#c9a962] font-semibold text-sm"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Maximize2 className="w-4 h-4" />
              <span>Explore in 3D</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>

          {/* 3D Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{ 
              boxShadow: isHovered 
                ? "0 0 40px rgba(201, 169, 98, 0.3), inset 0 0 40px rgba(201, 169, 98, 0.1)" 
                : "0 0 0px rgba(201, 169, 98, 0)"
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Visualization3D = () => {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201, 169, 98, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 169, 98, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Floating 3D Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 border border-[#c9a962]/20 rounded-lg hidden lg:block"
        style={{ transform: "perspective(500px) rotateX(60deg)" }}
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-24 h-24 border border-[#c9a962]/10 rounded-full hidden lg:block"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-full mb-6"
          >
            <Box className="w-4 h-4 text-[#c9a962]" />
            <span className="text-[#c9a962] text-sm font-semibold">3D Visualization</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Premium Properties with{" "}
            <span className="text-[#c9a962]">3D Views</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore luxury apartments, beachfront villas, and sea view penthouses in Mumbai 
            with our cutting-edge 3D visualization technology. Hover to see architectural wireframes.
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {properties3D.map((property) => (
            <Card3D key={property.id} property={property} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-black font-semibold rounded-full hover:bg-[#d4b876] transition-all duration-300 group"
          >
            <Box className="w-5 h-5" />
            View All 3D Models
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Visualization3D;
