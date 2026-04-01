import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  MapPin, Phone, Mail, Download, Building2, Car, 
  Shield, Zap, Home, CheckCircle, X, ChevronLeft, ChevronRight,
  Train, ShoppingBag, Building, Wifi, Users, ArrowDown, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/tracking";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Import images
import businessParkLogo from "@/assets/lalanibusinespark/busineesparklogo.png";
import business2 from "@/assets/lalanibusinespark/business2.png";
import busines from "@/assets/lalanibusinespark/busines.png";
import busines3 from "@/assets/lalanibusinespark/busines3.png";
import business1 from "@/assets/lalanibusinespark/business1.png";
import business4 from "@/assets/lalanibusinespark/business4.png";
import business5 from "@/assets/lalanibusinespark/business5.png";
import quantum from "@/assets/lalanibusinespark/quantum.png";
import quantum1 from "@/assets/lalanibusinespark/quantum1.png";
import brochurePdf from "@/assets/lalanibusinespark/Business Park single page PDF.pdf";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutBg from "@/assets/about-bg.jpg";

// Gallery images
const galleryImages = [
  { src: business2, alt: "Lalani Business Park Exterior" },
  { src: busines, alt: "Corporate Office Space" },
  { src: quantum1, alt: "Premium Office Interior" },
  { src: business1, alt: "Modern Building Architecture" },
  { src: business4, alt: "Commercial Complex" },
  { src: business5, alt: "Business Hub" },
];

const projectHallmarks = [
  { icon: Building2, text: "Premium Commercial Development" },
  { icon: Building, text: "Modern Office Spaces" },
  { icon: MapPin, text: "Prime Location in Khar West" },
  { icon: Car, text: "Ample Basement Parking" },
  { icon: Zap, text: "24/7 Power Backup" },
  { icon: Shield, text: "24/7 Security with CCTV" },
  { icon: Wifi, text: "High-Speed Internet Ready" },
  { icon: Building2, text: "High-Speed Elevators" },
  { icon: Users, text: "Conference Rooms Available" },
  { icon: Home, text: "Cafeteria Facility" },
  { icon: Shield, text: "Fire Fighting Systems" },
  { icon: CheckCircle, text: "RERA Approved Project" },
];

const amenities = [
  { icon: Building2, title: "High-Speed Elevators", desc: "Quick access to all floors" },
  { icon: Shield, title: "24/7 Security", desc: "Round-the-clock CCTV surveillance" },
  { icon: Car, title: "Basement Parking", desc: "Ample parking space for visitors" },
  { icon: Zap, title: "Power Backup", desc: "Uninterrupted power supply" },
  { icon: Shield, title: "Fire Safety", desc: "Complete fire fighting systems" },
  { icon: Building2, title: "Modern Lobby", desc: "Impressive entrance experience" },
  { icon: Users, title: "Conference Rooms", desc: "Meeting spaces available" },
  { icon: Wifi, title: "Internet Ready", desc: "High-speed connectivity provision" },
  { icon: Home, title: "Cafeteria", desc: "On-site dining facility" },
];

const connectivityItems = [
  { icon: Train, name: "Khar Railway Station", distance: "5 min" },
  { icon: ShoppingBag, name: "Linking Road", distance: "3 min" },
  { icon: Building, name: "Bandra-Kurla Complex", distance: "15 min" },
  { icon: Building, name: "International Airport", distance: "20 min" },
  { icon: ShoppingBag, name: "Turner Road", distance: "2 min" },
  { icon: Building, name: "Bandra Station", distance: "10 min" },
  { icon: ShoppingBag, name: "Hill Road", distance: "5 min" },
  { icon: Building, name: "Western Express Highway", distance: "10 min" },
];

const specifications = [
  {
    title: "Office Features",
    details: [
      "Flexible floor plans",
      "False ceiling ready",
      "Provision for AC",
      "Ample natural light",
      "Modern glass facade",
    ],
  },
  {
    title: "Building Features",
    details: [
      "High-speed elevators",
      "Central air conditioning provision",
      "Fire safety systems",
      "24/7 security with CCTV",
    ],
  },
  {
    title: "Parking",
    details: [
      "Basement parking",
      "Visitor parking available",
      "Two-wheeler parking",
    ],
  },
  {
    title: "Utilities",
    details: [
      "100% power backup",
      "High-speed internet ready",
      "Water storage facility",
      "Waste management system",
    ],
  },
];

const LalaniBusinessPark = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'gallery' | 'location'>('overview');
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax effect
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Stagger animations for cards
      gsap.utils.toArray<HTMLElement>(".gsap-card").forEach((card, i) => {
        gsap.from(card, {
          y: 40,
          duration: 0.6,
          delay: i * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        });
      });
    });

    return () => ctx.revert();
  }, [activeTab]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await trackEvent("form", "/lalani-business-park", {
        type: "project_enquiry",
        ...contactForm,
        project: "Lalani Business Park",
      });
      const text = `Hi, I am interested in Lalani Business Park.%0A%0AName: ${contactForm.name}%0APhone: ${contactForm.phone}%0AEmail: ${contactForm.email}%0AMessage: ${contactForm.message || "Please share more details"}`;
      window.open(`https://wa.me/919322642370?text=${text}`, "_blank");
      setFormSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Lalani Business Park | Premium Commercial Spaces in Khar West Mumbai"
        description="Lalani Business Park - Premium commercial office spaces in Khar West, Mumbai. Modern infrastructure, high-speed elevators, 24/7 power backup, ample parking. Ideal for businesses seeking prestigious address."
        keywords="Lalani Business Park, commercial space Khar, office space Khar West, commercial property Mumbai, office for sale Khar, Lalani Group commercial, Khar West office, business park Mumbai, commercial real estate Mumbai, RERA approved commercial"
        canonicalUrl="/lalani-business-park"
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section with Logo */}
        <section ref={heroRef} className="relative min-h-[90vh] md:min-h-screen overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <img
              src={project2}
              alt="Lalani Business Park"
              className="w-full h-full object-cover hero-bg scale-110"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            {/* Centered Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-6 md:mb-8"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-white/10 backdrop-blur-md p-3 sm:p-4 md:p-5 shadow-2xl border-2 md:border-4 border-white/20 hover:border-primary/50 transition-colors duration-500">
                <img
                  src={businessParkLogo}
                  alt="Lalani Business Park"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4">
                Premium Commercial Spaces
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 md:mb-6 px-2 leading-tight">
                Your Business Deserves a <span className="text-primary">Premium</span> Address
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed px-2 mb-8 max-w-3xl mx-auto">
                Elevate your business with modern commercial spaces in the heart of Khar West. 
                Premium infrastructure, strategic location, unmatched connectivity.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={brochurePdf}
                  download="Lalani-Business-Park-Brochure.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-gold-light text-primary-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </a>
                <a
                  href="#content"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  Explore More
                </a>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs tracking-wider uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </section>

        {/* Project Hallmarks */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Project Hallmarks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes Lalani Business Park the ideal choice for your business
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {projectHallmarks.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 md:p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group gsap-card"
                >
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base text-center text-foreground font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Project Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="gsap-card">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">About The Project</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Redefining Commercial <span className="text-primary">Excellence</span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Lalani Business Park stands as a beacon of modern commercial architecture in Khar West. 
                  This premium development offers thoughtfully designed office spaces that combine 
                  functionality with sophisticated aesthetics.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Strategically positioned in one of Mumbai's most sought-after business districts, 
                  the project provides unparalleled connectivity to major commercial hubs, 
                  transportation networks, and urban amenities.
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Building2, text: "Modern Office Spaces" },
                    { icon: MapPin, text: "Prime Khar Location" },
                    { icon: Shield, text: "24/7 Security" },
                    { icon: Zap, text: "Full Power Backup" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative gsap-card">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                  <img
                    src={business2}
                    alt="Lalani Business Park Exterior"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Space Configurations */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Flexible Options</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Space <span className="text-primary">Configurations</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from a variety of office configurations to suit your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[ 
                { 
                  title: "Compact Offices", 
                  size: "500-800 sq.ft.",
                  desc: "Perfect for startups and small teams looking for efficient workspaces",
                  features: ["Open plan layout", "Natural lighting", "AC provision"],
                  image: business1
                },
                { 
                  title: "Premium Suites", 
                  size: "1000-2000 sq.ft.",
                  desc: "Ideal for growing businesses needing professional environment",
                  features: ["Private cabins", "Conference area", "Pantry space"],
                  image: busines
                },
                { 
                  title: "Corporate Floors", 
                  size: "3000+ sq.ft.",
                  desc: "Full floors for established companies requiring custom setups",
                  features: ["Customizable layout", "Dedicated entrance", "Branding options"],
                  image: quantum1
                },
              ].map((space, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-all gsap-card"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-heading font-bold text-foreground">{space.title}</h3>
                      <span className="text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                        {space.size}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{space.desc}</p>
                    <ul className="space-y-2">
                      {space.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                      <img src={business2} alt="Modern Architecture" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img src={busines} alt="Premium Facilities" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img src={business4} alt="Business Hub" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                      <img src={business5} alt="Strategic Location" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Why Choose Us</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Built for <span className="text-primary">Success</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  With over three decades of experience in Mumbai's real estate landscape, 
                  Lalani Group delivers projects that stand the test of time. Our commitment 
                  to quality, transparency, and customer satisfaction sets us apart.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "35+ Years Legacy", desc: "Trusted builder with proven track record" },
                    { title: "RERA Compliant", desc: "Complete transparency and legal compliance" },
                    { title: "Prime Locations", desc: "Strategic sites with excellent connectivity" },
                    { title: "Quality Construction", desc: "Premium materials and modern techniques" },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">0{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                World-Class Amenities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience a workspace designed for success with premium facilities and modern infrastructure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group gsap-card"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <amenity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{amenity.title}</h3>
                    <p className="text-sm text-muted-foreground">{amenity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - Unique Layout */}
        <section id="content" className="py-16 md:py-24 bg-card overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Visual Tour</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Project <span className="text-primary">Gallery</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the premium quality and modern design
              </p>
            </div>

            {/* Unique Masonry-style Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid gsap-card"
                >
                  <div 
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                      index === 0 ? 'aspect-square' : index === 2 ? 'aspect-[4/5]' : 'aspect-[4/3]'
                    }`}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Content on hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-primary text-xs font-medium uppercase tracking-wider">Featured</span>
                      </div>
                      <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { value: "Khar West", label: "Prime Location" },
                { value: "24/7", label: "Security" },
                { value: "100%", label: "Power Backup" },
                { value: "RERA", label: "Approved" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <p className="text-xl md:text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connectivity Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Prime Location & Connectivity
              </h2>
              <p className="text-lg text-muted-foreground">
                Strategically located for easy access to major business hubs
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {connectivityItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-all"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-primary font-semibold">{item.distance}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Location
              </h2>
              <p className="text-lg text-muted-foreground">
                Khar West, Mumbai
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7539258285247!2d72.8324!3d19.0719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b5a3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sKhar%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lalani Business Park Location"
                className="w-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Specifications
              </h2>
              <p className="text-lg text-muted-foreground">
                Quality in every detail
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-background p-6 rounded-xl border border-border"
                >
                  <h3 className="text-lg font-heading font-bold text-foreground mb-4">{spec.title}</h3>
                  <ul className="space-y-2">
                    {spec.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text mb-6">
                  Enquire Now
                </h2>

                {formSent ? (
                  <div className="py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-xl font-semibold text-foreground mb-2">Thank You!</p>
                    <p className="text-muted-foreground">Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+91 "
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="I'm interested in Lalani Business Park..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105 disabled:opacity-70"
                    >
                      {formLoading ? "Sending..." : "Submit Enquiry via WhatsApp"}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Contact Us
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+919322642370"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+91 93226 42370</span>
                    </a>
                    <a
                      href="tel:+919819006101"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+91 98190 06101</span>
                    </a>
                    <a
                      href="mailto:sales@lalanigroup.in"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <span>sales@lalanigroup.in</span>
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-2">About Lalani Group</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Founded in the year 1985, The Lalani Group is one of the leading construction companies 
                    based in Mumbai. With over three decades of in-depth customer understanding and experience, 
                    The Lalani legacy boasts of homes and commercial spaces that offer unmatched quality and 
                    absolute value for money to its clients.
                  </p>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-3">MahaRERA Registration</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">RERA No:</span> P51800033063
                  </p>
                  <a
                    href="https://maharera.maharashtra.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-gold-light underline mt-3 inline-block"
                  >
                    Verify on maharera.maharashtra.gov.in
                  </a>
                </div>

                <a
                  href={brochurePdf}
                  download="Lalani-Business-Park-Brochure.pdf"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
                >
                  <Download className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground">Download Brochure</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="py-8 bg-card border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs text-muted-foreground">
              MahaRERA No: P51800033063 available on{" "}
              <a
                href="https://maharera.maharashtra.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://maharera.maharashtra.gov.in
              </a>
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Copyright © 2025 | All Rights Reserved | Lalani Group
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
      <LeadCapturePopup />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-4 p-2 text-white hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)}
            className="absolute right-4 p-2 text-white hover:text-primary transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default LalaniBusinessPark;
