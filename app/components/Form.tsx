import * as motion from "motion/react-client";
export default function Form() {
  const inputFields = [
    {
      label: "Name",
      placeholder: "Name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
    {
      label: "Message",
      placeholder: "Write your message here...",
      type: "textarea",
      rows: 5,
      wrap: "soft",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: 0.6,
        duration: 0.4,
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
      className="bg-Asphalt-Black rounded-[10px] px-6 py-8 space-y-7 lg:order-1"
    >
      <h2 className="text-3xl tracking-widest">Send a Message</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {inputFields.map((field, id) => (
          <div key={id} className="flex flex-col gap-3 sm:nth-3:col-span-2">
            <label>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                className="border-2 p-5 outline-0"
                placeholder={field.placeholder}
                rows={field.rows}
                wrap={field.wrap}
              ></textarea>
            ) : (
              <input
                type={field.type}
                className="p-5 border-2 outline-0"
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </div>
      <button className="py-3 bg-chili-red w-full rounded-[10px] text-lg font-semibold hover:bg-Street-Corn-Yellow duration-300 cursor-not-allowed">
        Send
      </button>
    </motion.div>
  );
}
