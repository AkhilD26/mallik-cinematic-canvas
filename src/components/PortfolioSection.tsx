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
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
          <h2 className="text-editorial">
            Showcasing <span className="italic">Timeless Imagery</span> That Resonates With Authenticity
          </h2>
          <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-muted-foreground mt-6">
            Moments · Details · Emotions
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 luxury-link pb-1 ${
                activeCategory === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[250px] md:auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
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
