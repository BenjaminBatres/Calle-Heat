"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const links = [
    {
      path: "#home",
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (sidebarOpen) return;

    if (current > previous && current > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [targetSection, setTargetSection] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`${sectionId}`);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId: string) => {
    if (pathname === "/") {
      // Already on homepage → just scroll
      scrollToSection(sectionId);
    } else {
      // On another page → remember section, then go home
      setTargetSection(sectionId);
      router.push("/");
    }
  };

  useEffect(() => {
    if (pathname === "/" && targetSection) {
      scrollToSection(targetSection);
      setTargetSection("");
    }
  }, [pathname, targetSection]);

  return (
    <motion.header
      animate={{
        y: hidden && !sidebarOpen ? -140 : 0,
        opacity: hidden && !sidebarOpen ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed w-full top-4 sm:top-5 px-2.5 z-50"
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
                href={"/"}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
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
          <Sidebar
            links={links}
            isOpen={sidebarOpen}
            setIsOpen={setSidebarOpen}
          />
        </ul>
      </motion.nav>
    </motion.header>
  );
}
