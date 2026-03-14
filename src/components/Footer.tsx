import { Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darker-surface border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              F8<span className="text-primary">pro</span>
            </h3>
            <p className="font-elegant text-lg text-primary italic mb-4">F8pro స్టూడియోస్</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Capturing Moments. Creating Memories.<br />
              Professional photography studio in Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Portfolio", "Reviews", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-1 shrink-0" />
                <a href="tel:+918897888811" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 88978 88811
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  Kamalapuri Colony, Jubilee Hills, Hyderabad, Telangana 500073
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider w-full my-10" />
        <p className="font-body text-xs text-muted-foreground text-center tracking-wider">
          © {new Date().getFullYear()} F8pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
