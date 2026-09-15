import * as motion from "motion/react-client";
import Image from "next/image";
import AboutImg from "../../assets/about-img.jpg";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-10 sm:py-20 lg:py-30 px-5 bg-Asphalt-Black"
    >
      <div className="max-w-400 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: 0.2,
            duration: 0.4,
          }}
          className="space-y-4"
        >
          <div className="text-Warm-Cream font-bold uppercase tracking-widest text-xs px-3 py-1 border rounded-full w-fit">
            Our Roots
          </div>
          <h2 className="text-6xl md:text-7xl tracking-wide text-Warm-Cream">
            The Street Craft
          </h2>
          <p className="text-Warm-Cream sm:text-lg">
            Calle Heat was built on a simple promise: serve raw, authentic
            street-style tacos with zero compromise on quality. We skip pre-made
            sauces and mass production to keep our focus on high heat, fresh
            masa, and deep mesquite smoke.
          </p>
        </motion.div>
        <motion.figure
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: 0.2,
            duration: 0.4,
          }}
          className="max-h-100 md:max-h-full md:h-130 rounded-3xl overflow-hidden"
        >
          <Image
            src={AboutImg}
            alt=""
            loading="eager"
            className="size-full object-cover"
          />
        </motion.figure>
      </div>
    </section>
  );
}
