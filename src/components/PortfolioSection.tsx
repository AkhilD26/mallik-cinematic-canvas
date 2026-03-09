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
  { src: portrait1, category: "Portraits", title: "Elegant Portrait" },
  { src: wedding1, category: "Wedding", title: "Traditional Wedding" },
  { src: professional1, category: "Portraits", title: "Professional Headshot" },
  { src: event1, category: "Events", title: "Cultural Celebration" },
  { src: studioInterior, category: "Studio", title: "Studio Setup" },
  { src: family1, category: "Portraits", title: "Family Portrait" },
  { src: restoration1, category: "Restoration", title: "Photo Restoration" },
  { src: heroBg, category: "Studio", title: "Studio Workspace" },
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
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Featured <span className="gold-text-gradient">Portfolio</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm tracking-wider uppercase px-5 py-2 rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "gold-gradient text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-sm"
                onClick={() => setLightbox(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-500 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-display text-lg text-foreground">{item.title}</p>
                    <p className="font-body text-xs tracking-wider uppercase text-primary">{item.category}</p>
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
