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
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="section-divider w-full mb-24" />
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <img
                src={studioInterior}
                alt="F8pro Studio Interior"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:right-[-2rem] w-48 h-64 z-20 shadow-2xl border-2 border-primary/30 rounded-sm overflow-hidden"
            >
              <img src={portrait1} alt="Portrait work" className="w-full h-full object-cover" />
            </motion.div>
            {/* Decorative gold line */}
            <div className="absolute top-8 -left-4 w-24 h-[2px] gold-gradient" />
            <div className="absolute top-8 -left-4 w-[2px] h-24 gold-gradient" />
          </div>

          {/* Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
            >
              About Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6"
            >
              About <span className="gold-text-gradient">F8pro</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-muted-foreground font-body leading-relaxed"
            >
              <p>
                F8pro is a premier photography studio located in Jubilee Hills, Hyderabad.
                With a 4.8 rating and 92+ reviews, we are dedicated to capturing your most
                precious moments with cinematic excellence.
              </p>
              <p>
                Lead photographer Sada garu is known for his passionate and marvelous
                work, providing professional guidance to make every client feel comfortable
                and shine in front of the camera.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon size={24} className="text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="font-body text-xs tracking-wider uppercase text-muted-foreground">{stat.label}</div>
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
