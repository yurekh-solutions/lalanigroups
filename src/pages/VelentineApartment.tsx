import { useState, useEffect } from "react";
import { MapPin, Home, Clock, X, Phone, Mail, Download, CheckCircle, Building2, User, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/tracking";

// Valentine Apartment Images
import elevation1 from "@/assets/valentine/Elevation-Front-min-1-1.webp";
import lobby from "@/assets/valentine/lobby.webp";
import multipurpose from "@/assets/valentine/multi-purpose-hall-view_01-min.webp";

// 1BHK Floor Plans
import bhk401 from "@/assets/valentine/1bhk 401.webp";
import bhk405 from "@/assets/valentine/1bhk405.webp";
import bhk3872d from "@/assets/valentine/1bhk3872d.webp";
import bhk3873d from "@/assets/valentine/1bhk3873d.webp";
import bhk3d from "@/assets/valentine/1bhk3d.webp";
import bhk4002d from "@/assets/valentine/1bhk4002d.webp";
import bhk4003d from "@/assets/valentine/1bhk4003d.webp";

// 2BHK Floor Plans
import bhk592sqft2d from "@/assets/valentine/2bhk592sqft2d.webp";
import bhk592sqft3d from "@/assets/valentine/2bhk592sqft3d.webp";
import bhk613sqft2d from "@/assets/valentine/2bhk613sqft2d.webp";
import bhk613sqft3d from "@/assets/valentine/2bhk613sqft3d.webp";

// Additional Images
import floorplanWebp from "@/assets/valentine/floorplanning.webp";
// New Gallery / Hero Images
import valHero from "@/assets/valentine/val_hero.jpg";
import valExterior from "@/assets/valentine/val_exterior.jpg";
import valClubhouse from "@/assets/valentine/val_clubhouse.jpg";
import valLiving from "@/assets/valentine/val_living.jpg";
import valDining from "@/assets/valentine/val_dining.jpg";
import valDining2 from "@/assets/valentine/val_dining2.jpg";
import valBedroom from "@/assets/valentine/val_bedroom.jpg";
import valBedroom2 from "@/assets/valentine/val_bedroom2.jpg";
import valBedroom3 from "@/assets/valentine/val_bedroom3.jpg";
import valKitchen from "@/assets/valentine/val_kitchen.jpg";
import valKitchen2 from "@/assets/valentine/val_kitchen2.jpg";
// Brochure PDF
import brochurePDF from "@/assets/valentine/E-Brochure-Velentine-Apartment-1-Wing-D-7-4-21-1.pdf";

const heroSlides = [
  { image: valHero, alt: "Velentine Apartment" },
  { image: elevation1, alt: "Building Elevation" },
  
  { image: valClubhouse, alt: "Club House" },
  { image: multipurpose, alt: "Multi-Purpose Hall" },
];

const floorPlans1BHK = [
  { src: bhk401, title: "1 BHK - 401 sq.ft", type: "2D Layout" },
  { src: bhk405, title: "1 BHK - 405 sq.ft", type: "2D Layout" },
  { src: bhk3872d, title: "1 BHK - 387 sq.ft", type: "2D View" },
  { src: bhk3873d, title: "1 BHK - 387 sq.ft", type: "3D View" },
  { src: bhk3d, title: "1 BHK", type: "3D View" },
  { src: bhk4002d, title: "1 BHK - 400 sq.ft", type: "2D View" },
  { src: bhk4003d, title: "1 BHK - 400 sq.ft", type: "3D View" },
];

const floorPlans2BHK = [
  { src: bhk592sqft2d, title: "2 BHK - 592 sq.ft", type: "2D View" },
  { src: bhk592sqft3d, title: "2 BHK - 592 sq.ft", type: "3D View" },
  { src: bhk613sqft2d, title: "2 BHK - 613 sq.ft", type: "2D View" },
  { src: bhk613sqft3d, title: "2 BHK - 613 sq.ft", type: "3D View" },
];

const amenities = [
  { name: "24/7 Security with Guard", description: "Round-the-clock security personnel for your safety" },
  { name: "CCTV Surveillance", description: "Complete coverage of all common areas" },
  { name: "Covered Parking", description: "Protected parking spaces for residents" },
  { name: "100% Power Backup", description: "Uninterrupted power supply for all units" },
  { name: "High-Speed Elevators", description: "Modern elevators for quick access" },
  { name: "Children's Play Area", description: "Safe and fun play zone for kids" },
  { name: "Landscaped Gardens", description: "Beautiful green spaces for relaxation" },
  { name: "Intercom Facility", description: "Seamless communication within the building" },
  { name: "Multi-Purpose Hall", description: "Spacious hall for events and gatherings" },
  { name: "Rainwater Harvesting", description: "Eco-friendly water conservation system" },
  { name: "Fire Safety Systems", description: "Advanced fire detection and suppression" },
  { name: "Visitor Parking", description: "Dedicated parking for your guests" },
];

const highlights = [
  { title: "Ready Possession - OC Received", description: "Occupancy Certificate obtained, move in immediately" },
  { title: "MahaRERA Approved - P51800028866", description: "Fully registered and compliant with RERA regulations" },
  { title: "Immediate move-in ready", description: "All units are complete with quality finishes" },
  { title: "10 Minutes from Malad Railway Station", description: "Easy access to Western Railway line for daily commute" },
  { title: "Near Oberoi Mall & Infiniti Mall", description: "Shopping, dining, and entertainment at your doorstep" },
  { title: "Close to reputed schools & hospitals", description: "Ryan International, Podar School, and quality healthcare nearby" },
  { title: "Excellent connectivity to Western Express Highway", description: "Quick access to all parts of Mumbai" },
  { title: "Aarey Colony Proximity", description: "Mumbai's green lung just minutes away for fresh air" },
];

const VelentineApartment = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>("");
  const [lightboxTitle, setLightboxTitle] = useState<string>("");
  const [heroCurrent, setHeroCurrent] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);
  
  // Brochure Download Popup State
  const [brochurePopupOpen, setBrochurePopupOpen] = useState(false);
  const [brochureForm, setBrochureForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [brochureFormLoading, setBrochureFormLoading] = useState(false);

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await trackEvent("form", "/velentine-apartment", {
        type: "project_enquiry",
        ...contactForm,
        project: "Velentine Apartment",
      });
      const text = `Hi, I am interested in Velentine Apartment.%0A%0AName: ${contactForm.name}%0APhone: ${contactForm.phone}%0AEmail: ${contactForm.email}%0AMessage: ${contactForm.message || "Please share more details"}`;
      window.open(`https://wa.me/919322642370?text=${text}`, "_blank");
      setFormSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setFormLoading(false);
    }
  };

  const openLightbox = (src: string, title: string) => {
    setLightboxImage(src);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  // Brochure download handler with lead capture
  const handleBrochureDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setBrochureFormLoading(true);
    try {
      // Track the lead in Firebase
      await trackEvent("form", "/velentine-apartment", {
        type: "brochure_download",
        name: brochureForm.name,
        email: brochureForm.email,
        phone: brochureForm.phone,
        project: "Velentine Apartment",
      });
      
      // Close popup
      setBrochurePopupOpen(false);
      
      // Trigger download
      const link = document.createElement('a');
      link.href = brochurePDF;
      link.download = "Velentine-Apartment-E-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Send details to WhatsApp
      const whatsappText = `Hi, I downloaded the Velentine Apartment E-Brochure.%0A%0A*My Details:*%0AName: ${brochureForm.name}%0AEmail: ${brochureForm.email}%0APhone: ${brochureForm.phone}%0A%0APlease share more details about the project.`;
      window.open(`https://wa.me/919322642370?text=${whatsappText}`, "_blank");
      
      // Reset form
      setBrochureForm({
        name: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      console.error("Error tracking brochure download:", err);
    } finally {
      setBrochureFormLoading(false);
    }
  };

  // Hero carousel section navigation
  const heroSlideLinks = ["#overview", "#amenities", "#amenities"];

  return (
    <>
      <SEO
        title="Velentine Apartment | Ready to Move 1BHK & 2BHK Flats in Malad East Mumbai"
        description="Velentine Apartment Wing D - Ready possession 1BHK & 2BHK flats in Malad East, Mumbai. OC Received. Immediate move-in. Near Malad Station & Western Express Highway. Starting from ₹75 Lakhs."
        keywords="Velentine Apartment, ready flats Malad, 1BHK Malad East, 2BHK Malad, ready possession Mumbai, OC received flats, affordable flats Malad, Lalani Group Malad, residential property Malad East, ready to move apartments Mumbai"
        canonicalUrl="/velentine-apartment"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": "Velentine Apartment - Wing D",
          "description": "Ready possession 1BHK & 2BHK apartments in Malad East, Mumbai",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Wing D, Malad East",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400097",
            "addressCountry": "IN"
          },
          "numberOfRooms": "1-2",
          "occupancy": "Ready to Move",
          "priceRange": "₹75 Lakhs - ₹1.05 Crore"
        }}
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        
        {/* Hero Section - Clean with Images Only */}
        <section className="relative h-screen max-h-[900px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.a
              key={heroCurrent}
              href={heroSlideLinks[heroCurrent]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 cursor-pointer"
            >
              <img 
                src={heroSlides[heroCurrent].image} 
                alt={heroSlides[heroCurrent].alt}
                className="w-full h-full object-cover" 
                loading="eager" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
              {/* Click indicator */}
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm border border-white/30 flex items-center gap-2 opacity-0 hover:opacity-100 transition-opacity">
                <span>Click to view {heroSlides[heroCurrent].alt}</span>
              </div>
            </motion.a>
          </AnimatePresence>
          
          {/* Hero Content - Minimal */}
         
          
          {/* Hero Carousel Navigation - Dots */}
         
          
          {/* Scroll Indicator */}
          
        </section>

        {/* Project Info Section */}
        <section id="overview" className="bg-background">
          {/* Overview Hero Banner with bg cover */}
          <div className="relative py-20 md:py-28 overflow-hidden">
            <div className="absolute inset-0">
              <img src={lobby} alt="Velentine Apartment Overview" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/65" />
            </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-5 py-2 bg-green-500/30 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium mb-6 border border-green-500/30"
            >
              Ready Possession - OC Received
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tight"
            >
              Velentine Apartment
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl sm:text-2xl text-white/90 font-light mb-10"
            >
              Welcome to Your New Home
            </motion.p>
            
            {/* Info Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <span className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                <MapPin className="w-4 h-4 text-[#c9a962]" /> Malad East, Mumbai
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                <Home className="w-4 h-4 text-[#c9a962]" /> Residential Project
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                <Clock className="w-4 h-4 text-green-400" /> Ready to Move
              </span>
            </motion.div>
            
            <motion.a 
              href="#overview-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white rounded-full font-semibold hover:bg-white/20 transition-all text-lg"
            >
              Explore More
            </motion.a>
          </div>
          </div>

          {/* Overview Content */}
          <div id="overview-content" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4 block"
              >
                Project Overview
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight"
              >
                Your New Home is <span className="text-[#c9a962]">Ready</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6"
              >
                Velentine Apartment 1 – Wing D is a supreme embodiment of a sprawling lifestyle and resplendent features. 
                It is the perfect fusion of contemporary architecture, ideal location, elegant spaces and carefully curated luxury amenities. 
                The 1 & 2 BHK exquisite apartments showcase the most thoughtful design, stylish appointments, finest quality finishing 
                and best brands to provide an unparalleled experience in luxury living.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              >
                From its magnificent designer entrance lobby, high-speed elevators silently whisk you up to your luxurious abodes. 
                Inside, every square inch is designed to build in functionality and create an aesthetic appeal at every turn. 
                Your every element is conceived to help you live a life of inhabited luxury with premium vitrified flooring, 
                modular kitchens, and top-quality sanitary fittings from renowned brands.
              </motion.p>
            </div>
            
            {/* Key Highlights Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-5 md:p-6 bg-card rounded-xl border border-border hover:border-[#c9a962]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#c9a962]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6 md:w-7 md:h-7 text-[#c9a962]" />
                </div>
                <p className="font-bold text-foreground text-sm md:text-base">1BHK & 2BHK</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Spacious Units</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-5 md:p-6 bg-card rounded-xl border border-border hover:border-[#c9a962]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#c9a962]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-[#c9a962]" />
                </div>
                <p className="font-bold text-foreground text-sm md:text-base">Malad East</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Prime Location</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-5 md:p-6 bg-card rounded-xl border border-border hover:border-[#c9a962]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-green-500" />
                </div>
                <p className="font-bold text-foreground text-sm md:text-base">OC Received</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Ready to Move</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center p-5 md:p-6 bg-card rounded-xl border border-border hover:border-[#c9a962]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#c9a962]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 md:w-7 md:h-7 text-[#c9a962]" />
                </div>
                <p className="font-bold text-foreground text-sm md:text-base">Wing D</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Premium Tower</p>
              </motion.div>
            </div>
            
            {/* Highlights List */}
            <div className="max-w-4xl mx-auto">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-heading font-bold text-center mb-8"
              >
                Project Highlights
              </motion.h3>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {highlights.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-[#c9a962]/30 hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-[#c9a962] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground text-sm md:text-base font-semibold mb-1">{item.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Lifestyle & Amenities Showcase */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4 block"
                >
                  Lifestyle & Amenities
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight"
                >
                  Premium <span className="text-[#c9a962]">Living Experience</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
                >
                  Discover a world of comfort, convenience and luxury with our thoughtfully designed amenities
                </motion.p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
                {/* Left Side - Image Gallery Grid */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="rounded-xl overflow-hidden border border-border shadow-lg group cursor-pointer" onClick={() => openLightbox(valClubhouse, "Club House")}>
                        <img src={valClubhouse} alt="Club House" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="rounded-xl overflow-hidden border border-border shadow-lg group cursor-pointer" onClick={() => openLightbox(multipurpose, "Multi-Purpose Hall")}>
                        <img src={multipurpose} alt="Multi-Purpose Hall" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="rounded-xl overflow-hidden border border-border shadow-lg group cursor-pointer" onClick={() => openLightbox(valExterior, "Exterior View")}>
                        <img src={valExterior} alt="Exterior View" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="rounded-xl overflow-hidden border border-border shadow-lg group cursor-pointer" onClick={() => openLightbox(lobby, "Entrance Lobby")}>
                        <img src={lobby} alt="Entrance Lobby" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right Side - Features */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                    World-Class <span className="text-[#c9a962]">Features</span>
                  </h3>
                  
                  {/* Feature List */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#c9a962]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Home className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Spacious Residences</h4>
                        <p className="text-sm text-muted-foreground">Well-ventilated 1BHK & 2BHK apartments with modern finishes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#c9a962]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Designer Entrance Lobby</h4>
                        <p className="text-sm text-muted-foreground">Grand lobby with premium flooring and elegant lighting</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#c9a962]/10 rounded-lg flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Multi-Purpose Hall</h4>
                        <p className="text-sm text-muted-foreground">Spacious venue for celebrations and community events</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#c9a962]/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Prime Location</h4>
                        <p className="text-sm text-muted-foreground">Close to malls, schools, hospitals and major highways</p>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="#amenities"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a962] text-black rounded-lg font-bold hover:bg-[#d4b876] transition-all hover:shadow-lg"
                  >
                    Explore All Amenities
                  </a>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 pt-12 border-t border-border">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#c9a962] mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Happy Families</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#c9a962] mb-2">12+</div>
                  <p className="text-sm text-muted-foreground">Premium Amenities</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#c9a962] mb-2">OC</div>
                  <p className="text-sm text-muted-foreground">Received</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#c9a962] mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Ready to Move</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Interior Gallery Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-2">Photo Gallery</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3">
                Interior <span className="text-[#c9a962]">Glimpse</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#c9a962] to-[#e8c97a] mx-auto mb-4 rounded-full" />
              <p className="text-muted-foreground">Step inside and experience luxury living at Velentine Apartment</p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                { src: valLiving, label: "Living Room" },
                { src: valDining, label: "Dining Area" },
                { src: valBedroom, label: "Master Bedroom" },
                { src: valKitchen, label: "Kitchen" },
                { src: valDining2, label: "Dining View 2" },
                { src: valBedroom2, label: "Bedroom View 2" },
                { src: valBedroom3, label: "Bedroom View 3" },
                { src: valKitchen2, label: "Kitchen View 2" },
                { src: valClubhouse, label: "Club House" },
                { src: valExterior, label: "Exterior" },
                { src: lobby, label: "Entrance Lobby" },
                { src: multipurpose, label: "Multi-Purpose Hall" },
              ].map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-[#c9a962]/50 hover:shadow-xl transition-all relative"
                  onClick={() => openLightbox(img.src, img.label)}
                >
                  <div className="h-[160px] sm:h-[180px] md:h-[200px] overflow-hidden bg-muted">
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-end justify-center pb-3 transition-all">
                    <span className="opacity-0 group-hover:opacity-100 bg-[#c9a962] text-black text-xs font-bold px-3 py-1 rounded-full transition-all">
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Floor Plans Section */}
        <section id="floorplans" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4 block"
              >
                Floor Plans
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight"
              >
                Choose Your <span className="text-[#c9a962]">Perfect Home</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Explore our meticulously designed floor plans with detailed 2D and 3D layouts. Each unit is crafted to maximize space, natural light, and ventilation.
              </motion.p>
            </div>
            
            {/* 1BHK Floor Plans */}
            <div className="mb-16 md:mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 md:w-14 md:h-14 bg-[#c9a962] text-black rounded-full flex items-center justify-center text-lg md:text-xl font-bold">1</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">1 BHK Apartments</h3>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#c9a962]" />
                    Carpet Area: 387 - 405 sq.ft
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c9a962]" />
                    Ideal for Singles & Couples
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#c9a962]" />
                    Multiple Configurations
                  </span>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {floorPlans1BHK.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-[#c9a962]/50 transition-all hover:shadow-2xl"
                    onClick={() => openLightbox(plan.src, plan.title)}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                      <img 
                        src={plan.src} 
                        alt={plan.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy" 
                      />
                      <div className="absolute top-3 right-3 px-3 py-1.5 bg-[#c9a962] text-black text-xs font-bold rounded-full">
                        {plan.type}
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-foreground text-base md:text-lg mb-3">{plan.title}</h4>
                      <div className="space-y-2.5 text-sm text-muted-foreground mb-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Spacious Living Area</p>
                            <p className="text-xs">Well-ventilated with natural light</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Modern Kitchen</p>
                            <p className="text-xs">Modular design with premium fittings</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Attached Bathroom</p>
                            <p className="text-xs">Quality sanitary ware & fixtures</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Vitrified Flooring</p>
                            <p className="text-xs">Premium tiles throughout</p>
                          </div>
                        </div>
                      </div>
                      <button className="mt-2 w-full py-2.5 bg-[#c9a962]/10 text-[#c9a962] rounded-lg font-semibold text-sm hover:bg-[#c9a962] hover:text-black transition-all">
                        View Full Plan
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* 2BHK Floor Plans */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 md:w-14 md:h-14 bg-[#c9a962] text-black rounded-full flex items-center justify-center text-lg md:text-xl font-bold">2</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">2 BHK Apartments</h3>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#c9a962]" />
                    Carpet Area: 592 - 613 sq.ft
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c9a962]" />
                    Perfect for Small Families
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#c9a962]" />
                    Premium Layouts
                  </span>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {floorPlans2BHK.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-[#c9a962]/50 transition-all hover:shadow-2xl"
                    onClick={() => openLightbox(plan.src, plan.title)}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                      <img 
                        src={plan.src} 
                        alt={plan.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy" 
                      />
                      <div className="absolute top-3 right-3 px-3 py-1.5 bg-[#c9a962] text-black text-xs font-bold rounded-full">
                        {plan.type}
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-foreground text-base md:text-lg mb-3">{plan.title}</h4>
                      <div className="space-y-2.5 text-sm text-muted-foreground mb-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">2 Spacious Bedrooms</p>
                            <p className="text-xs">Master bedroom with attached bath</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Living & Dining Area</p>
                            <p className="text-xs">Open layout for family gatherings</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">2 Bathrooms</p>
                            <p className="text-xs">Premium fittings & fixtures</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Balcony</p>
                            <p className="text-xs">Private outdoor space</p>
                          </div>
                        </div>
                      </div>
                      <button className="mt-2 w-full py-2.5 bg-[#c9a962]/10 text-[#c9a962] rounded-lg font-semibold text-sm hover:bg-[#c9a962] hover:text-black transition-all">
                        View Full Plan
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4 block"
              >
                Amenities & Specifications
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight"
              >
                Modern <span className="text-[#c9a962]">Amenities</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
              >
                Welcome to an extraordinary world of fine living where aesthetics, design excellence and practical functionality 
                are combined to create the most perfect ambience for a luxury lifestyle.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto mb-16">
              {amenities.map((amenity, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-5 md:p-6 bg-background rounded-xl border border-border hover:border-[#c9a962]/40 hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#c9a962] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-foreground text-sm md:text-base font-semibold mb-1">{amenity.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{amenity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Specifications */}
            <div className="max-w-6xl mx-auto">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-heading font-bold text-center mb-8"
              >
                Premium Specifications
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-background rounded-xl border border-border"
                >
                  <h4 className="font-bold text-foreground mb-4 text-lg">Interior Features</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Flooring:</strong> Premium vitrified tiles in all rooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Kitchen:</strong> Modular kitchen with granite counter top</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Bathroom:</strong> Premium sanitary fittings from reputed brands</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Doors:</strong> Hardwood frame with flush doors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Windows:</strong> Powder coated aluminum sliding windows</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-background rounded-xl border border-border"
                >
                  <h4 className="font-bold text-foreground mb-4 text-lg">Electrical & Plumbing</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Wiring:</strong> Concealed copper wiring with modular switches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">AC Provision:</strong> Split AC provision in all bedrooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Geyser:</strong> Electrical geyser in all bathrooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Internet:</strong> Broadband internet point in living room</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Security:</strong> Video door phone & intercom system</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4 block"
              >
                Location
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight"
              >
                Prime <span className="text-[#c9a962]">Location</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
              >
                Malad's emergence as one of the most sought after residential suburbs of Mumbai is very much evident in its evolving landscape. 
                Besides being in close proximity to the largest green zone in Mumbai – the Aarey colony, Malad is also a commercial hub 
                with excellent connectivity to both the western and eastern suburbs.
              </motion.p>
            </div>
            
            {/* Google Map Embed */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
                {/* Address Info */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="flex flex-col justify-center p-6 md:p-8 bg-card rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#c9a962]/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#c9a962]" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Project Address</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Valentine Apartment, A2,<br />
                    Riddhi Gardens, Malad East,<br />
                    Mumbai, Maharashtra 400097
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-[#c9a962] rounded-full shrink-0"></span>
                      <span>10 min from Malad Railway Station</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-[#c9a962] rounded-full shrink-0"></span>
                      <span>Near Oberoi Mall (1.7 km)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-[#c9a962] rounded-full shrink-0"></span>
                      <span>Western Express Highway (1.75 km)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-[#c9a962] rounded-full shrink-0"></span>
                      <span>Close to Aarey Colony Green Zone</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-[#c9a962] rounded-full shrink-0"></span>
                      <span>Filmcity Studio (1.5 km)</span>
                    </div>
                  </div>
                  <a href="https://maps.google.com/?q=Valentine+Apartment,+A2,+Riddhi+Gardens,+Malad+East,+Mumbai,+Maharashtra+400097" target="_blank" rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#c9a962] text-black rounded-lg font-semibold text-sm hover:bg-[#d4b876] transition-all"
                  >
                    <MapPin className="w-4 h-4" /> Get Directions
                  </a>
                </motion.div>
                {/* Map */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="rounded-xl md:rounded-2xl overflow-hidden border border-border shadow-xl h-[300px] md:h-auto min-h-[320px]"
                >
                  <iframe
                    src="https://www.google.com/maps?q=Valentine+Apartment,+A2,+Riddhi+Gardens,+Malad+East,+Mumbai,+Maharashtra+400097&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Velentine Apartment Location"
                  />
                </motion.div>
              </div>
              
              {/* Nearby Landmarks */}
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card rounded-xl border border-border"
                >
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#c9a962]" />
                    Educational Institutions
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full"></span>
                      Ryan International School - 230m
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full"></span>
                      Podar Jumbo Kids - 650m
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full"></span>
                      Oberoi International School - 1.5km
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full"></span>
                      Whistling Woods International - 2.3km
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card rounded-xl border border-border"
                >
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c9a962]" />
                    Healthcare Facilities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full"></span>
                      Vasudha Hospital - 350m
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full"></span>
                      RadhaKrishna Hospital - 400m
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full"></span>
                      Gokuldham Medical Center - 1.1km
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full"></span>
                      Multiple Clinics & Pharmacies nearby
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Brochure Download Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#c9a962]/10 via-card to-[#c9a962]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Side - Images */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                        <img src={elevation1} alt="Building Elevation" className="w-full h-48 object-cover" />
                      </div>
                      <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                        <img src={multipurpose} alt="Multi-Purpose Hall" className="w-full h-48 object-cover" />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                        <img src={lobby} alt="Lobby" className="w-full h-48 object-cover" />
                      </div>
                      <div className="p-6 bg-[#c9a962] text-black rounded-xl shadow-lg">
                        <h4 className="font-bold text-2xl mb-2">100+</h4>
                        <p className="text-sm">Happy Families</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right Side - Details */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                    Download <span className="text-[#c9a962]">E-Brochure</span>
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                    Get detailed information about floor plans, specifications, amenities, and pricing in our comprehensive e-brochure. 
                    Everything you need to know about your dream home in one place.
                  </p>
                  
                  {/* Brochure Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#c9a962]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Home className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Detailed Floor Plans</h4>
                        <p className="text-sm text-muted-foreground">2D & 3D layouts with dimensions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#c9a962]/10 rounded-lg flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Complete Specifications</h4>
                        <p className="text-sm text-muted-foreground">Materials, finishes & fixtures details</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#c9a962]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Amenities Overview</h4>
                        <p className="text-sm text-muted-foreground">All facilities & recreational areas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#c9a962]/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#c9a962]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Location Advantages</h4>
                        <p className="text-sm text-muted-foreground">Connectivity & nearby landmarks</p>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setBrochurePopupOpen(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-black rounded-lg font-bold text-base md:text-lg hover:bg-[#d4b876] transition-all hover:shadow-xl hover:shadow-[#c9a962]/30"
                  >
                    <Download className="w-5 h-5 md:w-6 md:h-6" />
                    Download Brochure
                  </button>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    * PDF format • 5.2 MB • Updated January 2025
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#c9a962] text-sm font-semibold tracking-widest uppercase mb-4 block"
              >
                Contact Us
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight"
              >
                Get in <span className="text-[#c9a962]">Touch</span>
              </motion.h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6 md:space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 bg-background rounded-xl md:rounded-2xl border border-border hover:border-[#c9a962]/30 transition-all"
                >
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 md:mb-6">Site Office</h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                    <strong className="text-foreground">Velentine Apartment - Wing D</strong><br />
                    Malad East, Mumbai - 400 097
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    <a href="tel:+919322642370" className="flex items-center gap-3 text-foreground hover:text-[#c9a962] transition-colors text-sm md:text-base">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#c9a962] shrink-0" />
                      +91-93226 42370
                    </a>
                    <a href="mailto:sales@lalanigroup.in" className="flex items-center gap-3 text-foreground hover:text-[#c9a962] transition-colors text-sm md:text-base">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#c9a962] shrink-0" />
                      sales@lalanigroup.in
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 md:p-8 bg-background rounded-xl md:rounded-2xl border border-border hover:border-[#c9a962]/30 transition-all"
                >
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 md:mb-6">Corporate Office</h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                    <strong className="text-foreground">Lalani Group</strong><br />
                    7th Floor, Lalani Aura, 34th Road,<br />
                    Khar (W), Mumbai - 400 052
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    <a href="tel:+912267280000" className="flex items-center gap-3 text-foreground hover:text-[#c9a962] transition-colors text-sm md:text-base">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#c9a962] shrink-0" />
                      +91-22-6728 0000
                    </a>
                    <a href="mailto:info@lalanigroup.in" className="flex items-center gap-3 text-foreground hover:text-[#c9a962] transition-colors text-sm md:text-base">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#c9a962] shrink-0" />
                      info@lalanigroup.in
                    </a>
                  </div>
                </motion.div>
              </div>
              
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 bg-background rounded-xl md:rounded-2xl border border-border"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">Enquire Now</h3>
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a962]/50 text-sm md:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a962]/50 text-sm md:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a962]/50 text-sm md:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a962]/50 text-sm md:text-base"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full px-8 py-3 md:py-4 bg-[#c9a962] text-black rounded-lg font-bold text-base md:text-lg hover:bg-[#d4b876] transition-all disabled:opacity-50"
                  >
                    {formLoading ? "Sending..." : formSent ? "Sent Successfully!" : "Send Enquiry"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <LeadCapturePopup />

      {/* Brochure Download Lead Capture Popup */}
      <AnimatePresence>
        {brochurePopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setBrochurePopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border border-border rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#c9a962] to-[#d4b876] p-6 text-center relative">
                <button 
                  onClick={() => setBrochurePopupOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <FileText className="w-12 h-12 text-black mx-auto mb-3" />
                <h3 className="text-xl font-bold text-black">Download E-Brochure</h3>
                <p className="text-black/80 text-sm mt-1">Get complete project details</p>
              </div>
              
              {/* Form */}
              <form onSubmit={handleBrochureDownload} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      value={brochureForm.name}
                      onChange={(e) => setBrochureForm({ ...brochureForm, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:border-transparent transition-all text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      value={brochureForm.email}
                      onChange={(e) => setBrochureForm({ ...brochureForm, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:border-transparent transition-all text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      required
                      value={brochureForm.phone}
                      onChange={(e) => setBrochureForm({ ...brochureForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:border-transparent transition-all text-base"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={brochureFormLoading}
                  className="w-full py-4 mt-2 bg-[#c9a962] hover:bg-[#d4b876] text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-lg shadow-lg hover:shadow-xl"
                >
                  {brochureFormLoading ? (
                    <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download Brochure
                    </>
                  )}
                </button>
                
                <p className="text-xs text-muted-foreground text-center pt-2">
                  Your details will be sent to WhatsApp for quick assistance
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[90vh] text-center">
            <img src={lightboxImage} alt={lightboxTitle} className="w-full h-full object-contain rounded-lg max-h-[80vh]" />
            <p className="text-white text-xl mt-4 font-semibold">{lightboxTitle}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default VelentineApartment;
