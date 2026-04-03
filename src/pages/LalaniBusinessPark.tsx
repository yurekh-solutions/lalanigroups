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
import businesspark from "@/assets/lalanibusinespark/businesspark.png";
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
import floorplan1 from "@/assets/lalanibusinespark/floorplan1.png";
import floorplan2 from "@/assets/lalanibusinespark/floorplan2.png";
import floorplan3 from "@/assets/lalanibusinespark/floorplan3.png";

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

const floorPlanConfigs = [
  {
    type: "Retail / Shop Units",
    size: "425 sq.ft",
    price: "Price on Request",
    image: floorplan1,
    label: "Ground Floor – Shop Layout",
    features: ["4 Shop Units (SHOP-1 to SHOP-4)", "Kitchen Provision", "Entrance Lobby", "Basement Parking Access"],
  },
  {
    type: "Standard Office",
    size: "586 – 602 sq.ft",
    price: "Price on Request",
    image: floorplan2,
    label: "Mid Floors – Dual Office Layout",
    features: ["Office 01: R.C.A. = 586 sq.ft", "Office 02: R.C.A. = 602 sq.ft", "Part Terrace Open to Sky", "2 Lifts + Lift Lobby"],
  },
  {
    type: "Premium Suite",
    size: "1,431 sq.ft",
    price: "Price on Request",
    image: floorplan3,
    label: "Top Floors – Large Office Layout",
    features: ["Single Large Office Unit", "R.C.A. = 1,431.07 sq.ft", "Dedicated Toilet", "Chajja / Open Area"],
  },
];

const faqData = [
  {
    q: "What is the RERA number for Lalani Business Park?",
    a: "Lalani Business Park is registered under MahaRERA with registration number P51800033063. You can verify it at maharera.maharashtra.gov.in.",
  },
  {
    q: "What are the available office sizes at Lalani Business Park?",
    a: "Lalani Business Park offers flexible commercial spaces ranging from 425 sq.ft to 1,654 sq.ft, catering to startups, SMEs, and large enterprises.",
  },
  {
    q: "Where is Lalani Business Park located?",
    a: "Lalani Business Park is located in Khar West, Mumbai – one of the most premium and well-connected business locations, situated at 34th Road, Khar West, Mumbai – 400052.",
  },
  {
    q: "What is the possession status of Lalani Business Park?",
    a: "Lalani Business Park was launched in February 2022 with scheduled possession from March 2024. Please contact our sales team for the latest updates.",
  },
  {
    q: "What amenities are available at Lalani Business Park?",
    a: "The project offers 24/7 security with CCTV, high-speed elevators, 100% power backup, basement parking, conference rooms, cafeteria, high-speed internet provision, and complete fire safety systems.",
  },
  {
    q: "Is Lalani Business Park RERA approved?",
    a: "Yes, Lalani Business Park is RERA registered under MahaRERA with number P51800033063. The project ensures complete transparency and compliance with real estate regulations.",
  },
  {
    q: "How can I download the brochure for Lalani Business Park?",
    a: "You can download the brochure by clicking the 'Download Brochure' button on this page. Simply fill in your details and the brochure will be sent to you.",
  },
  {
    q: "What is the total number of units in Lalani Business Park?",
    a: "Lalani Business Park has a total of 34 commercial units across its development, offering diverse office configurations to suit different business needs.",
  },
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
  const [brochurePopupOpen, setBrochurePopupOpen] = useState(false);
  const [brochureForm, setBrochureForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [brochureFormLoading, setBrochureFormLoading] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  
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

  const handleBrochureDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setBrochureFormLoading(true);
    try {
      await trackEvent("form", "/lalani-business-park", {
        type: "brochure_download",
        name: brochureForm.name,
        email: brochureForm.email,
        phone: brochureForm.phone,
        project: "Lalani Business Park",
      });
      
      setBrochurePopupOpen(false);
      
      const link = document.createElement('a');
      link.href = brochurePdf;
      link.download = "Lalani-Business-Park-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      const whatsappText = `Hi, I downloaded the Lalani Business Park Brochure.%0A%0A*My Details:*%0AName: ${brochureForm.name}%0AEmail: ${brochureForm.email}%0APhone: ${brochureForm.phone}%0A%0APlease share more details about the project.`;
      window.open(`https://wa.me/919322642370?text=${whatsappText}`, "_blank");
      
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
              src={businesspark}
              alt="Lalani Business Park"
              className="w-full h-full object-cover hero-bg scale-110"
              loading="eager"
            />
          </div>
         
        </section>

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
                  onClick={() => setBrochurePopupOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-gold-light text-primary-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 cursor-pointer"
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
         
        {/* Project Hallmarks */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={busines}
              alt="Project Hallmarks Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="flex flex-col items-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-primary/50 transition-all group gsap-card"
                >
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base text-center text-white font-medium">
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
                    src={businesspark}
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
  Lalani Business Park, Khar West, Mumbai, Maharashtra 400052

              </p>
            </motion.div>

          <motion.div
  initial={{ opacity: 1, y: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="w-full rounded-2xl overflow-hidden border border-border shadow-lg"
>
  <iframe
    src="https://www.google.com/maps?q=Lalani+Business+Park,+Khar+West,+Mumbai,+Maharashtra+400052&output=embed"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Lalani Business Park - Khar West, Mumbai 400052"
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
                  onClick={() => setBrochurePopupOpen(true)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <Download className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground">Download Brochure</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Space Configurations / Pricing Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Space Configurations</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3">Floor Plans & Pricing</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto mb-4 rounded-full" />
              <p className="text-muted-foreground">Flexible spaces from 425 – 1,654 sq.ft · Avg. ₹38.1K/sq.ft</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {floorPlanConfigs.map((config, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all group"
                >
                  {/* Floor Plan Image */}
                  <div className="relative h-[220px] sm:h-[240px] bg-white overflow-hidden cursor-pointer"
                    onClick={() => { setLightboxIndex(i); setLightboxOpen(false); window.open(config.image, '_blank'); }}>
                    <img
                      src={config.image}
                      alt={`${config.type} Floor Plan`}
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all">
                      <span className="opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                        View Full Plan
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                      {config.type}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs text-muted-foreground">{config.label}</p>
                        <p className="text-xl font-bold text-foreground mt-0.5">{config.size}</p>
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">{config.price}</span>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {config.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => setBrochurePopupOpen(true)}
                      className="w-full py-2.5 rounded-xl border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                      Enquire Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RERA Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Transparency & Trust</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">RERA Registration</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto rounded-full" />
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-background border border-border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg">
                {/* QR Code */}
                <div className="flex-shrink-0 text-center">
                  <div className="bg-white p-4 rounded-xl border border-border shadow-md inline-block">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maharera.maharashtra.gov.in/`}
                      alt="RERA QR Code - Lalani Business Park"
                      className="w-36 h-36"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Scan to verify</p>
                </div>
                {/* Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg font-bold text-foreground">MahaRERA Registered</span>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl px-5 py-4 mb-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">RERA Number</p>
                    <p className="text-2xl font-bold text-primary tracking-widest">P51800033063</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Lalani Business Park is registered under the Maharashtra Real Estate Regulatory Authority (MahaRERA), ensuring complete transparency and accountability in its development.
                  </p>
                  <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-gold-light text-primary-foreground rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all">
                    <Shield className="w-4 h-4" />
                    Verify on maharera.maharashtra.gov.in
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Got Questions?</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto rounded-full" />
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqData.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-foreground text-sm sm:text-base">{faq.q}</span>
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full border border-primary/30 flex items-center justify-center text-primary transition-transform duration-300 ${faqOpen === i ? 'rotate-180 bg-primary text-primary-foreground' : ''}`}>
                      <ArrowDown className="w-4 h-4" />
                    </span>
                  </button>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-border">
                        <p className="px-5 py-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="py-8 bg-card border-t border-border">          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

      {/* Brochure Download Popup */}
      <AnimatePresence>
        {brochurePopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setBrochurePopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Download Brochure</h3>
                <button
                  onClick={() => setBrochurePopupOpen(false)}
                  className="p-1 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                Get detailed information about Lalani Business Park. Fill in your details to download the brochure.
              </p>

              <form onSubmit={handleBrochureDownload} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={brochureForm.name}
                    onChange={(e) => setBrochureForm({ ...brochureForm, name: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={brochureForm.email}
                    onChange={(e) => setBrochureForm({ ...brochureForm, email: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={brochureForm.phone}
                    onChange={(e) => setBrochureForm({ ...brochureForm, phone: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-foreground"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <button
                  type="submit"
                  disabled={brochureFormLoading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-gold-light text-primary-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {brochureFormLoading ? "Processing..." : "Download Brochure"}
                </button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We'll also send you updates via WhatsApp
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LalaniBusinessPark;
