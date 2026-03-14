import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "pavanK lenin",
    text: "Hello PAVAN K LENIN here, just i would like to share some thing about f8pro, they are Mad about his Fashion, good çommunication, Photography was next level, Well experienced.",
    rating: 5,
  },
  {
    name: "Dolly silpakala.d.krupalina",
    text: "f8pro studio is just amazing. My daughter Siyona drums recoding was done in this wonderful studio. I am very glad and thankful to the team. My special thanks to Sada garu. Throughout my life i remember this moment. Sada garu is very passionate and marvelous photographer.",
    rating: 5,
  },
  {
    name: "Jaya Palakollu",
    text: "Best place for photoshoots.. good ambiance and great people..❤️",
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
