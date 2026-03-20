 import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Buyers' Guide", path: "/buyers-guide" },
    { label: "Media Room", path: "/media-room" },
    { label: "Contact Us", path: "/contact" },
  ];
  
  const projectLinks = [
    { label: "Lalani Goodwill", path: "/projects/lalani-goodwill", location: "Andheri East" },
    { label: "Lalani Business Park", path: "/projects/lalani-business-park", location: "Khar West" },
    { label: "Velentine Apartment", path: "/projects/velentine-apartment", location: "Malad East" },
    { label: "Lalani Grandeur", path: "/projects/lalani-grandeur", location: "Malad East" },
    { label: "Lalani Heritage Park", path: "/projects/lalani-heritage-park", location: "Jogeshwari West" },
    { label: "Dream Residency", path: "/projects/dream-residency", location: "Karjat" },
    { label: "Lalani Corporate Plaza", path: "/projects/lalani-corporate-plaza", location: "BKC" },
  ];

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 grid-3d-bg opacity-20" />
      <div 
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, rgba(201, 169, 98, 0.3) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)"
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, rgba(201, 169, 98, 0.2) 0%, transparent 70%)",
          transform: "translate(50%, 50%)"
        }}
      />
      
      <div className="container-max section-padding !py-12 sm:!py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand with Logo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <motion.div 
                className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-depth-2 group-hover:shadow-glow-gold transition-all duration-300"
                whileHover={{ rotateY: 10, scale: 1.05 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img 
                  src={logo} 
                  alt="Lalani Group Logo - Premium Real Estate Developers Mumbai" 
                  className="w-full h-full object-contain p-2"
                />
              </motion.div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-bold gradient-gold-text">LALANI</span>
                <span className="text-[9px] tracking-[0.3em] text-cream-muted uppercase">Group</span>
              </div>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Building trust since 1985. One of Mumbai's leading construction companies delivering quality homes
              and commercial spaces with 40+ years of excellence.
            </p>
            {/* Social Media with 3D Effect */}
            <div className="flex items-center gap-3">
              {[
                { href: "https://www.facebook.com/lalanigroup/", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/lalanigroup/?hl=en", icon: Instagram, label: "Instagram" },
                { href: "https://www.youtube.com/channel/UC5NG_QT27lb62g6uHI-s0wQ", icon: Youtube, label: "YouTube" },
                { href: "https://www.linkedin.com/company/lalani-group", icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass-3d flex items-center justify-center transition-all hover:shadow-glow-gold"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-gold-light rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects with Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-gold-light rounded-full" />
              Our Projects
            </h4>
            <ul className="space-y-2">
              {projectLinks.map((project) => (
                <li key={project.path}>
                  <Link
                    to={project.path}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{project.label}</span>
                    <span className="text-xs text-muted-foreground/60">({project.location})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-gold-light rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                whileHover={{ x: 2 }}
              >
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  7th Floor, Lalani Aura, 34th Road, Khar (W), Mumbai - 400052, Maharashtra, India
                </p>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                whileHover={{ x: 2 }}
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:02267280000" className="font-body text-sm text-muted-foreground hover:text-primary">
                    022-6728 0000
                  </a>
                  <a href="tel:+919322642370" className="font-body text-sm text-muted-foreground hover:text-primary">
                    +91-93226-42370
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                whileHover={{ x: 2 }}
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@lalanigroup.in" className="font-body text-sm text-muted-foreground hover:text-primary">
                    info@lalanigroup.in
                  </a>
                  <a href="mailto:sales@lalanigroup.in" className="font-body text-sm text-muted-foreground hover:text-primary">
                    sales@lalanigroup.in
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom with 3D Border */}
        <div className="mt-12 pt-8 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="font-body text-xs sm:text-sm text-muted-foreground">
              © {currentYear} Lalani Group. All Rights Reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="font-body text-xs text-muted-foreground">
                MAHA RERA:{" "}
                <a
                  href="https://maharera.mahaonline.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-gold-light transition-colors"
                >
                  maharera.mahaonline.gov.in
                </a>
              </p>
            
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-4 text-center">
            <p className="font-body text-xs text-muted-foreground">
              Developed & Designed by{" "}
             
                Y S
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
