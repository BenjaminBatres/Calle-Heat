import HeroImg from "../../assets/HeroImg.jpg";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import * as motion from "motion/react-client";
export default function HeroSection() {
  return (
    <section className="bg-chili-red pt-32 sm:pt-40 lg:pt-45 pb-10 sm:pb-30 px-5">
      <div className="max-w-400 mx-auto grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-8 items-center lg:items-start">
          <div className="space-y-5">
            <motion.h3
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="text-lg sm:text-2xl text-Warm-Cream font-bold text-center lg:text-left"
            >
              Welcome to{" "}
              <span className="font-boordens font-normal text-2xl sm:text-3xl">
                Calle Heat
              </span>
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="text-6xl sm:text-7xl lg:text-[90px] xl:text-[100px] leading-[120%] text-Warm-Cream max-w-3xl text-center lg:text-left"
            >
              Where Street Food Meets the Heat
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
          >
            <Link
              href={"#menu"}
              className="text-lg font-semibold bg-card-charcoal px-6 sm:px-8 py-4 rounded-[10px] text-Warm-Cream hover:bg-Street-Corn-Yellow duration-300 flex items-center gap-3"
            >
              View Menu <MdOutlineRemoveRedEye className="text-2xl mt-0.5" />
            </Link>
          </motion.div>
        </div>
        <motion.figure
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="size-full"
        >
          <Image
            src={HeroImg}
            alt=""
            loading="eager"
            className="rounded-3xl h-full object-cover"
          />
        </motion.figure>
      </div>
    </section>
  );
}
