import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";

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
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      <div className="section-divider w-full mb-24" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Contact <span className="gold-text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg text-foreground mb-1">Our Location</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Kamalapuri Colony Community Hall, 205 4th,<br />
                  Srinagar Colony Main Rd, Jubilee Hills,<br />
                  Hyderabad, Telangana 500073
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={24} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg text-foreground mb-1">Phone</h4>
                <a href="tel:+919949142891" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 88978 88811
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={24} className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg text-foreground mb-1">Open Hours</h4>
                <p className="font-body text-sm text-muted-foreground">9:00 AM – 9:00 PM</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-sm overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452601955113!2d78.43588231533385!3d17.433433605934526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d63ced6cf1%3A0x6b3a0cc332cb5557!2sKamalapuri%20Colony%20Community%20Hall!5e0!3m2!1sen!2sin!4v1710410000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="F8pro Location"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-card p-8 rounded-sm border border-border"
          >
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your photoshoot requirements..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full gold-gradient text-primary-foreground px-8 py-3.5 rounded-sm font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
