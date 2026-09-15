import Link from "next/link";
interface Links {
  path: string;
  name: string;
  setIsOpen: () => void;
}

export default function Links({ path, name, setIsOpen }: Links) {
  return (
    <li>
      <Link href={path} className="text-lg font-medium" onClick={setIsOpen}>
        {name}
      </Link>
    </li>
  );
}
