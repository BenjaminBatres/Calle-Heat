"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const links = [
    {
      path: "#",
      name: "Home",
    },
    {
      path: "#schedule",
      name: "Schedule",
    },
    {
      path: "#menu",
      name: "Menu",
    },
    {
      path: "#about",
      name: "About Us",
    },
    {
      path: "#gallery",
      name: "Gallery",
    },
  ];

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.header
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed w-full top-4 sm:top-5 px-2.5"
    >
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-card-charcoal flex items-center justify-between max-w-400 mx-auto p-4.5 lg:p-6 rounded-[10px]"
      >
        <h1 className="text-4xl sm:text-5xl">
          <Link href={"/"} className="text-Warm-Cream">
            Calle Heat
          </Link>
        </h1>
        <ul className="flex items-center gap-5 lg:gap-8">
          {links.map((link, id) => (
            <li key={id} className="hidden lg:block">
              <Link
                href={link.path}
                className="text-lg font-medium text-Warm-Cream"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            href={"/contact"}
            className="hidden sm:block text-lg font-semibold bg-chili-red px-5 py-2.5 lg:py-3 rounded-[10px] text-Warm-Cream hover:bg-Street-Corn-Yellow duration-300"
          >
            Contact Us
          </Link>
          <Sidebar links={links} />
        </ul>
      </motion.nav>
    </motion.header>
  );
}
