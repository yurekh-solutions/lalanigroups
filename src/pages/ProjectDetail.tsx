import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Home, Calendar, CheckCircle, ArrowLeft, Phone, Mail, Share2, Copy, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import BackToTopButton from "@/components/BackToTopButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import SEO from "@/components/SEO";
import { getProjectBySlug, projects } from "@/data/projects";
import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const [sidebarForm, setSidebarForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sidebarLoading, setSidebarLoading] = useState(false);
  const [sidebarSent, setSidebarSent] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = `Check out ${project?.name} by Lalani Group - ${project?.type} in ${project?.location}. ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const relatedProjects = projects
    .filter(p => p.slug !== slug && (p.area === project?.area || p.category === project?.category))
    .slice(0, 3);

  // Use exact address for Google Maps - this pins the exact building location
  const mapAddress = project?.address || `${project?.name}, ${project?.location}, Mumbai, India`;
  
  // Always search by exact address - more accurate for finding the specific building
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&z=18&output=embed`;

  const mapSearchUrl = `https://www.google.com/maps/search/${encodeURIComponent(mapAddress)}`;
  
  const mapQuery = encodeURIComponent(`${project?.name}, ${project?.location}, Mumbai, India`);

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

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSidebarLoading(true);
    try {
      await trackEvent("form", window.location.pathname, {
        type: "project_enquiry",
        name: sidebarForm.name,
        phone: sidebarForm.phone,
        email: sidebarForm.email,
        message: sidebarForm.message,
        project: project?.name,
      });
      const text = `Hi, I am interested in ${project?.name}.%0A%0AName: ${sidebarForm.name}%0APhone: ${sidebarForm.phone}%0AEmail: ${sidebarForm.email}%0AMessage: ${sidebarForm.message || "Please share more details"}%0ARERA: ${project?.rera}`;
      window.open(`https://wa.me/919322642370?text=${text}`, "_blank");
      setSidebarSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSidebarLoading(false);
    }
  };

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const images = project.images || [project.image];

  return (
    <>
      <SEO
        title={`${project.name} | ${project.type} in ${project.area} Mumbai | Lalani Group | ${project.price}`}
        description={`${project.name} by Lalani Group – ${project.type} in ${project.location}, ${project.area}, Mumbai. ${project.status === 'Ready Possession' ? 'Ready to move in!' : `Possession by ${project.possession}.`} Starting from ${project.price}. MahaRERA Reg: ${project.rera}. Premium amenities. Book site visit: 022-6728 0000.`}
        keywords={`${project.name}, ${project.name} ${project.area}, flats in ${project.area} Mumbai, ${project.type} ${project.area}, buy flat ${project.area}, property in ${project.area}, ${project.area} apartments, ${project.area} real estate, ${project.area} property price, MahaRERA ${project.rera}, Lalani Group ${project.area}, ${project.status.toLowerCase()} flats Mumbai, ${project.type.toLowerCase()} Mumbai`}
        canonicalUrl={`/projects/${slug}`}
        ogImage={typeof project.image === 'string' ? project.image : undefined}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ApartmentComplex",
          "name": project.name,
          "description": project.description,
          "url": `https://lalanigroup.in/projects/${slug}`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": project.location,
            "addressLocality": project.area,
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "priceRange": project.price,
          "numberOfRooms": project.type,
          "amenityFeature": project.amenities.map((a: string) => ({ "@type": "LocationFeatureSpecification", "name": a })),
          "additionalProperty": [
            { "@type": "PropertyValue", "name": "MahaRERA Number", "value": project.rera },
            { "@type": "PropertyValue", "name": "Project Status", "value": project.status },
            { "@type": "PropertyValue", "name": "Possession Date", "value": project.possession }
          ],
          "offers": {
            "@type": "Offer",
            "price": project.price,
            "priceCurrency": "INR",
            "availability": project.status === 'Ready Possession' ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
            "seller": { "@type": "Organization", "name": "Lalani Group", "url": "https://lalanigroup.in/" }
          },
          "brand": { "@type": "Brand", "name": "Lalani Group" }
        }}
      />
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
                initial={{ opacity: 1 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold">
                    {project.type.toLowerCase().includes("commercial") || project.type.toLowerCase().includes("office") || project.type.toLowerCase().includes("retail") ? "Commercial" : "Residential"}
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Possession</p>
                <p className="text-xl font-bold text-foreground">{project.possession}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: 0.2 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
              >
                <Home className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Configuration</p>
                <p className="text-xl font-bold text-foreground">{project.type}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
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
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
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
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
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
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
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
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Amenities */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
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

                {/* Floor Plans */}
                {project.floorPlan && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 gradient-gold-text">
                      {project.floorPlanTitle || "Floor Plans"}
                    </h2>
                    <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
                      <img
                        src={project.floorPlan}
                        alt={`${project.name} Floor Plan`}
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Specifications */}
                {project.specifications && project.specifications.length > 0 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
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
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
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

                {/* Google Maps Location */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 gradient-gold-text">
                    Project Location
                  </h2>
                  <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                    <iframe
                      title={`${project.name} Location Map`}
                      src={mapUrl}
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </div>
                  <a
                    href={mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:text-gold-light transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </motion.div>

                {/* How to Reach Section */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  className="bg-card p-6 rounded-2xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">How to Reach</h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    {project?.nearbyLocations && project.nearbyLocations.length > 0 ? (
                      <>
                        <p className="font-semibold text-foreground">Nearby Landmarks & Transport:</p>
                        <ul className="space-y-2">
                          {project.nearbyLocations.map((location, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>
                                <span className="text-foreground font-medium">{location.name}</span>
                                <span className="text-muted-foreground"> - {location.distance}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-foreground font-semibold mb-2">Quick Navigation:</p>
                      <a
                        href={mapSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-all"
                      >
                        <MapPin className="w-4 h-4" />
                        Get Directions on Google Maps
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Share This Project */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  className="bg-card p-6 rounded-2xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Share2 className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Share This Project</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleWhatsAppShare}
                      className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.083.534 4.04 1.47 5.742L0 24l6.43-1.448A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.63-.488-5.15-1.342l-.364-.216-3.794.854.854-3.708-.236-.38A9.969 9.969 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                      Share on WhatsApp
                    </button>
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank")}
                      className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      Share on Facebook
                    </button>
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center gap-2 px-4 py-2.5 bg-card hover:bg-primary/10 text-foreground border border-border rounded-lg text-sm font-medium transition-all"
                    >
                      <Copy className="w-4 h-4" />
                      {linkCopied ? "Copied!" : "Copy Link"}
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Sticky Contact Form */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  className="sticky top-24 bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg"
                >
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2 gradient-gold-text">
                    Interested in this project?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>

                  {sidebarSent ? (
                    <div className="py-8 text-center">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <p className="text-lg font-semibold text-foreground mb-1">Thank You!</p>
                      <p className="text-sm text-muted-foreground">Our team will contact you shortly.</p>
                    </div>
                  ) : (
                  <form className="space-y-4" onSubmit={handleSidebarSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={sidebarForm.name}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, name: e.target.value })}
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
                        value={sidebarForm.phone}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, phone: e.target.value })}
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
                        value={sidebarForm.email}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, email: e.target.value })}
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
                        value={sidebarForm.message}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="I'm interested in this project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={sidebarLoading}
                      className="w-full py-3.5 rounded-lg bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105 disabled:opacity-70"
                    >
                      {sidebarLoading ? "Sending..." : "Submit Enquiry via WhatsApp"}
                    </button>
                  </form>
                  )}

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

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-primary/5 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 gradient-gold-text text-center">
              You May Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  to={`/projects/${related.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                      {related.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      {related.location}
                    </div>
                    <span className="text-xs font-semibold text-primary">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
      <EnquireButton />
      <BackToTopButton />
      <LeadCapturePopup />
    </>
  );
};

export default ProjectDetail;
