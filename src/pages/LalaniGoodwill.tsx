import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Phone, Mail, Download, Building2, Car, Trees, 
  Dumbbell, Shield, Droplets, Zap, Home, CheckCircle, 
  ChevronLeft, ChevronRight, X,
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
import image1 from "@/assets/lalanigoodwill/image1.png";
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

const LalaniGoodwill = () => {
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            {/* Centered Logo - Rounded */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6 md:mb-8"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-white/10 backdrop-blur-md p-2 sm:p-3 md:p-4 shadow-2xl border-2 md:border-4 border-white/20">
                <img
                  src={goodwillLogo}
                  alt="Lalani Goodwill"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-3 md:mb-4 px-2">
                The Good Life Begins Here
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed px-2">
                A good life is one where everything falls into place—your comfort, your time, your happiness. 
                At LALANI GOODWILL, we've created homes that do just that. With 1, 2, 3 Bed & Jodi Residences 
                in Andheri's most prominent neighborhood, experience a life that is as thoughtful as it is effortless.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Hallmarks */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Project Hallmarks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  className="flex flex-col items-center p-4 md:p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group"
                >
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base text-center text-foreground font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
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

        {/* Floor Plans Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-gold-text mb-4">
                Floor Plans
              </h2>
              <p className="text-lg text-muted-foreground">
                Where Functionality Meets Elegance
              </p>
              <p className="text-sm text-muted-foreground mt-2">*Subject to BMC Approval</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <h3 className="text-xl font-heading font-bold mb-4 text-center">Wing A & B Floor Plan</h3>
                <img
                  src={wingFloorAB}
                  alt="Wing A & B Floor Plan"
                  className="w-full rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setLightboxIndex(galleryImages.length);
                    setLightboxOpen(true);
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <h3 className="text-xl font-heading font-bold mb-4 text-center">Wing C Floor Plan</h3>
                <img
                  src={wingFloorC}
                  alt="Wing C Floor Plan"
                  className="w-full rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setLightboxIndex(galleryImages.length + 1);
                    setLightboxOpen(true);
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

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

        {/* Google Map Section */}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9389669682296!2d72.86511111540155!3d19.11098678707232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b50fce9d9d%3A0x94e4e7f7e4f2e6e2!2sJ.B.%20Nagar%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lalani Goodwill Location"
                className="w-full"
              />
            </motion.div>
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

                <a
                  href={brochurePdf}
                  download="Lalani-Goodwill-Brochure.pdf"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
                >
                  <Download className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground">Download E-Brochure</span>
                </a>
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
    </>
  );
};

export default LalaniGoodwill;
