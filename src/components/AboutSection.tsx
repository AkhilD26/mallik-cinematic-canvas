import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Camera, Users, Award } from "lucide-react";
import studioInterior from "@/assets/studio-interior.jpg";
import portrait1 from "@/assets/portrait-1.jpg";

const stats = [
  { icon: Star, value: "4.8", label: "Rating" },
  { icon: Users, value: "92+", label: "Reviews" },
  { icon: Camera, value: "10+", label: "Years Experience" },
  { icon: Award, value: "6+", label: "Services" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Bespoke Image Layout */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img
                src={studioInterior}
                alt="F8pro Studio Interior"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
              className="absolute -bottom-16 -right-8 md:right-[-4rem] w-64 h-80 z-20 rounded-2xl overflow-hidden shadow-[-20px_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <img src={portrait1} alt="Portrait work" className="w-full h-full object-cover" />
              <div className="shimmer-overlay" />
            </motion.div>

            {/* Abstract Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border border-primary/20 rounded-full animate-pulse" />
            <div className="absolute top-1/2 -left-20 w-40 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rotate-45" />
          </div>

          {/* Text content */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden mb-4">
              <motion.p
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="font-body text-xs tracking-[0.4em] uppercase text-primary/60"
              >
                The Vision
              </motion.p>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight"
              >
                Philosophy of <span className="gold-text-gradient italic">Light</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-muted-foreground/80 font-body text-lg leading-relaxed font-light"
            >
              <p>
                F8pro stands at the intersection of cinematic artistry and modern technology. 
                Based in the heart of Jubilee Hills, our studio is a sanctuary for those 
                who seek more than just photographs—we tell stories through light.
              </p>
              <p>
                Under the creative direction of Sada garu, we employ a "couture" approach 
                to every session, ensuring your unique persona is captured with 
                unparalleled precision and soul.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-white/5"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-4xl font-light text-primary mb-1">{stat.value}</span>
                  <span className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
