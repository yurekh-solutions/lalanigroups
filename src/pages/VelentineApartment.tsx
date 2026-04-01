import { useState } from "react";
import { MapPin, Building2, Car, Shield, Zap, Home, CheckCircle, X, ChevronLeft, ChevronRight, Train, ShoppingBag, Building, Phone, Mail, Download, MapIcon, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/tracking";

import business2 from "@/assets/lalanibusinespark/business2.png";
import business1 from "@/assets/lalanibusinespark/business1.png";
import busines3 from "@/assets/lalanibusinespark/busines3.png";
import busines from "@/assets/lalanibusinespark/busines.png";

const galleryImages = [
  { src: busines3, alt: "Velentine Apartment Building", category: "Actual" },
  { src: business2, alt: "Modern Interiors", category: "Actual" },
  { src: business1, alt: "Premium Amenities", category: "Actual" },
  { src: busines, alt: "Spacious Living", category: "Actual" },
];

const amenities = [
  "24/7 Security with Guard",
  "CCTV Surveillance",
  "Covered Parking",
  "100% Power Backup for Common Areas",
  "High-Speed Elevators",
  "Children's Play Area",
  "Landscaped Gardens",
  "Intercom Facility",
  "Water Storage & Pump Room",
  "Fire Safety Equipment",
  "Garbage Disposal System",
  "Society Office",
];

const specifications = [
  "Premium vitrified tiles in living and dining",
  "Anti-skid ceramic tiles in bathrooms",
  "Granite kitchen platform with stainless steel sink",
  "Anodized aluminum sliding windows",
  "Concealed plumbing with premium fittings",
  "Modular electrical switches",
  "Intercom & video door phone facility",
  "Television & telephone points in living & bedrooms",
  "Adequate electrical points for AC & geysers",
];

const connectivityItems = [
  { name: "Malad Railway Station", distance: "10 min" },
  { name: "Inorbit Mall", distance: "12 min" },
  { name: "Infiniti Mall", distance: "15 min" },
  { name: "Western Express Highway", distance: "5 min" },
  { name: "Mindspace IT Park", distance: "15 min" },
  { name: "Chhatrapati Shivaji Airport", distance: "25 min" },
];

const VelentineApartment = () => {
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

  const handlePrevious = () => {
    setLightboxIndex(lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1);
  };

  const handleNext = () => {
    setLightboxIndex(lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <>
      <SEO
        title="Velentine Apartment | Ready to Move 1BHK & 2BHK Flats in Malad East Mumbai"
        description="Velentine Apartment Wing D - Ready possession 1BHK & 2BHK flats in Malad East, Mumbai. OC Received. Immediate move-in. Near Malad Station & Western Express Highway."
        keywords="Velentine Apartment, ready flats Malad, 1BHK Malad East, 2BHK Malad, ready possession Mumbai, OC received flats"
        canonicalUrl="/velentine-apartment"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        
        {/* Hero Section */}
        <section className="relative min-h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img src={business2} alt="Velentine Apartment" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="text-center text-white max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-green-500/20 backdrop-blur-sm rounded-full text-green-400 text-sm font-medium mb-4">
                Ready Possession - OC Received
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
                Velentine Apartment
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6 max-w-3xl mx-auto">
                Spacious 1BHK and 2BHK apartments in Malad East, Mumbai. Ready to move-in with OC received.
              </p>
              <p className="text-base text-white/70 mb-8">
                Strategically located near Malad Station and Western Express Highway.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">
                  <MapPin className="w-4 h-4 text-primary" /> Malad (E), Mumbai
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">
                  <Home className="w-4 h-4 text-primary" /> 1BHK & 2BHK Residences
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm">
                  <Clock className="w-4 h-4 text-green-400" /> Immediate Possession
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <EnquireButton />
                <a href="#overview" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all">
                  Explore More
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-20" />
        </section>

        {/* Quick Info Bar */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Ready Possession - OC Received</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Immediate Move-In</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">MahaRERA Approved</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Project Overview</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Your New Home is <span className="text-primary">Ready</span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Velentine Apartment Wing D is a ready-to-move residential project offering spacious 1BHK and 2BHK apartments in the heart of Malad East, Mumbai.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With Occupancy Certificate (OC) already received, these homes are perfect for immediate possession. Strategically located near Malad Railway Station and Western Express Highway, Velentine Apartment offers excellent connectivity to IT hubs, shopping malls, and educational institutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                    <Home className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">1BHK & 2BHK</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">Malad East</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                    <Shield className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">24/7 Security</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-foreground">OC Received</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                    <Download className="w-4 h-4" />
                    E-Brochure Download
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                  <img src={business1} alt="Velentine Apartment Interior" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Location</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Prime <span className="text-primary">Location</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Strategically located in Malad East with excellent connectivity to IT hubs, shopping malls, and educational institutions. Near Malad Railway Station and Western Express Highway.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {connectivityItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all">
                  <MapIcon className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.distance}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                <MapPin className="w-4 h-4" />
                Google Map
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:border-primary/50 transition-all">
                <MapIcon className="w-4 h-4" />
                Location Map
              </a>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Amenities</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Modern <span className="text-primary">Amenities</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section id="specifications" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Specifications</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Premium <span className="text-primary">Specifications</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Gallery</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Project <span className="text-primary">Gallery</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                  onClick={() => { setLightboxOpen(true); setLightboxIndex(index); }}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-medium text-sm">{image.alt}</p>
                      <span className="text-xs text-green-400">{image.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Contact</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Get in <span className="text-primary">Touch</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Site Office */}
              <div className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Site OFFICE
                </h3>
                <p className="font-semibold text-foreground mb-2">VELENTINE APARTMENT</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Wing D, Malad East,<br />
                  Mumbai - 400 097.
                </p>
                <div className="space-y-2">
                  <a href="tel:+919322642370" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    91-93226 42370
                  </a>
                  <a href="mailto:sales@lalanigroup.in" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    sales@lalanigroup.in
                  </a>
                </div>
              </div>
              
              {/* Corporate Office */}
              <div className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Corporate Office
                </h3>
                <p className="font-semibold text-foreground mb-2">LALANI GROUP</p>
                <p className="text-muted-foreground text-sm mb-4">
                  7th floor, Lalani Aura, 34th road,<br />
                  Khar (W), Mumbai - 400 052.
                </p>
                <div className="space-y-2">
                  <a href="tel:+912267280000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    91-22-6728 0000
                  </a>
                  <a href="mailto:info@lalanigroup.in" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    info@lalanigroup.in
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="p-6 md:p-8 bg-background rounded-2xl border border-border">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6 text-center">Enquire Now</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-gold-light text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-50"
                  >
                    {formLoading ? "Sending..." : formSent ? "Sent Successfully!" : "Send Enquiry via WhatsApp"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <LeadCapturePopup />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[90vh]">
            <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      )}
    </>
  );
};

export default VelentineApartment;
