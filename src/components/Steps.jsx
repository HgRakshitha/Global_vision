import { motion } from "framer-motion";

export default function Steps() {
  const steps = [
    {
      title: "Choose Your Company Type",
      desc: "Select from Mainland, Free Zone, or Offshore based on your goals.",
    },
    {
      title: "Company Name & Activity",
      desc: "We register your company name and approved business activities.",
    },
    {
      title: "Prepare Documents",
      desc: "Our team collects and verifies all necessary paperwork.",
    },
    {
      title: "Apply for Trade License",
      desc: "We handle application filing and authority approvals.",
    },
    {
      title: "Open Bank Account & Approvals",
      desc: "We assist in corporate bank account setup and clearances.",
    },
    {
      title: "Start Your Business",
      desc: "Once approved, your company goes live and fully operational.",
    },
  ];

  return (
    <section
      id="steps"
      className="relative py-16 px-6 bg-[linear-gradient(180deg,#f4fffb,#eafff6)] overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute left-10 top-8 w-60 h-60 bg-[#159E91]/20 blur-[130px] rounded-full"></div>
      <div className="absolute right-10 bottom-8 w-72 h-72 bg-[#5fe5cc]/20 blur-[150px] rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#063d2e] mb-3">
          Get 100% Ownership of Your UAE Business in 6 Steps
        </h2>
        <p className="text-[#2c6f61] text-base md:text-lg font-medium max-w-2xl mx-auto">
          Simplified process - efficient, transparent, and fast.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
              y: -8,
              boxShadow:
                "0 18px 45px rgba(21,158,145,0.35), 0 6px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.35 }}
            className="bg-[#159E91] p-8 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.15)] border border-[#159E91] text-center transition-all"
          >
            {/* Step Number */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255,255,255,0.35)",
                  "0 0 22px rgba(255,255,255,0.65)",
                  "0 0 10px rgba(255,255,255,0.35)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full 
                         bg-white text-[#159E91] font-extrabold text-lg shadow-md"
            >
              {i + 1}
            </motion.div>

            {/* Text */}
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
              {s.title}
            </h3>
            <p className="text-white/95 text-sm md:text-base font-medium leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
