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
    <section id="services" className="py-24 md:py-32 bg-dark-surface relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="gold-text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-80 rounded-sm overflow-hidden cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/80 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <service.icon size={32} className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                  {service.desc}
                </p>
              </div>
              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
