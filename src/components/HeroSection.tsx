import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import wedding1 from "@/assets/wedding-1.jpg";
import professional1 from "@/assets/professional-1.jpg";

const slides = [
  { image: heroBg, title: "F8PRO" },
  { image: wedding1, title: "LEGACY" },
  { image: professional1, title: "VISION" },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Slider with Parallax & Ken Burns */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="F8pro Cinematic" 
              className="w-full h-full object-cover grayscale-[15%] brightness-[0.35]" 
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
            className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-primary/80"
          >
            Capturing Moments • Creating Memories
          </motion.p>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "circOut" }}
            className="font-display text-[clamp(3.5rem,15vw,9rem)] font-bold text-foreground leading-[0.85] tracking-tighter"
          >
            F8<span className="gold-text-gradient italic">PRO</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-24 h-[1px] bg-primary/40 my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="font-body text-base md:text-xl text-muted-foreground/80 max-w-xl mt-4 leading-relaxed font-light"
        >
          Premier photography and cinematic studio in Jubilee Hills, Hyderabad. 
          Where art meets high-end technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-12"
        >
          <a
            href="#portfolio"
            className="gold-gradient text-primary-foreground px-10 py-4 rounded-full font-body text-[0.65rem] tracking-[0.2em] uppercase hover-glow transition-all text-center w-full sm:w-auto"
          >
            Exploration
          </a>
          <a
            href="#contact"
            className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-full font-body text-[0.65rem] tracking-[0.2em] uppercase hover:bg-white/10 transition-all text-center w-full sm:w-auto"
          >
            Consultation
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
