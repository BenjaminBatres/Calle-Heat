import ContactCard from "../ContactCard";
import Form from "../Form";
import * as motion from "motion/react-client";
export default function ContactSection() {
  return (
    <section className="py-10 px-5 text-Warm-Cream bg-chili-red">
      <div className="max-w-400 mx-auto space-y-10">
        <div className="space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            className="font-bold uppercase tracking-widest text-xs px-3 py-1 border border-card-charcoal rounded-full w-fit"
          >
            Get in touch
          </motion.h3>
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.4,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="text-6xl tracking-wider"
            >
              Lock in the heat
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.4,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
            >
              Have a general question, street location inquiry, or want to host
              Calle Heat at your next event? Reach out directly below.
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xl:gap-10">
          <ContactCard />
          <Form />
        </div>
      </div>
    </section>
  );
}
