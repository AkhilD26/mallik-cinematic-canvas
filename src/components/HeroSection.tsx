import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={heroBg} alt="F8pro Studio" className="w-full h-full object-cover" />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 overlay-dark" />
      <div className="absolute bottom-0 left-0 right-0 h-40 overlay-dark-bottom" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6"
        >
          Capturing Moments • Creating Memories
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl leading-tight"
        >
          Capture Your Best Moments With{" "}
          <span className="gold-text-gradient">F8pro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mt-6 leading-relaxed"
        >
          Professional photography studio in Vijayawada delivering high-quality photos
          with creativity, modern equipment, and expert guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#portfolio"
            className="gold-gradient text-primary-foreground px-8 py-3.5 rounded-sm font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="border border-primary text-primary px-8 py-3.5 rounded-sm font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Book a Session
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <ChevronDown size={20} className="text-primary animate-scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
