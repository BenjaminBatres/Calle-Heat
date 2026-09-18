import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import data from "../data/data.json";
import * as motion from "motion/react-client";
export default function ContactCard() {
  const contactDetails = [
    {
      icon: <FiPhoneCall />,
      title: "Phone Number",
      info: "(213) 555-HEAT",
    },
    {
      icon: <IoMdMail />,
      title: "Email",
      info: "calleheat@gmail.com",
    },
  ];
  return (
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
      className="bg-Asphalt-Black rounded-[10px] px-6 py-8 space-y-7 order-2 lg:order-1"
    >
      <h2 className="text-3xl tracking-wider">Direct contact</h2>
      {contactDetails.map((detail, id) => (
        <div key={id} className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="text-2xl">{detail.icon}</div>
            <p className="font-semibold">{detail.title}</p>
          </div>
          <p>{detail.info}</p>
        </div>
      ))}
      <div className="flex flex-wrap gap-3">
        {data.schedule.map((date, id) => (
          <div
            key={id}
            className="space-y-2 text-Warm-Cream w-[48%] xl:w-[31%]"
          >
            <div className="font-bold text-lg">{date.day}</div>
            <div className="text-sm">{date.location}</div>
            <div className="text-sm">{date.address}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
