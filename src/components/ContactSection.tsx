import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${formData.name}. ${formData.message} Contact: ${formData.phone || formData.email}`;
    window.open(`https://wa.me/918897888811?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-32 md:py-48 bg-darker-surface relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 -translateX-1/2" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Header Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl mb-16"
            >
              <p className="font-body text-xs tracking-[0.5em] uppercase text-primary/60 mb-4">Connect</p>
              <h2 className="font-display text-4xl md:text-7xl font-bold text-foreground leading-tight">
                Secure Your <span className="gold-text-gradient italic">Vision</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground/80 mt-8 leading-relaxed font-light">
                We believe every masterpiece starts with a conversation. 
                Inquire about our bespoke photography services and visit our studio in Jubilee Hills.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-12"
            >
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center border border-white/5 group-hover:border-primary/40 transition-all duration-500">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">The Studio</h3>
                  <p className="font-body text-muted-foreground/80 leading-relaxed font-light max-w-xs">
                    Kamalapuri Colony Community Hall, 205 4th, 
                    Main Rd, Jubilee Hills, Hyderabad
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center border border-white/5 group-hover:border-primary/40 transition-all duration-500">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Communication</h3>
                  <p className="font-body text-muted-foreground/80 leading-relaxed font-light">
                    +91 88978 88811
                  </p>
                  <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-primary/60 mt-2">Available 9 AM – 9 PM</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Luxury Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="p-12 rounded-[2.5rem] glass-card border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-5">
              <Mail size={120} className="text-primary" />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border-b border-white/10 py-4 px-2 outline-none focus:border-primary transition-all font-body font-light text-foreground group-hover:bg-white/[0.08]"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/5 border-b border-white/10 py-4 px-2 outline-none focus:border-primary transition-all font-body font-light text-foreground group-hover:bg-white/[0.08]"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="relative group">
                  <textarea
                    rows={4}
                    placeholder="Project Details"
                    className="w-full bg-white/5 border-b border-white/10 py-4 px-2 outline-none focus:border-primary transition-all font-body font-light text-foreground resize-none group-hover:bg-white/[0.08]"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-primary-foreground py-5 rounded-full font-body text-[0.7rem] tracking-[0.3em] uppercase hover-glow transition-all"
              >
                Initiate Conversation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
