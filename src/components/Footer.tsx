import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Logo */}
        <a href="#home" className="inline-flex items-baseline gap-0 mb-8">
          <span className="font-display text-2xl italic font-normal text-foreground">F8</span>
          <span className="font-body text-xl font-bold text-foreground tracking-tight">/PRO</span>
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          {[
            { label: "Instagram", href: "#", icon: Instagram },
            { label: "Facebook", href: "#", icon: Facebook },
            { label: "Twitter", href: "#", icon: Twitter },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors luxury-link"
            >
              {social.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground/60">
          &copy; {new Date().getFullYear()} F8pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
