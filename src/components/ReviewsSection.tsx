import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "PavanK Lenin",
    content: "They are absolutely passionate about fashion and photography. The communication was excellent, and the results were next level. Truly well experienced professionals.",
  },
  {
    name: "Dolly Silpakala",
    content: "F8pro studio is just amazing. Sada garu is very passionate and a marvelous photographer. Throughout my life I will remember this moment.",
  },
  {
    name: "Jaya Palakollu",
    content: "Absolutely stunning photography. Best place for photoshoots — good ambiance and great people. Highly recommended!",
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-40 bg-[hsl(45,20%,96%)]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground mb-12"
        >
          Testimonials
        </motion.p>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-display text-xl md:text-3xl italic text-foreground leading-relaxed mb-8 px-4">
                "{reviews[current].content}"
              </p>
              <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
                — {reviews[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={() => setCurrent((p) => (p - 1 + reviews.length) % reviews.length)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-foreground w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((p) => (p + 1) % reviews.length)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
