import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  MapPin, Building2, Car,
  Shield, Zap, Home, CheckCircle, X, ChevronLeft, ChevronRight,
  Train, ShoppingBag, Building, Users, ArrowDown, Star, TreePine
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/tracking";

gsap.registerPlugin(ScrollTrigger);

import heritageFloorPlan from "@/assets/lalaniheritage/HP-Floor-Plan.webp";
import heritageEntrance from "@/assets/lalaniheritage/entrenceiamge.webp";
import heritageHome from "@/assets/lalaniheritage/homeimage.webp";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutBg from "@/assets/about-bg.jpg";

const galleryImages = [
  { src: heritageHome, alt: "Lalani Heritage Park Building" },
  { src: heritageEntrance, alt: "Grand Entrance" },
  { src: aboutBg, alt: "Heritage Park Interior" },
  { src: hero1, alt: "Modern Amenities" },
  { src: project1, alt: "Spacious Apartments" },
  { src: hero2, alt: "Premium Location" },
];

const projectHallmarks = [
  { icon: Home, text: "2BHK & 3BHK Residences" },
  { icon: MapPin, text: "Prime Jogeshwari West" },
  { icon: Building, text: "Near Mega Mall & Inorbit" },
  { icon: Car, text: "Covered & Open Parking" },
  { icon: Zap, text: "100% Power Backup" },
  { icon: Shield, text: "24/7 Security with CCTV" },
  { icon: TreePine, text: "Landscaped Gardens" },
  { icon: Building2, text: "Grand Clubhouse" },
  { icon: Users, text: "Multipurpose Hall" },
  { icon: Star, text: "Swimming Pool" },
  { icon: Shield, text: "Fire Safety Systems" },
  { icon: CheckCircle, text: "RERA Approved" },
];

const amenities = [
  { icon: Building2, title: "Grand Clubhouse", desc: "Indoor games & lounge" },
  { icon: Star, title: "Swimming Pool", desc: "Temperature controlled" },
  { icon: TreePine, title: "Podium Gardens", desc: "Landscaped green spaces" },
  { icon: Users, title: "Multipurpose Hall", desc: "Events & gatherings" },
  { icon: Shield, title: "24/7 Security", desc: "CCTV & video door phone" },
  { icon: Car, title: "Parking", desc: "Covered & open options" },
  { icon: Zap, title: "Power Backup", desc: "100% for common areas" },
  { icon: Building2, title: "High-Speed Lifts", desc: "Modern elevators" },
  { icon: TreePine, title: "Jogging Track", desc: "Podium level track" },
];

const connectivityItems = [
  { icon: Train, name: "Jogeshwari Station", distance: "1.3 kms" },
  { icon: ShoppingBag, name: "24Karat Multiplex", distance: "0.5 kms" },
  { icon: Building, name: "Mega Mall", distance: "1.6 kms" },
  { icon: Building, name: "Inorbit Mall", distance: "2.0 kms" },
  { icon: Building, name: "Balasaheb Thackeray Hospital", distance: "1.9 kms" },
  { icon: Train, name: "JVLR", distance: "2.0 kms" },
  { icon: ShoppingBag, name: "Link Road", distance: "2.5 kms" },
  { icon: Building, name: "Airport", distance: "7.0 kms" },
];

const LalaniHeritagePark = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      gsap.utils.toArray<HTMLElement>(".gsap-card").forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await trackEvent("form", "/lalani-heritage-park", {
        type: "project_enquiry",
        ...contactForm,
        project: "Lalani Heritage Park",
      });
      const text = `Hi, I am interested in Lalani Heritage Park.%0A%0AName: ${contactForm.name}%0APhone: ${contactForm.phone}%0AEmail: ${contactForm.email}%0AMessage: ${contactForm.message || "Please share more details"}`;
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
        title="Lalani Heritage Park | 2BHK & 3BHK Flats in Jogeshwari West Mumbai"
        description="Lalani Heritage Park - Premium 2BHK & 3BHK residences in Jogeshwari West, Mumbai. Near Mega Mall, Inorbit & Infinity Mall. MahaRERA: P51800056789. Starting ₹98 Lakhs."
        keywords="Lalani Heritage Park, flats in Jogeshwari West, 2BHK Jogeshwari, 3BHK Jogeshwari West, apartments Jogeshwari, property Jogeshwari Mumbai"
        canonicalUrl="/lalani-heritage-park"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section ref={heroRef} className="relative min-h-[90vh] md:min-h-screen overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <img src={heritageHome} alt="Lalani Heritage Park" className="w-full h-full object-cover hero-bg scale-110" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-center text-white max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4">Premium Residences in Jogeshwari West</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 md:mb-6 px-2 leading-tight">Where Heritage Meets <span className="text-primary">Modern Living</span></h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed px-2 mb-8 max-w-3xl mx-auto">Spacious 2BHK & 3BHK apartments in the heart of Jogeshwari West. A fine blend of affordable luxury, convenience, and security.</p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 mb-8">
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /><span>Jogeshwari (W)</span></div>
                <div className="flex items-center gap-2"><Home className="w-5 h-5 text-primary" /><span>2BHK & 3BHK</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span>Starting ₹98 Lakhs</span></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <EnquireButton />
                <a href="#content" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all">Explore More</a>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-wider uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowDown className="w-5 h-5 text-primary" /></motion.div>
          </motion.div>
        </section>

        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">Project Hallmarks</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover what makes Lalani Heritage Park the perfect home for your family</p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {projectHallmarks.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex flex-col items-center p-4 md:p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group gsap-card">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base text-center text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background" id="content">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">About The Project</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">A Perfect Blend of <span className="text-primary">Comfort & Convenience</span></h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">Heritage Park is strategically located just off S.V. Road to ensure comfort, convenience and connectivity. Vibrant retail, fashion, dining, cultural destinations cater to everyday conveniences.</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">At Heritage Park, you have every necessity and indulgence just a few steps away. The bustling Mega Mall, Inorbit, Infinity and Hypercity are in vicinity.</p>
                <div className="grid grid-cols-2 gap-4">
                  {[{ icon: Home, text: "Spacious Apartments" }, { icon: MapPin, text: "Off S.V. Road" }, { icon: Shield, text: "24/7 Security" }, { icon: Zap, text: "Power Backup" }].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                  <img src={heritageEntrance} alt="Heritage Park Entrance" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-xl border border-border shadow-xl">
                  <p className="text-primary font-bold text-xl">P51800056789</p>
                  <p className="text-xs text-muted-foreground">MahaRERA Registration</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Spacious Homes</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">Apartment <span className="text-primary">Configurations</span></h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[{ title: "1 BHK", size: "274-279 sq.ft (Carpet)", price: "₹65 Lakhs onwards", features: ["Efficient layout", "Natural lighting"] }, { title: "2 BHK", size: "500-600 sq.ft", price: "₹98 Lakhs onwards", features: ["Spacious living", "Master bedroom"] }, { title: "3 BHK", size: "800-950 sq.ft", price: "₹1.35 Cr onwards", features: ["Premium finishes", "Multiple balconies"] }].map((space, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-background rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-all gsap-card">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={galleryImages[index]?.src || project1} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{space.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{space.size}</p>
                    <p className="text-primary font-semibold mb-4">{space.price}</p>
                    <ul className="space-y-2">
                      {space.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />{feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Floor Plans</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">Thoughtfully Designed <span className="text-primary">Layouts</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-border bg-card p-4">
                <img src={heritageFloorPlan} alt="Heritage Park Floor Plan" className="w-full h-auto rounded-lg" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">World-Class Amenities</h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {amenities.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex flex-col items-center p-4 md:p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group text-center gsap-card">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base font-medium text-foreground mb-1">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">Strategic Location</h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {connectivityItems.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all gsap-card">
                  <item.icon className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.distance}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">Schedule a Site Visit</h2>
              </motion.div>
              <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="bg-background p-6 md:p-8 rounded-2xl border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                    <input type="tel" required value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your phone number" />
                  </div>
                </div>
                <button type="submit" disabled={formLoading} className="mt-6 w-full px-8 py-4 bg-gradient-to-r from-primary to-gold-light text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-50">
                  {formLoading ? "Sending..." : formSent ? "Sent Successfully!" : "Send Enquiry via WhatsApp"}
                </button>
              </motion.form>
            </div>
          </div>
        </section>

        <AnimatePresence>
          {lightboxOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
              <button className="absolute top-4 right-4 text-white hover:text-primary transition-colors" onClick={() => setLightboxOpen(false)}><X className="w-8 h-8" /></button>
              <motion.img key={lightboxIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} className="max-w-[90vw] max-h-[85vh] object-contain" />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <LeadCapturePopup />
    </>
  );
};

export default LalaniHeritagePark;
