import * as motion from "motion/react-client";
import Socials from "../ui/Socials";
import FooterDeatils from "../ui/FooterDeatils";

export default function Footer() {
  const footerDetails = [
    {
      title: "Quick Links",
      links: [
        {
          path: "/",
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
      ],
    },
    {
      title: "Street Hours",
      details: [
        "Tue - Thu: 5PM - 11PM",
        "Fri - Sat: 5PM - 2AM",
        "Sun: 4PM - 10PM",
      ],
    },
  ];
  return (
    <footer className="pt-20 pb-10 px-5 bg-Asphalt-Black text-Warm-Cream">
      <div className="max-w-400 mx-auto space-y-10">
        <div className="flex flex-col lg:flex-row justify-between gap-y-10">
          <div className="lg:w-[30%] space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: 0.2,
                duration: 0.4,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="text-5xl"
            >
              Calle Heat
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: 0.3,
                duration: 0.4,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="text-lg"
            >
              Weddings, corporate sessions, or private block parties. We bring
              the truck, live flame grill, and full menu setup.
            </motion.p>
            <motion.div
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
              className="flex flex-wrap gap-6"
            >
              <Socials />
            </motion.div>
          </div>
          <div className="lg:w-[35%] flex flex-col lg:flex-row lg:justify-between gap-6">
            {footerDetails.map((detail, id) => (
              <FooterDeatils
                key={id}
                title={detail.title}
                details={detail.details}
                links={detail.links}
              />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.4,
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
          className="flex flex-col gap-y-3 md:flex-row justify-between border-t pt-3"
        >
          <p className="text-sm text-center">
            CALLE HEAT &copy; {new Date().getFullYear()} — FIRE-GRILLED STREET
            TACOS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-sm uppercase text-center">Built for the street</p>
        </motion.div>
      </div>
    </footer>
  );
}
