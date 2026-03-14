import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait1 from "@/assets/portrait-1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.02]);

  return (
    <section id="about" className="py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image with parallax */}
          <motion.div
            ref={imgRef}
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="aspect-[3/4] rounded-sm overflow-hidden relative"
          >
            <motion.img
              style={{ y: imgY, scale: imgScale }}
              src={portrait1}
              alt="Photographer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text with staggered reveals */}
          <div>
            <motion.p
              custom={0.1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-body text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground mb-6"
            >
              About Us
            </motion.p>

            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-editorial"
              >
                Capturing <span className="italic">Emotions</span> in Timeless Frames
              </motion.h2>
            </div>

            {["F8pro is a professional photography studio specializing in cinematic wedding photography, portraits, and event coverage. Based in Jubilee Hills, Hyderabad.",
              "Our goal is to capture emotions and moments in a timeless cinematic style. Under the creative direction of Sada garu, every session is crafted with care, ensuring your unique persona is captured with unparalleled precision and soul.",
              "We believe in the power of authentic imagery — from candid snapshots to meticulously composed portraits, every frame tells a story worth preserving."
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={0.3 + i * 0.12}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="text-muted-foreground font-body text-sm leading-relaxed mb-5"
              >
                {text}
              </motion.p>
            ))}

            <motion.a
              href="#contact"
              custom={0.7}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary mt-5 inline-flex"
            >
              Get In Touch
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
