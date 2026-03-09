import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Deepika Vangapalli",
    text: "I had my interview photos taken here and absolutely loved the results. The pictures looked very professional.",
    rating: 5,
  },
  {
    name: "Dr. Shireesha",
    text: "The studio is well equipped with modern high-end cameras. The photographer is polite and guides every pose.",
    rating: 5,
  },
  {
    name: "MamaiKya Lanka",
    text: "They restored our old photos beautifully. The quality came out clear and amazing.",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    text: "Best wedding photography experience. Every moment was captured with perfection and creativity.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "Mr. Mallik is incredibly talented and made us feel so comfortable. The results exceeded our expectations!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((p) => (p + 1) % reviews.length);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-dark-surface relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Client <span className="gold-text-gradient">Reviews</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <Quote size={48} className="text-primary/20 mx-auto mb-6" />

          <div className="relative h-52 flex items-center justify-center overflow-hidden">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: i === current ? 1 : 0,
                  x: i === current ? 0 : -50,
                  position: "absolute",
                }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={18} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-elegant text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
                <p className="font-body text-sm tracking-wider uppercase text-primary">
                  — {review.name}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
