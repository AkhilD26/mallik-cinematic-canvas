import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Heart, Users, Film, Sparkles, Image } from "lucide-react";
import portrait1 from "@/assets/portrait-1.jpg";
import professional1 from "@/assets/professional-1.jpg";
import wedding1 from "@/assets/wedding-1.jpg";
import restoration1 from "@/assets/restoration-1.jpg";
import event1 from "@/assets/event-1.jpg";
import studioInterior from "@/assets/studio-interior.jpg";

const services = [
  { title: "Portrait Photography", icon: Users, image: portrait1, desc: "Stunning portraits that capture your personality." },
  { title: "Professional Shoots", icon: Camera, image: professional1, desc: "Corporate headshots and professional photography." },
  { title: "Wedding Photography", icon: Heart, image: wedding1, desc: "Timeless wedding memories in cinematic style." },
  { title: "Photo Restoration", icon: Image, image: restoration1, desc: "Breathe new life into precious old photographs." },
  { title: "Event Photography", icon: Sparkles, image: event1, desc: "Complete coverage of your special celebrations." },
  { title: "Cinematic Films", icon: Film, image: studioInterior, desc: "Professional studio sessions and cinematic films." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-40 bg-[hsl(45,20%,96%)]">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground mb-6">What We Do</p>
          <h2 className="text-editorial">
            Our <span className="italic">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="img-hover group relative aspect-[4/3] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="overlay">
                <div className="overlay-text">
                  <service.icon size={20} className="text-white mb-2" />
                  <h3 className="font-display text-xl text-white mb-1">{service.title}</h3>
                  <p className="font-body text-xs text-white/70">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
