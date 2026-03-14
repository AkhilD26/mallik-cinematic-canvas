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

const categories = ["All", "Portraits", "Wedding", "Studio", "Events", "Restoration"];

const portfolioItems = [
  { src: portrait1, category: "Portraits", title: "Grace in Shadow", size: "tall" },
  { src: wedding1, category: "Wedding", title: "Eternal Vows", size: "wide" },
  { src: professional1, category: "Portraits", title: "The Architect", size: "small" },
  { src: event1, category: "Events", title: "Vibrant Pulse", size: "small" },
  { src: studioInterior, category: "Studio", title: "The Sanctuary", size: "wide" },
  { src: family1, category: "Portraits", title: "Rooted Legacies", size: "tall" },
  { src: restoration1, category: "Restoration", title: "Echoes Refined", size: "small" },
  { src: heroBg, category: "Studio", title: "Master's Canvas", size: "small" },
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
    <section id="portfolio" className="py-24 md:py-32 bg-background relative">
      <div className="section-divider w-full mb-24" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary/60 mb-4">The Gallery</p>
          <h2 className="font-display text-4xl md:text-7xl font-bold text-foreground leading-tight">
            Curated <span className="gold-text-gradient italic">Frames</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap gap-6 mb-16 border-b border-white/5 pb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-[0.65rem] tracking-[0.3em] uppercase transition-all duration-300 relative group overflow-hidden ${
                activeCategory === cat ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-primary transition-transform duration-500 ${
                activeCategory === cat ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </button>
          ))}
        </motion.div>

        {/* Bespoke Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl hover-glow ${
                  item.size === "tall" ? "lg:row-span-2" : 
                  item.size === "wide" ? "lg:col-span-2" : ""
                }`}
                onClick={() => setLightbox(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                  <motion.p className="font-display text-2xl text-foreground mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </motion.p>
                  <motion.p className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-primary/80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.category} — View
                  </motion.p>
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
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="Portfolio"
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
