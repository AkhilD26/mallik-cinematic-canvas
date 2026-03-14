import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Calendar } from "lucide-react";
import wedding1 from "@/assets/wedding-1.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <img src={wedding1} alt="Book photoshoot" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 container mx-auto px-6 text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
        >
          Ready to begin?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
        >
          Book Your <span className="gold-text-gradient drop-shadow-sm">Photoshoot</span> Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Let's create something beautiful together. Get in touch to book your session.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+918897888811"
            className="flex items-center justify-center gap-2 gold-gradient text-primary-foreground px-8 py-3.5 rounded-sm font-body text-sm tracking-widest uppercase hover-glow transition-all"
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-sm font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground hover-glow transition-all duration-300"
          >
            <Calendar size={16} />
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
