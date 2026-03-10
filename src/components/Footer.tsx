import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand with Logo */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md group-hover:shadow-lg transition-all">
                <img 
                  src={logo} 
                  alt="Lalani Group Logo" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-xl font-bold gradient-gold-text">LALANI</span>
                <span className="text-[9px] tracking-[0.3em] text-cream-muted uppercase">Group</span>
              </div>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Building trust since 1985. One of Mumbai's leading construction companies delivering quality homes
              and commercial spaces.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/lalanigroup/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="https://www.instagram.com/lalanigroup/?hl=en" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a href="https://www.youtube.com/channel/UC5NG_QT27lb62g6uHI-s0wQ" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all" aria-label="YouTube">
                <Youtube className="w-4 h-4 text-primary" />
              </a>
              <a href="https://www.linkedin.com/company/lalani-group" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Projects", path: "/projects" },
                { label: "Buyers' Guide", path: "/buyers-guide" },
                { label: "Media Room", path: "/media-room" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-heading text-base font-bold text-foreground mb-4">Our Projects</h4>
            <ul className="space-y-2">
              {["Lalani Goodwill", "Lalani Business Park", "Velentine Apartment", "Heritage Park", "Lalani Grandeur", "Dream Residency"].map((p) => (
                <li key={p}>
                  <span className="font-body text-sm text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-bold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  7th Floor, Lalani Aura, 34th Road, Khar (W), Mumbai - 400052
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:02267280000" className="font-body text-sm text-muted-foreground hover:text-primary">
                  022-6728 0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@lalanigroup.in" className="font-body text-sm text-muted-foreground hover:text-primary">
                    info@lalanigroup.in
                  </a>
                  <a href="mailto:sales@lalanigroup.in" className="font-body text-sm text-muted-foreground hover:text-primary">
                    sales@lalanigroup.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lalani Group. All Rights Reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground">
              MAHA RERA website:{" "}
              <a
                href="https://maharera.mahaonline.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-gold-light"
              >
                www.maharera.mahaonline.gov.in
              </a>
            </p>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-4 text-center">
            <p className="font-body text-xs text-muted-foreground">
              Developed & Designed by{" "}
              <a
                href="https://yurekh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-gold-light font-semibold transition-colors"
              >
                Yurekh Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
