import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import wedding1 from "@/assets/wedding-1.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import professional1 from "@/assets/professional-1.jpg";

const heroImages = [
  { src: heroBg, alt: "Cinematic Photography", className: "col-span-2 row-span-2" },
  { src: wedding1, alt: "Wedding", className: "" },
  { src: portrait1, alt: "Portrait", className: "row-span-2" },
  { src: professional1, alt: "Professional", className: "" },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section id="home" className="pt-24 pb-16 md:pb-24" ref={containerRef}>
      {/* Irregular Photo Collage Grid with Ken Burns + Parallax */}
      <motion.div style={{ y, opacity }} className="px-2 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[280px]">
          {heroImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.1 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`img-hover rounded-sm overflow-hidden ${img.className}`}
            >
              <motion.img
                style={{ scale }}
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Philosophy Text with staggered fade-in */}
      <div className="container mx-auto px-6 md:px-12 mt-24 md:mt-32 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground mb-6"
        >
          We see you...
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-editorial"
          >
            <span className="italic">You're someone who embraces </span>
            life's diversity: <span className="italic">Every Moment</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 space-y-4 text-muted-foreground font-body text-sm leading-relaxed max-w-2xl"
        >
          <p>Capturing the essence of life, from candid snapshots to meticulously composed portraits, and everything in between.</p>
          <p>Timeless compositions that transport you back to the heart of each memory, preserving the beauty of every experience.</p>
        </motion.div>

        {/* Buttons with stagger + micro-interaction hover */}
        <div className="flex gap-4 mt-12">
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
