import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${formData.name}. ${formData.message} Contact: ${formData.phone || formData.email}`;
    window.open(`https://wa.me/918897888811?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground mb-6">Contact</p>
          <h2 className="text-editorial">
            Let's <span className="italic">Create</span> Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-transparent border-b border-border py-4 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-b border-border py-4 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors resize-none"
            />
            <button type="submit" className="btn-primary mt-4">
              Send Message
            </button>
          </motion.form>

          {/* Studio Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-5">
              <Phone size={20} className="text-foreground mt-1 shrink-0" />
              <div>
                <h4 className="font-body text-sm font-semibold text-foreground mb-1">Phone</h4>
                <a href="tel:+918897888811" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +91 88978 88811
                </a>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <Mail size={20} className="text-foreground mt-1 shrink-0" />
              <div>
                <h4 className="font-body text-sm font-semibold text-foreground mb-1">Email</h4>
                <p className="font-body text-sm text-muted-foreground">info@f8pro.com</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <MapPin size={20} className="text-foreground mt-1 shrink-0" />
              <div>
                <h4 className="font-body text-sm font-semibold text-foreground mb-1">Location</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Kamalapuri Colony Community Hall, 205 4th,<br />
                  Jubilee Hills, Hyderabad, Telangana 500073
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-sm overflow-hidden border border-border h-56 mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
