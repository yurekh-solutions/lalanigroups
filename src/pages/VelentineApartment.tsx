import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Building2, Car, Shield, Zap, Home, CheckCircle, Train, ShoppingBag, Building, Users, ArrowDown, Star, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/tracking";

gsap.registerPlugin(ScrollTrigger);

import project3 from "@/assets/project-3.jpg";
import hero2 from "@/assets/hero-2.jpg";
import project1 from "@/assets/project-1.jpg";
import hero1 from "@/assets/hero-1.jpg";
import aboutBg from "@/assets/about-bg.jpg";

const galleryImages = [
  { src: project3, alt: "Velentine Apartment" },
  { src: hero2, alt: "Ready Homes" },
  { src: aboutBg, alt: "Interiors" },
  { src: hero1, alt: "Amenities" },
  { src: project1, alt: "Living" },
];

const projectHallmarks = [
  { icon: CheckCircle, text: "Ready Possession" },
  { icon: CheckCircle, text: "OC Received" },
  { icon: Home, text: "1BHK & 2BHK" },
  { icon: MapPin, text: "Malad East" },
  { icon: Train, text: "Near Malad Station" },
  { icon: ShoppingBag, text: "Near Inorbit Mall" },
  { icon: Car, text: "Covered Parking" },
  { icon: Shield, text: "24/7 Security" },
  { icon: Zap, text: "Power Backup" },
  { icon: Building2, text: "High-Speed Lifts" },
  { icon: Users, text: "Play Area" },
  { icon: Star, text: "Ready to Move" },
];

const amenities = [
  { icon: Shield, title: "24/7 Security", desc: "Guard & CCTV" },
  { icon: Car, title: "Covered Parking", desc: "Reserved spaces" },
  { icon: Zap, title: "Power Backup", desc: "100% backup" },
  { icon: Building2, title: "High-Speed Lifts", desc: "Modern elevators" },
  { icon: Users, title: "Play Area", desc: "Children's zone" },
  { icon: Star, title: "Gardens", desc: "Landscaped" },
];

const connectivityItems = [
  { icon: Train, name: "Malad Station", distance: "10 min" },
  { icon: ShoppingBag, name: "Inorbit Mall", distance: "12 min" },
  { icon: Building, name: "Mindspace IT", distance: "15 min" },
  { icon: Building, name: "Link Road", distance: "5 min" },
  { icon: Train, name: "WE Highway", distance: "8 min" },
  { icon: Building, name: "Airport", distance: "20 min" },
];

const VelentineApartment = () => {
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [formLoading, setFormLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-bg", { yPercent: 30, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true } });
      gsap.utils.toArray<HTMLElement>(".gsap-card").forEach((card, i) => {
        gsap.from(card, { y: 60, opacity: 0, duration: 0.8, delay: i * 0.1, scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" } });
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await trackEvent("form", "/velentine-apartment", { type: "project_enquiry", ...contactForm, project: "Velentine Apartment" });
      const text = `Hi, I am interested in Velentine Apartment.%0A%0AName: ${contactForm.name}%0APhone: ${contactForm.phone}%0AEmail: ${contactForm.email}%0AMessage: ${contactForm.message || "Please share details"}`;
      window.open(`https://wa.me/919322642370?text=${text}`, "_blank");
      setFormSent(true);
    } catch (err) { console.error(err); } finally { setFormLoading(false); }
  };

  return (
    <>
      <SEO title="Velentine Apartment | Ready to Move 1BHK & 2BHK in Malad East" description="Velentine Apartment - Ready possession 1BHK & 2BHK in Malad East. OC Received. MahaRERA: P51800028866. Starting ₹75 Lakhs." keywords="Velentine Apartment, ready flats Malad, 1BHK Malad East" canonicalUrl="/velentine-apartment" />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section ref={heroRef} className="relative min-h-[90vh] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <img src={project3} alt="Velentine Apartment" className="w-full h-full object-cover hero-bg scale-110" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-center text-white max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4"><CheckCircle className="w-4 h-4" />Ready Possession - OC Received</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 px-2">Your New Home is <span className="text-primary">Ready</span></h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">Immediate move-in ready 1BHK & 2BHK apartments in Malad East. OC received, premium construction.</p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 mb-8">
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /><span>Malad (E)</span></div>
                <div className="flex items-center gap-2"><Home className="w-5 h-5 text-primary" /><span>1BHK & 2BHK</span></div>
                <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span>Immediate Possession</span></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <EnquireButton />
                <a href="#content" className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all">Explore More</a>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-wider uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowDown className="w-5 h-5 text-primary" /></motion.div>
          </motion.div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">Project Highlights</h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {projectHallmarks.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex flex-col items-center p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group gsap-card">
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-center text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background" id="content">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">About The Project</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Immediate <span className="text-primary">Move-In Ready</span></h2>
                <p className="text-muted-foreground mb-4">Velentine Apartment Wing D is a ready-to-move residential project offering spacious 1BHK and 2BHK apartments in Malad East. With OC already received, these homes are perfect for immediate possession.</p>
                <p className="text-muted-foreground mb-6">Strategically located near Malad Station and Western Express Highway, offering excellent connectivity to IT hubs and shopping malls.</p>
                <div className="grid grid-cols-2 gap-4">
                  {[{ icon: CheckCircle, text: "OC Received" }, { icon: MapPin, text: "Malad East" }, { icon: Shield, text: "24/7 Security" }, { icon: Zap, text: "Power Backup" }].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                  <img src={hero2} alt="Velentine Interior" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-xl border border-border shadow-xl">
                  <p className="text-primary font-bold text-xl">P51800028866</p>
                  <p className="text-xs text-muted-foreground">MahaRERA Registration</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">Apartment <span className="text-primary">Configurations</span></h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[{ title: "1 BHK", size: "400-480 sq.ft", price: "₹75 Lakhs", features: ["Open layout", "Natural light"] }, { title: "1 BHK Large", size: "500-550 sq.ft", price: "₹88 Lakhs", features: ["Larger living", "Balcony"] }, { title: "2 BHK", size: "600-700 sq.ft", price: "₹1.05 Cr", features: ["Two bedrooms", "Spacious hall"] }].map((space, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-background rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-all gsap-card">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={galleryImages[index]?.src || project1} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{space.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{space.size}</p>
                    <p className="text-primary font-semibold mb-4">{space.price}</p>
                    <ul className="space-y-2">
                      {space.features.map((feature, idx) => (<li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary shrink-0" />{feature}</li>))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">Amenities</h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {amenities.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex flex-col items-center p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group text-center gsap-card">
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground mb-1">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">Location Advantages</h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {connectivityItems.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all gsap-card">
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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">Schedule a Site Visit</h2>
              </motion.div>
              <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="bg-card p-6 rounded-2xl border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                    <input type="tel" required value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your phone" />
                  </div>
                </div>
                <button type="submit" disabled={formLoading} className="mt-6 w-full px-8 py-4 bg-gradient-to-r from-primary to-gold-light text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50">
                  {formLoading ? "Sending..." : formSent ? "Sent!" : "Send Enquiry via WhatsApp"}
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <LeadCapturePopup />
    </>
  );
};

export default VelentineApartment;
