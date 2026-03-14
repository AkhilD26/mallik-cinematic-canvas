import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import wedding1 from "@/assets/wedding-1.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import professional1 from "@/assets/professional-1.jpg";
import event1 from "@/assets/event-1.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pb-24">
      {/* Irregular Photo Collage Grid */}
      <div className="px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[280px]"
        >
          <div className="img-hover col-span-2 row-span-2 rounded-sm">
            <img src={heroBg} alt="Cinematic Photography" className="w-full h-full object-cover" />
          </div>
          <div className="img-hover rounded-sm">
            <img src={wedding1} alt="Wedding" className="w-full h-full object-cover" />
          </div>
          <div className="img-hover row-span-2 rounded-sm">
            <img src={portrait1} alt="Portrait" className="w-full h-full object-cover" />
          </div>
          <div className="img-hover rounded-sm">
            <img src={professional1} alt="Professional" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Philosophy Text */}
      <div className="container mx-auto px-6 md:px-12 mt-24 md:mt-32 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground mb-6"
        >
          We see you...
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-editorial"
        >
          <span className="italic">You're someone who embraces </span>
          life's diversity: <span className="italic">Every Moment</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 space-y-4 text-muted-foreground font-body text-sm leading-relaxed max-w-2xl"
        >
          <p>Capturing the essence of life, from candid snapshots to meticulously composed portraits, and everything in between.</p>
          <p>Timeless compositions that transport you back to the heart of each memory, preserving the beauty of every experience.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-4 mt-12"
        >
          <a href="#portfolio" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
