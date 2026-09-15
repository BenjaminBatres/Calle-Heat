import Image from "next/image";
import data from "../../data/data.json";
import * as motion from "motion/react-client";
export default function GallerySection() {
  const gallery = data.gallery;
  return (
    <section id="gallery" className="py-15 sm:py-20 px-5 bg-chili-red">
      <div className="max-w-400 mx-auto space-y-6 sm:space-y-10">
        <div className="flex flex-col items-center gap-4">
          <motion.h3
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            className="text-Warm-Cream font-bold uppercase tracking-widest text-xs px-3 py-1 bg-Asphalt-Black rounded-full w-fit"
          >
            Street Food
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.3,
              duration: 0.4,
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            className="text-7xl md:text-8xl lg:text-[100px] leading-[100%] text-Warm-Cream mb-2"
          >
            Gallery
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-90 sm:auto-rows-112">
          {gallery.map((gal, id) => (
            <motion.figure
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + id * 0.1 * 1,
                duration: 0.25,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              key={id}
              className="md:nth-1:col-span-2 md:nth-6:col-span-2 lg:nth-11:col-span-2 border-6 border-Street-Corn-Yellow"
            >
              <Image
                src={gal}
                alt=""
                width={500}
                height={500}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
