import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Home, Calendar, IndianRupee, CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import { getProjectBySlug } from "@/data/projects";
import { useState, useEffect } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  // Add structured data for SEO
  useEffect(() => {
    if (!project) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      "name": project.name,
      "description": project.description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": project.location,
        "addressLocality": project.area,
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "priceRange": project.price,
      "image": project.image,
      "numberOfRooms": project.type,
      "amenityFeature": project.amenities.map(amenity => ({
        "@type": "LocationFeatureSpecification",
        "name": amenity
      })),
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "IN"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "MahaRERA Number",
          "value": project.rera
        },
        {
          "@type": "PropertyValue",
          "name": "Status",
          "value": project.status
        },
        {
          "@type": "PropertyValue",
          "name": "Possession",
          "value": project.possession
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Update meta tags
    document.title = `${project.name} - ${project.location} | Lalani Group`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', project.description.substring(0, 160));
    }

    return () => {
      document.head.removeChild(script);
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const images = project.images || [project.image];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            src={images[activeImage]}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                    project.status === "Ready Possession"
                      ? "bg-green-500 text-white"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {project.status}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold">
                    {project.category === "commercial" ? "Commercial" : "Residential"}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-3">
                  {project.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-base md:text-lg">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    <span className="text-base md:text-lg">{project.type}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image Thumbnails */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === activeImage ? "bg-white w-6 md:w-8" : "bg-white/40"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </section>

        {/* Quick Info Cards */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <IndianRupee className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Starting Price</p>
                <p className="text-xl font-bold text-foreground">{project.price}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Possession</p>
                <p className="text-xl font-bold text-foreground">{project.possession}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <Home className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Configuration</p>
                <p className="text-xl font-bold text-foreground">{project.type}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">RERA No.</p>
                <p className="text-lg font-bold text-foreground">{project.rera}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 gradient-gold-text">
                    Project Overview
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 gradient-gold-text">
                    Key Highlights
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm md:text-base text-foreground/90">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Configuration */}
                {project.configuration && project.configuration.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 gradient-gold-text">
                      Unit Configuration
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.configuration.map((config, index) => (
                        <div
                          key={index}
                          className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                        >
                          <h3 className="text-xl font-bold text-foreground mb-3">{config.type}</h3>
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                              <span className="font-semibold text-foreground">Area:</span> {config.area}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-semibold text-foreground">Price:</span> {config.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Amenities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 gradient-gold-text">
                    Amenities & Features
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {project.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
                      >
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground/90">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Specifications */}
                {project.specifications && project.specifications.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 gradient-gold-text">
                      Specifications
                    </h2>
                    <div className="space-y-6">
                      {project.specifications.map((spec, index) => (
                        <div key={index} className="bg-card p-6 rounded-xl border border-border">
                          <h3 className="text-lg font-bold text-foreground mb-3">{spec.title}</h3>
                          <ul className="space-y-2">
                            {spec.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Nearby Locations */}
                {project.nearbyLocations && project.nearbyLocations.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 gradient-gold-text">
                      Connectivity & Nearby Locations
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.nearbyLocations.map((location, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-sm md:text-base text-foreground">{location.name}</span>
                          </div>
                          <span className="text-sm font-semibold text-primary">{location.distance}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right Column - Sticky Contact Form */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="sticky top-24 bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg"
                >
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2 gradient-gold-text">
                    Interested in this project?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
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
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="I'm interested in this project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105"
                    >
                      Submit Enquiry
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <a
                      href="tel:+912267280000"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+91-22-6728-0000</span>
                    </a>
                    <a
                      href="mailto:sales@lalanigroup.in"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>sales@lalanigroup.in</span>
                    </a>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">MahaRERA:</span> {project.rera}
                      {project.reraNumber2 && ` & ${project.reraNumber2}`}
                    </p>
                    <a
                      href="https://maharerait.mahaonline.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:text-gold-light underline mt-2 inline-block"
                    >
                      View on maharerait.mahaonline.gov.in
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
    </>
  );
};

export default ProjectDetail;
