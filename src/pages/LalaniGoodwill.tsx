import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Phone, Mail, Download, Building2, Car, Trees, 
  Dumbbell, Shield, Droplets, Zap, Home, CheckCircle, 
  ChevronLeft, ChevronRight, ChevronDown, X, User, FileText,
  Train, Plane, ShoppingBag, GraduationCap, Building
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/tracking";

// Import images
import goodwillLogo from "@/assets/lalanigoodwill/image.png";
import mainElevation from "@/assets/lalanigoodwill/1 Main Elevation.jpg";
import carsoule1 from "@/assets/lalanigoodwill/carsoule1.webp";
import carsoule2 from "@/assets/lalanigoodwill/carsoule2.webp";
import carsoule3 from "@/assets/lalanigoodwill/carsoule3.webp";
import carsoule4 from "@/assets/lalanigoodwill/carsoule4.webp";
import lalaniimg from "@/assets/lalanigoodwill/lalaniimg.webp";
import image1 from "@/assets/lalanigoodwill/image7.png";
import image2 from "@/assets/lalanigoodwill/image2.png";
import image3 from "@/assets/lalanigoodwill/image3.png";
import image4 from "@/assets/lalanigoodwill/image4.png";
import image5 from "@/assets/lalanigoodwill/image5.png";
import image6 from "@/assets/lalanigoodwill/image6.png";
import image8 from "@/assets/lalanigoodwill/image8.png";
import image9 from "@/assets/lalanigoodwill/image9.png";
import wingFloorAB from "@/assets/lalanigoodwill/wingfloorab.png";
import wingFloorC from "@/assets/lalanigoodwill/wingfloorc.png";
import brochurePdf from "@/assets/lalanigoodwill/lalani-goodwill-ebrochure.pdf";

const projectHallmarks = [
  { icon: Building2, text: "13-Storey Residential Tower" },
  { icon: Home, text: "1, 2 & 3 BHK Thoughtfully Designed Homes" },
  { icon: Building2, text: "Jodi Options Available" },
  { icon: Car, text: "Triple-stack Automated Parking System" },
  { icon: Car, text: "Tower Car Parking System" },
  { icon: MapPin, text: "Prime Location in Andheri - East" },
  { icon: Dumbbell, text: "Modern Lifestyle Amenities" },
  { icon: Home, text: "Vastu-compliant Residences" },
  { icon: Building2, text: "Grand Entrance Lobby" },
  { icon: Home, text: "Modular Kitchen" },
  { icon: Building2, text: "Jain Temple in The Vicinity" },
  { icon: Shield, text: "RERA Approved Project" },
];

const amenities = [
  { icon: Dumbbell, title: "State-of-the-art Gym", desc: "Modern fitness center with latest equipment" },
  { icon: Trees, title: "Landscaped Garden", desc: "Lush green spaces for relaxation" },
  { icon: Building2, title: "Jain Temple Nearby", desc: "Peaceful spiritual space in the vicinity" },
  { icon: Home, title: "Vastu-compliant", desc: "Homes designed as per Vastu principles" },
  { icon: Building2, title: "Grand Entrance Lobby", desc: "Impressive welcome experience" },
  { icon: Car, title: "Triple-stack Parking", desc: "Automated parking for convenience" },
  { icon: Shield, title: "24/7 Security", desc: "Round-the-clock surveillance" },
  { icon: Zap, title: "Power Backup", desc: "Uninterrupted power supply" },
  { icon: Droplets, title: "Rainwater Harvesting", desc: "Sustainable water management" },
];

const connectivityItems = [
  { icon: Train, name: "J.B. Nagar Metro Station", distance: "5 min walk" },
  { icon: Train, name: "Andheri Railway Station", distance: "10 min" },
  { icon: ShoppingBag, name: "Phoenix Market City", distance: "8 min" },
  { icon: Plane, name: "International Airport", distance: "15 min" },
  { icon: Building, name: "Western Express Highway", distance: "5 min" },
  { icon: GraduationCap, name: "Reputed Schools", distance: "5-10 min" },
  { icon: Building, name: "Hospitals & Healthcare", distance: "5 min" },
  { icon: ShoppingBag, name: "Oberoi Mall", distance: "10 min" },
];

const specifications = [
  {
    title: "Structure",
    details: [
      "RCC framed earthquake-resistant structure",
      "External walls: 6\" thick AAC blocks",
      "Internal walls: 4\" thick AAC blocks",
    ],
  },
  {
    title: "Flooring",
    details: [
      "Living/Dining: 2'x2' vitrified tiles",
      "Bedrooms: 2'x2' vitrified tiles",
      "Kitchen: Anti-skid ceramic tiles",
      "Bathrooms: Anti-skid ceramic tiles",
    ],
  },
  {
    title: "Kitchen",
    details: [
      "Granite platform with stainless steel sink",
      "Ceramic wall tiles up to 2 feet above platform",
      "Provision for water purifier & exhaust",
      "Modular kitchen ready",
    ],
  },
  {
    title: "Bathrooms",
    details: [
      "Premium quality ceramic tiles",
      "Designer sanitary fittings",
      "Hot & cold water mixer",
      "Provision for geyser",
    ],
  },
  {
    title: "Doors & Windows",
    details: [
      "Main door: Designer laminated door",
      "Internal doors: Flush doors",
      "Windows: Powder coated aluminum",
      "Premium quality hardware",
    ],
  },
  {
    title: "Electrical",
    details: [
      "Concealed copper wiring",
      "Modular switches & sockets",
      "Power backup for common areas",
      "EV charging provision",
    ],
  },
];

const galleryImages = [
  { src: mainElevation, alt: "Main Elevation" },
  { src: image1, alt: "Lalani Goodwill View 1" },
  { src: image2, alt: "Lalani Goodwill View 2" },
  { src: image3, alt: "Lalani Goodwill View 3" },
  { src: image4, alt: "Lalani Goodwill View 4" },
  { src: image5, alt: "Lalani Goodwill View 5" },
  { src: image6, alt: "Lalani Goodwill View 6" },
  { src: image8, alt: "Lalani Goodwill View 8" },
 
];

const floorPlans = [
  { src: wingFloorAB, title: "Wing A & B - 3 BHK", area: "92.43 Sq.Mt / 995.00 Sq.Ft" },
  { src: wingFloorC, title: "Wing C - 1 BHK", area: "44.12 Sq.Mt / 475.00 Sq.Ft" },
  { src: wingFloorC, title: "Wing C - 2 BHK", area: "73.08 Sq.Mt / 787.00 Sq.Ft" },
  { src: wingFloorC, title: "Wing C - 2 BHK", area: "68.80 Sq.Mt / 741.00 Sq.Ft" },
];

const LalaniGoodwill = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('construction');
  const [constructionIndex, setConstructionIndex] = useState(0);
  const constructionImages = [carsoule1, carsoule2, carsoule3, carsoule4];
  const [floorPlanIndex, setFloorPlanIndex] = useState(0);
  const [floorLightboxOpen, setFloorLightboxOpen] = useState(false);
  const [floorLightboxIndex, setFloorLightboxIndex] = useState(0);
  const [constructionLightboxOpen, setConstructionLightboxOpen] = useState(false);
  const [constructionLightboxIndex, setConstructionLightboxIndex] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    if (activeTab !== 'construction') return;
    const timer = setInterval(() => {
      setConstructionIndex((prev) => (prev + 1) % constructionImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeTab, constructionImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFloorPlanIndex((prev) => (prev + 1) % floorPlans.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [floorPlans.length]);
  const [brochurePopupOpen, setBrochurePopupOpen] = useState(false);
  const [brochureForm, setBrochureForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [brochureFormLoading, setBrochureFormLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await trackEvent("form", "/lalani-goodwill", {
        type: "project_enquiry",
        ...contactForm,
        project: "Lalani Goodwill",
      });
      const text = `Hi, I am interested in Lalani Goodwill.%0A%0AName: ${contactForm.name}%0APhone: ${contactForm.phone}%0AEmail: ${contactForm.email}%0AMessage: ${contactForm.message || "Please share more details"}`;
      window.open(`https://wa.me/919322642370?text=${text}`, "_blank");
      setFormSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setFormLoading(false);
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Brochure download handler with lead capture
  const handleBrochureDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setBrochureFormLoading(true);
    try {
      // Track the lead in Firebase
      await trackEvent("form", "/lalani-goodwill", {
        type: "brochure_download",
        name: brochureForm.name,
        email: brochureForm.email,
        phone: brochureForm.phone,
        project: "Lalani Goodwill",
      });
      
      // Close popup
      setBrochurePopupOpen(false);
      
      // Trigger download
      const link = document.createElement('a');
      link.href = brochurePdf;
      link.download = "Lalani-Goodwill-E-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Send details to WhatsApp
      const whatsappText = `Hi, I downloaded the Lalani Goodwill E-Brochure.%0A%0A*My Details:*%0AName: ${brochureForm.name}%0AEmail: ${brochureForm.email}%0APhone: ${brochureForm.phone}%0A%0APlease share more details about the project.`;
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

  return (
    <>
      <SEO
        title="Lalani Goodwill | 1, 2 & 3 BHK Residences in Andheri East Mumbai"
        description="Lalani Goodwill - Premium 1, 2 & 3 BHK homes in J.B. Nagar, Andheri East. 13-storey residential tower with Jodi options, automated parking, Vastu-compliant. MahaRERA: P51800079065 & P51800078852."
        keywords="Lalani Goodwill, Andheri East flats, 1 BHK Andheri, 2 BHK Andheri, 3 BHK Andheri, J.B. Nagar property, Lalani Group"
        canonicalUrl="/lalani-goodwill"
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section with Logo */}
        <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <img
              src={mainElevation}
              alt="Lalani Goodwill"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20" /> */}
          </div>

          
        </section>
<section className="py-12 md:py-16 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Logo */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center mb-6"
    >
      <div className="px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-gradient-to-br from-red-900/30 via-yellow-500/20 to-white/10 backdrop-blur-xl shadow-xl border border-white/20">
        
        <img
          src={goodwillLogo}
          alt="Lalani Goodwill"
          className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
        />

      </div>
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center text-white max-w-3xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
        The Good Life Begins Here
      </h1>

      <p className="text-base md:text-lg text-muted-foreground">
        A good life is one where everything falls into place—your comfort, your time, your happiness. 
        At LALANI GOODWILL, we've created homes that do just that. With 1, 2, 3 Bed & Jodi Residences 
        in Andheri's most prominent neighborhood, experience a life that is as thoughtful as it is effortless.
      </p>
    </motion.div>

  </div>
</section>

        {/* Project Hallmarks with Cover Background */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={lalaniimg}
              alt="Lalani Goodwill Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Project Hallmarks
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Discover the distinctive features that make Lalani Goodwill your perfect home
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {projectHallmarks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-primary/50 transition-all group"
                >
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base text-center text-white font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Tour & Construction Update - Combined Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-3">
                Steady Progress, Strong Foundations!
              </h2>
            </motion.div>

            {/* Tabs */}
            <div className="flex justify-center gap-0 mb-8">
              <button
                onClick={() => setActiveTab('construction')}
                className={`px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium transition-all ${
                  activeTab === 'construction'
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Construction Update
              </button>
              <button
                onClick={() => setActiveTab('digitour')}
                className={`px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium transition-all ${
                  activeTab === 'digitour'
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Digitour
              </button>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                {activeTab === 'construction' ? (
                  <motion.div
                    key="construction"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Construction - Mobile: Auto-slide (NO ARROWS) / Desktop: Grid */}
                    {/* Mobile carousel */}
                    <div className="block sm:hidden rounded-xl overflow-hidden">
                      <motion.div className="flex" animate={{ x: `-${constructionIndex * 100}%` }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
                        {constructionImages.map((img, i) => (
                          <div key={i} className="flex-shrink-0 w-full h-[250px] cursor-pointer relative group" onClick={() => { setConstructionLightboxIndex(i); setConstructionLightboxOpen(true); }}>
                            <img src={img} alt={`Construction ${i + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all">
                              <span className="opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                                View
                              </span>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                    <div className="flex sm:hidden justify-center gap-2 mt-3">
                      {constructionImages.map((_, i) => (
                        <button key={i} onClick={() => setConstructionIndex(i)} className={`h-2 rounded-full transition-all ${i === constructionIndex ? 'bg-primary w-6' : 'bg-border w-2'}`} />
                      ))}
                    </div>

                    {/* Desktop: 4-column grid */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {constructionImages.map((img, i) => (
                        <div key={i} className="group cursor-pointer rounded-xl overflow-hidden relative" style={{ height: '250px' }} onClick={() => { setConstructionLightboxIndex(i); setConstructionLightboxOpen(true); }}>
                          <img src={img} alt={`Construction ${i + 1}`} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all">
                            <span className="opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                              View
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="digitour"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-4xl mx-auto text-center"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-card group">
                      <img
                        src={mainElevation}
                        alt="Lalani Goodwill Digitour"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Overlay with CTA */}
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4">
                        <div className="text-white text-center px-4">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">Virtual Tour</h3>
                          <p className="text-white/80 text-sm md:text-base mb-6">Experience Lalani Goodwill in 360° immersive view</p>
                          <a
                            href="https://digitour.housing.com/digiport/Lalani_Group"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-gold-light text-black font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-xl"
                          >
                            <span>Launch Digitour</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">*Subject to BMC Approval. Click to explore the virtual tour.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Elevated Living, Exceptional Amenities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience modern living with a suite of thoughtfully designed amenities. From a state-of-the-art gym 
                to a lush landscaped garden and a peaceful Jain Temple in the Vicinity, every corner is crafted for 
                a unique experience.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <amenity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{amenity.title}</h3>
                    <p className="text-sm text-muted-foreground">{amenity.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore the beauty of Lalani Goodwill through our gallery. Every corner is designed to perfection, 
                offering you a glimpse of your future dream home with modern interiors and premium finishes.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="aspect-square overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Floor Plans Section - Static Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Floor Plans</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3">
                Where Functionality Meets Elegance
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto mb-4 rounded-full" />
              <p className="text-sm text-muted-foreground">*Subject to BMC Approval</p>
            </motion.div>

            {/* Static Grid - All floor plans visible */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {floorPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all"
                  onClick={() => { setFloorLightboxIndex(index); setFloorLightboxOpen(true); }}
                >
                  <div className="h-[160px] sm:h-[180px] md:h-[200px] overflow-hidden bg-background relative">
                    <img src={plan.src} alt={plan.title} className="w-full h-full object-contain p-2 sm:p-3" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all">
                      <span className="opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                        View
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 text-center border-t border-border">
                    <p className="font-semibold text-foreground text-xs sm:text-sm">{plan.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{plan.area}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section with Map */}
       

        {/* Construction Lightbox */}
        <AnimatePresence>
          {constructionLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setConstructionLightboxOpen(false)}
            >
              <button onClick={() => setConstructionLightboxOpen(false)} className="absolute top-4 right-4 p-2 text-white hover:text-primary z-10">
                <X className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setConstructionLightboxIndex((prev) => (prev - 1 + constructionImages.length) % constructionImages.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-primary z-10 bg-white/10 rounded-full"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <motion.img
                key={constructionLightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={constructionImages[constructionLightboxIndex]}
                alt={`Construction Update ${constructionLightboxIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl mx-12"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={(e) => { e.stopPropagation(); setConstructionLightboxIndex((prev) => (prev + 1) % constructionImages.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-primary z-10 bg-white/10 rounded-full"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floor Plan Lightbox */}
        <AnimatePresence>
          {floorLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setFloorLightboxOpen(false)}
            >
              <button
                onClick={() => setFloorLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); setFloorLightboxIndex((prev) => (prev - 1 + floorPlans.length) % floorPlans.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-primary transition-colors z-10 bg-white/10 rounded-full"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <motion.div
                key={floorLightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="max-w-3xl w-full mx-12"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={floorPlans[floorLightboxIndex].src}
                  alt={floorPlans[floorLightboxIndex].title}
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
                <div className="text-center mt-4">
                  <p className="text-white font-bold text-lg">{floorPlans[floorLightboxIndex].title}</p>
                  <p className="text-white/60 text-sm">{floorPlans[floorLightboxIndex].area}</p>
                </div>
              </motion.div>

              <button
                onClick={(e) => { e.stopPropagation(); setFloorLightboxIndex((prev) => (prev + 1) % floorPlans.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-primary transition-colors z-10 bg-white/10 rounded-full"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connectivity Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Connectivity
              </h2>
              <p className="text-lg text-muted-foreground">
                Perfectly connected to everything that matters
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {connectivityItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
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

        {/* Location & Map Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Location
              </h2>
              <p className="text-lg text-muted-foreground">
                J.B. Nagar, Andheri East, Mumbai
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Address Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Project Address
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lalani Goodwill,<br />
                    Opp. Janakalyan Bank,<br />
                    J.B. Nagar, Andheri East,<br />
                    Mumbai - 400059,<br />
                    Maharashtra, India
                  </p>
                  <a
                    href="https://www.google.com/maps?q=Goodwill+CHS+Opp+Janakalyan+Bank+JB+Nagar+Andheri+East+Mumbai&z=19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm font-medium transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>

                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Landmarks Nearby</h3>
                  <ul className="space-y-3">
                    {connectivityItems.slice(0, 5).map((item, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm text-foreground">{item.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{item.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full rounded-2xl overflow-hidden border border-border shadow-lg h-[450px]"
              >
                <iframe
                  src="https://www.google.com/maps?q=Goodwill+CHS+Opp+Janakalyan+Bank+JB+Nagar+Andheri+East+Mumbai&z=18&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lalani Goodwill Location"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
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

        {/* About Project Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">About The Project</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Redefining Urban Living in <span className="text-primary">Andheri East</span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Lalani Goodwill stands as a testament to thoughtful architecture and modern living. 
                  This 13-storey residential tower offers meticulously designed 1, 2, and 3 BHK homes 
                  that cater to the discerning urban dweller seeking comfort, convenience, and class.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Located in the heart of Andheri East, one of Mumbai's most vibrant neighborhoods, 
                  the project offers unparalleled connectivity to business hubs, entertainment centers, 
                  educational institutions, and healthcare facilities. The triple-stack automated parking 
                  system ensures that your vehicle is always secure and easily accessible.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-xl border border-border">
                    <p className="text-2xl font-bold text-primary">13</p>
                    <p className="text-sm text-muted-foreground">Storeys</p>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-border">
                    <p className="text-2xl font-bold text-primary">1, 2 & 3</p>
                    <p className="text-sm text-muted-foreground">BHK Options</p>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-border">
                    <p className="text-2xl font-bold text-primary">Jodi</p>
                    <p className="text-sm text-muted-foreground">Configurations</p>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-border">
                    <p className="text-2xl font-bold text-primary">RERA</p>
                    <p className="text-sm text-muted-foreground">Approved</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                  <img
                    src={mainElevation}
                    alt="Lalani Goodwill Main Elevation"
                    className="w-full h-full object-cover"
                  />
                </div>
              
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Lifestyle</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Experience The Good Life
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every aspect of Lalani Goodwill has been designed to enhance your daily living experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Thoughtful Design</h3>
                <p className="text-muted-foreground text-sm">
                  Homes designed with attention to every detail, ensuring optimal space utilization and natural light
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Prime Location</h3>
                <p className="text-muted-foreground text-sm">
                  Strategically located with easy access to metro, railway, highway, and airport
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Secure Living</h3>
                <p className="text-muted-foreground text-sm">
                  24/7 security surveillance and automated parking for complete peace of mind
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
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
                        placeholder="I'm interested in Lalani Goodwill..."
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
                initial={{ opacity: 0, x: 20 }}
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
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Building 1:</span> P51800079065
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Building 2:</span> P51800078852
                    </p>
                  </div>
                  <a
                    href="https://maharera.maharashtra.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-gold-light underline mt-3 inline-block"
                  >
                    Verify on maharera.maharashtra.gov.in
                  </a>
                </div>

                <button
                  onClick={() => setBrochurePopupOpen(true)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#c9a962] hover:bg-[#d4b876] text-black font-bold rounded-xl transition-all group"
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Download E-Brochure</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="py-8 bg-card border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs text-muted-foreground">
              MahaRERA No. For Bldg 1: P51800079065, For Bldg 2: P51800078852 available on{" "}
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
              Copyright © 2025 | All Rights Reserved | Design by GOD
            </p>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + galleryImages.length + 2) % (galleryImages.length + 2))}
            className="absolute left-4 p-2 text-white hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <img
            src={
              lightboxIndex < galleryImages.length
                ? galleryImages[lightboxIndex].src
                : lightboxIndex === galleryImages.length
                ? wingFloorAB
                : wingFloorC
            }
            alt={
              lightboxIndex < galleryImages.length
                ? galleryImages[lightboxIndex].alt
                : lightboxIndex === galleryImages.length
                ? "Wing A & B Floor Plan"
                : "Wing C Floor Plan"
            }
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % (galleryImages.length + 2))}
            className="absolute right-4 p-2 text-white hover:text-primary transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <EnquireButton />
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
    </>
  );
};

export default LalaniGoodwill;



