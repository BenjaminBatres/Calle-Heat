import Image from "next/image";
import { motion } from "motion/react";
import { GiChiliPepper } from "react-icons/gi";

interface TMenu {
  idx: number;
  id: string;
  image: string;
  price: number;
  name: string;
  description: string;
  spiceLevel: number;
  category: string;
}

export default function MenuCard({
  idx,
  id,
  image,
  price,
  name,
  description,
  spiceLevel,
  category,
}: TMenu) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: idx * 0.15,
        duration: 0.25,
      }}
      className="space-y-4"
    >
      <figure className="border-6 border-Street-Corn-Yellow">
        <Image
          src={image}
          alt={id}
          height={400}
          width={400}
          loading="eager"
          className="max-h-90 sm:h-90 w-full object-cover"
          style={{ objectPosition: id === "taco-04" ? "right" : "center" }}
        />
      </figure>
      <div className="space-y-2.5">
        <div className="flex justify-between border-b border-Warm-Cream pb-2">
          <div>
            <h2 className="text-2xl tracking-widest text-Street-Corn-Yellow">
              {name}
            </h2>
            {spiceLevel !== 0 && (
              <>
                <p className="text-Street-Corn-Yellow font-bold flex items-center text-lg">
                  Spice level:{" "}
                  {new Array(spiceLevel).fill(0).map((_, id) => (
                    <GiChiliPepper key={id} className="text-3xl" />
                  ))}
                </p>
              </>
            )}
          </div>
          <p className="text-lg font-semibold text-Street-Corn-Yellow">
            ${price.toFixed(2)}
          </p>
        </div>
        <p className="text-Warm-Cream">{description}</p>
      </div>
    </motion.div>
  );
}
