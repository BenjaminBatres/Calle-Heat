import { useEffect, useState } from "react";
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
  isOpen: boolean;
  handleLinkCLick: (home: string, path: string) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  links,
  setIsOpen,
  isOpen,
  handleLinkCLick,
}: TProps) {
  // const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    }

    window.addEventListener("resize", handleResize);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
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
            <li key={id}>
              <Link
                href={link.path}
                className="text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkCLick("/", link.path);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            href={"/contact"}
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold bg-chili-red px-8 py-4 rounded-[10px] text-Warm-Cream hover:bg-Street-Corn-Yellow duration-300 w-fit"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
}
