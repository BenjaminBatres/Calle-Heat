import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import data from "../../data/data.json";
export default function Socials() {
  return (
    <>
      <div className="flex items-center gap-2 text-Warm-Cream">
        <FaInstagram className="text-2xl" />
        <span className="text-sm">{data.brand.socials.instagram}</span>
      </div>
      <div className="flex items-center gap-2 text-Warm-Cream">
        <FaTiktok className="text-2xl" />
        <span className="text-sm">{data.brand.socials.tiktok}</span>
      </div>
      <div className="flex items-center gap-2 text-Warm-Cream">
        <FaFacebookF className="text-2xl" />
        <span className="text-sm">{data.brand.socials.twitter}</span>
      </div>
    </>
  );
}
