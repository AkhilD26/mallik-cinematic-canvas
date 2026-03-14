import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Briefcase, Heart, ImageIcon, PartyPopper, Camera } from "lucide-react";
import portrait1 from "@/assets/portrait-1.jpg";
import professional1 from "@/assets/professional-1.jpg";
import wedding1 from "@/assets/wedding-1.jpg";
import restoration1 from "@/assets/restoration-1.jpg";
import event1 from "@/assets/event-1.jpg";
import studioInterior from "@/assets/studio-interior.jpg";

const services = [
  { title: "Portrait Photography", icon: User, image: portrait1, desc: "Stunning portraits that capture your personality and essence." },
  { title: "Interview & Professional", icon: Briefcase, image: professional1, desc: "Corporate headshots and professional photos for your career." },
  { title: "Wedding Photography", icon: Heart, image: wedding1, desc: "Timeless wedding memories captured with cinematic beauty." },
  { title: "Photo Restoration", icon: ImageIcon, image: restoration1, desc: "Breathe new life into your precious old photographs." },
  { title: "Event Photography", icon: PartyPopper, image: event1, desc: "Complete coverage of your special events and celebrations." },
  { title: "Studio Photoshoots", icon: Camera, image: studioInterior, desc: "Professional studio sessions with high-end equipment." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 md:py-48 bg-darker-surface relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary/60 mb-8">Crafting Excellence</p>
          <h2 className="text-huge text-foreground">
            OUR <span className="gold-text-gradient italic">OFFERINGS</span>
          </h2>
          <p className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground/40 mt-4">
            Bespoke photography for the discerning client
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-primary/30 transition-all duration-500 glass-card"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <service.icon size={28} className="text-primary mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 max-w-xs">
                    {service.desc}
                  </p>
                </div>
                {/* Minimal Link */}
                <div className="mt-4 overflow-hidden h-6">
                  <span className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 block">
                    Learn More —
                  </span>
                </div>
              </div>

              {/* Shimmer Effect on Hover */}
              <div className="shimmer-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
