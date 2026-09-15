"use client";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Links from "./ui/Links";

interface Links {
  path: string;
  name: string;
}

interface TProps {
  links: Links[];
}

export default function Sidebar({ links }: TProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <RiMenuLine
        onClick={() => setIsOpen(true)}
        className="text-3xl cursor-pointer text-Warm-Cream"
      />
      <div
        className={`${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} fixed inset-0 bg-black/35`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed h-full w-[80%] sm:w-80 bg-card-charcoal text-Warm-Cream top-0 left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} duration-500`}
      >
        <div className="pt-10.5 pb-7.5 px-5 flex items-center justify-between">
          <h2 className="text-4xl">Calle Heat</h2>
          <IoMdClose
            className="text-3xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-7 px-5 py-5">
          {links.map((link, id) => (
            <Links
              key={id}
              name={link.name}
              path={link.path}
              setIsOpen={() => setIsOpen(false)}
            />
          ))}
          <Link
            href={"/contact"}
            className="text-lg font-semibold bg-chili-red px-8 py-4 rounded-[10px] text-Warm-Cream hover:bg-Street-Corn-Yellow duration-300 w-fit"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
}
