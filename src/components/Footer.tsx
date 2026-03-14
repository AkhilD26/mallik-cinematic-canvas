import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none select-none overflow-hidden opacity-[0.02] flex items-end justify-center">
        <span className="font-display text-[20vw] font-bold leading-none translate-y-[30%]">F8PRO</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <a href="#home" className="font-display text-4xl font-bold text-foreground inline-block mb-8 group">
              F8<span className="text-primary italic group-hover:not-italic transition-all duration-500">PRO</span>
            </a>
            <p className="font-body text-lg text-muted-foreground/60 leading-relaxed font-light max-w-sm mb-8">
              Crafting visual legacies through cinematic precision. 
              Based in Jubilee Hills, Hyderabad.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (now Navigation) */}
          <div className="lg:col-span-3">
            <h4 className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-primary/60 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Portfolio", "Reviews"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors luxury-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-primary/60 mb-8">Location</h4>
            <p className="font-body text-sm text-muted-foreground/80 leading-relaxed font-light mb-8 max-w-[240px]">
              Kamalapuri Colony Community Hall, 205 4th, 
              Jubilee Hills, Hyderabad, Telangana 500073
            </p>
            <a href="tel:+918897888811" className="font-display text-2xl text-foreground hover:text-primary transition-colors">
              +91 88978 88811
            </a>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground/40">
            &copy; {new Date().getFullYear()} F8pro Cinematic Canvas. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground/40 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
