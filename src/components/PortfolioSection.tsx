import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import portrait1 from "@/assets/portrait-1.jpg";
import wedding1 from "@/assets/wedding-1.jpg";
import professional1 from "@/assets/professional-1.jpg";
import event1 from "@/assets/event-1.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import family1 from "@/assets/family-1.jpg";
import restoration1 from "@/assets/restoration-1.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const categories = ["All", "Weddings", "Pre Wedding", "Portraits", "Events", "Cinematic Films"];

const portfolioItems = [
  { src: wedding1, category: "Weddings", title: "Eternal Vows", size: "tall" },
  { src: portrait1, category: "Portraits", title: "Grace in Shadow", size: "small" },
  { src: professional1, category: "Pre Wedding", title: "The Promise", size: "small" },
  { src: event1, category: "Events", title: "Vibrant Pulse", size: "wide" },
  { src: studioInterior, category: "Cinematic Films", title: "The Sanctuary", size: "small" },
  { src: family1, category: "Portraits", title: "Rooted Legacies", size: "tall" },
  { src: restoration1, category: "Weddings", title: "Whispered Promises", size: "small" },
  { src: heroBg, category: "Events", title: "Grand Celebration", size: "wide" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground mb-6">Gallery</p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-editorial"
            >
              Showcasing <span className="italic">Timeless Imagery</span> That Resonates With Authenticity
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-muted-foreground mt-6"
          >
            Moments · Details · Emotions
          </motion.p>
        </motion.div>

        {/* Category filters with stagger */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ y: -2 }}
              className={`font-body text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 luxury-link pb-1 ${
                activeCategory === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid with cinematic staggered reveal */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[250px] md:auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                  layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                className={`img-hover cursor-pointer rounded-sm ${
                  item.size === "tall" ? "row-span-2" :
                  item.size === "wide" ? "col-span-2" : ""
                }`}
                onClick={() => setLightbox(item.src)}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                <div className="overlay">
                  <div className="overlay-text">
                    <p className="font-display text-xl text-white mb-1">{item.title}</p>
                    <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-white/70">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox with cinematic transitions */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={28} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox}
              alt="Portfolio"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
