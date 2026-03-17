import { motion } from "framer-motion";
import { ArrowRight, MapPin, Bed, Bath, Square } from "lucide-react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    title: "Luxury Villa",
    location: "Bandra West, Mumbai",
    price: "₹8.5 Cr",
    beds: 4,
    baths: 4,
    sqft: "3,500",
    tag: "Featured"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    title: "Modern Residence",
    location: "Juhu, Mumbai",
    price: "₹12 Cr",
    beds: 5,
    baths: 5,
    sqft: "4,200",
    tag: "New Launch"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Sea View Apartment",
    location: "Worli, Mumbai",
    price: "₹6.8 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    tag: "Ready to Move"
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
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  }
};

const DiscoverProperties = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Discover Most Suitable Property
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties in Mumbai&apos;s most coveted locations
          </p>
        </motion.div>

        {/* Property Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-[#c9a962]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c9a962]/10"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#c9a962] text-black text-xs font-semibold rounded-full">
                  {property.tag}
                </span>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-bold text-white">{property.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c9a962] transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#c9a962]/0 group-hover:bg-[#c9a962]/5 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#c9a962] text-[#c9a962] font-semibold rounded-full hover:bg-[#c9a962] hover:text-black transition-all duration-300 group"
          >
            View All Properties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Curved Property Showcase Section */}
      <div className="mt-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Content with Curved Shape */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              >
                {/* Curved Background */}
                <div className="absolute inset-0 bg-white" style={{
                  clipPath: "ellipse(90% 100% at 0% 50%)"
                }} />
                
                <div className="relative z-10">
                  <span className="text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4 block">
                    Featured Property
                  </span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-4">
                    FRANKE
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Experience luxury living at its finest with breathtaking ocean views and world-class amenities
                  </p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-3xl md:text-4xl font-bold text-black">₹2,90,00,000</span>
                    <span className="text-gray-500">onwards</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-black">
                      <Bed className="w-5 h-5" />
                      <span className="font-semibold">4 Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <Bath className="w-5 h-5" />
                      <span className="font-semibold">5 Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <Square className="w-5 h-5" />
                      <span className="font-semibold">4,500 sqft</span>
                    </div>
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 group"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-96 lg:h-auto min-h-[500px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80"
                  alt="Franke Property"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#16213e]/20" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverProperties;
