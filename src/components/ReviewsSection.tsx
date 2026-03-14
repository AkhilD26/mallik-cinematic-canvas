import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "pavanK lenin",
    content: "They are Mad about his Fashion, good çommunication, Photography was next level, Well experienced.",
    rating: 5,
  },
  {
    name: "Dolly silpakala.d.krupalina",
    content: "f8pro studio is just amazing. Sada garu is very passionate and marvelous photographer. Throughout my life i remember this moment.",
    rating: 5,
  },
  {
    name: "Jaya Palakollu",
    content: "Best place for photoshoots.. good ambiance and great people..❤️",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-20"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary/60 mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-7xl font-bold text-foreground leading-tight">
            Client <span className="gold-text-gradient italic">Voices</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-10 rounded-3xl glass-card border border-white/5 relative group hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-lg text-muted-foreground/90 leading-relaxed italic mb-8">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-display text-xl font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">{review.name}</h4>
                  <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-primary/60">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
