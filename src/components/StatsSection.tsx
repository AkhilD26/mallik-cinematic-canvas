import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Camera, Heart, Users } from "lucide-react";

interface CounterProps {
  value: number;
  duration?: number;
}

const Counter = ({ value, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
};

const stats = [
  { icon: Award, value: 10, label: "Years Experience" },
  { icon: Camera, value: 1000, label: "Weddings Captured" },
  { icon: Users, value: 92, label: "Happy Clients" },
  { icon: Heart, value: 50, label: "Cinematic Films" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-darker-surface relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center border border-white/5 mb-6 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
                <stat.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                <Counter value={stat.value} />
              </h3>
              <p className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
