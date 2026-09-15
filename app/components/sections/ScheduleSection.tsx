import React from "react";
import data from "../../data/data.json";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import * as motion from "motion/react-client";
export default function ScheduleSection() {
  const contactDetails = [
    {
      icon: <FiPhoneCall />,
      info: "(406) X55-0120",
    },
    {
      icon: <CiMail />,
      info: "calleheat@gmail.com",
    },
  ];
  return (
    <section className="py-10 sm:py-20 lg:py-30 bg-Asphalt-Black px-5">
      <div className="max-w-400 mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: 0.2,
                duration: 0.2,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="text-4xl text-Warm-Cream font-boordens"
            >
              Calle Heat
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: 0.3,
                duration: 0.2,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="text-Warm-Cream text-6xl lg:text-7xl tracking-widest"
            >
              Bringing the Heat to Every Bite
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: 0.6,
                duration: 0.2,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="space-y-4 border-t border-Warm-Cream py-10 lg:py-0 lg:border-0"
            >
              <h3 className="text-Warm-Cream font-bold text-2xl">
                Opening Hours
              </h3>
              <ul className="flex justify-between flex-wrap gap-y-6 sm:gap-6">
                {data.hours.map((date, id) => (
                  <li
                    key={id}
                    className="space-y-2 text-Warm-Cream w-1/2 sm:w-auto"
                  >
                    <div className="font-bold text-lg">{date.days}</div>
                    <div className="text-sm">{date.time}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: 0.4,
                duration: 0.2,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="space-y-4 border-y border-Warm-Cream py-10 lg:py-0 lg:border-0"
            >
              <h3 className="text-Warm-Cream font-bold text-2xl">Schedule</h3>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4">
                {data.schedule.map((date, id) => (
                  <li key={id} className="space-y-2 text-Warm-Cream">
                    <div className="font-bold text-lg">{date.day}</div>
                    <div className="text-sm">{date.location}</div>
                    <div className="text-sm">{date.address}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: 0.7,
                duration: 0.4,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="space-y-4 border-b border-Warm-Cream py-10 lg:py-0 lg:border-0"
            >
              <h3 className="text-Warm-Cream font-bold text-xl">Contact Us</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-4">
                {contactDetails.map((detail, id) => (
                  <div
                    key={id}
                    className="flex items-center gap-2 text-Warm-Cream"
                  >
                    <span className="text-2xl">{detail.icon}</span>
                    <div className="text-sm">{detail.info}</div>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-Warm-Cream">
                  <FaInstagram className="text-2xl" />
                  <span className="text-sm">
                    {data.brand.socials.instagram}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-Warm-Cream">
                  <FaTiktok className="text-2xl" />
                  <span className="text-sm">{data.brand.socials.tiktok}</span>
                </div>
                <div className="flex items-center gap-2 text-Warm-Cream">
                  <FaFacebookF className="text-2xl" />
                  <span className="text-sm">{data.brand.socials.twitter}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
