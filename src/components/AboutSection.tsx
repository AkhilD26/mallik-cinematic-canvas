import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portrait1 from "@/assets/portrait-1.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="img-hover aspect-[3/4] rounded-sm"
          >
            <img src={portrait1} alt="Photographer" className="w-full h-full object-cover" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground mb-6">About Us</p>
            <h2 className="text-editorial mb-8">
              Capturing <span className="italic">Emotions</span> in Timeless Frames
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-sm leading-relaxed">
              <p>
                F8pro is a professional photography studio specializing in cinematic wedding photography, 
                portraits, and event coverage. Based in Jubilee Hills, Hyderabad.
              </p>
              <p>
                Our goal is to capture emotions and moments in a timeless cinematic style. 
                Under the creative direction of Sada garu, every session is crafted with care, 
                ensuring your unique persona is captured with unparalleled precision and soul.
              </p>
              <p>
                We believe in the power of authentic imagery — from candid snapshots to 
                meticulously composed portraits, every frame tells a story worth preserving.
              </p>
            </div>
            <a href="#contact" className="btn-primary mt-10 inline-flex">Get In Touch</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
