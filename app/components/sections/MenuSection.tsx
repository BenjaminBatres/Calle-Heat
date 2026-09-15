"use client";
import { useState } from "react";
import data from "../../data/data.json";
import MenuCard from "../ui/MenuCard";
import { AnimatePresence, motion } from "motion/react";
export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? data.menu
      : data.menu.filter((item) => item.category === activeCategory);
  return (
    <section id="menu" className="py-10 sm:py-20 px-5 bg-chili-red">
      <div className="max-w-400 mx-auto">
        <div className="flex flex-col items-center">
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
            className="text-Warm-Cream font-bold uppercase tracking-widest text-xs px-3 py-1 bg-Asphalt-Black rounded-full w-fit mb-4"
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
            Calle Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.4,
              duration: 0.4,
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            className="text-Warm-Cream font-medium mb-8 text-lg text-center"
          >
            Fresh masa, fire-grilled meats, and ret-hot salsas.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="flex items-center sm:justify-center gap-3 mb-10 flex-wrap"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-sm uppercase font-semibold cursor-pointer ${
              activeCategory === "all"
                ? "bg-Warm-Cream text-Asphalt-Black"
                : "bg-card-charcoal text-Warm-Cream hover:text-white"
            }`}
          >
            All Items
          </button>
          {data.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-display text-sm tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-Warm-Cream text-Asphalt-Black"
                  : "bg-card-charcoal text-Warm-Cream hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 xl:gap-x-10 gap-y-10 md:gap-y-15"
          >
            {filteredItems.map((item, idx) => (
              <MenuCard
                key={item.id}
                idx={idx}
                category={item.category}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                spiceLevel={item.spiceLevel}
                id={item.id}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
