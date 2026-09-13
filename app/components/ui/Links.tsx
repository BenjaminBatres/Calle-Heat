import Link from "next/link";
import React from "react";
interface Links {
  path: string;
  name: string;
}

export default function Links({ path, name }: Links) {
  return (
    <li>
      <Link href={path} className="text-lg font-medium">
        {name}
      </Link>
    </li>
  );
}
