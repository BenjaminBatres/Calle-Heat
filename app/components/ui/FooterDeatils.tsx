"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Links {
  name: string;
  path: string;
}

interface TProps {
  title: string;
  links?: Links[];
  details?: string[];
}
export default function FooterDeatils({ title, links, details }: TProps) {
  const [targetSection, setTargetSection] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
      setTargetSection("");
    }
  }, [targetSection]);

  const scrollToSection = (sectionId: string): void => {
    const section = document.querySelector(`${sectionId}`);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (href: string, sectionId: string): void => {
    if (pathname === "") {
      scrollToSection(sectionId);
    } else {
      setTargetSection(sectionId);
      router.push(href);
    }
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      <motion.h3
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
        className="text-3xl tracking-widest font-boordens"
      >
        {title}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          delay: 0.5,
          duration: 0.4,
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
        className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-2"
      >
        {details?.map((detail, id) => (
          <p key={id}>{detail}</p>
        ))}
        {links?.map((link, id) => (
          <Link
            key={id}
            href={link.path}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(`/${link.path}`, link.name);
              scrollToSection(link.name);
            }}
            className="lg:text-sm"
          >
            {link.name}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
