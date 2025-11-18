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
      className="relative py-14 px-6 bg-[linear-gradient(180deg,#031c2e,#043b5b)] overflow-hidden"
    >
      {/* ✨ Background Glow (subtle) */}
      <div className="absolute inset-0">
        <div className="absolute left-12 top-10 w-56 h-56 bg-[rgba(79,195,247,0.08)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute right-12 bottom-10 w-72 h-72 bg-[rgba(0,224,255,0.07)] rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* 🌟 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-10"
      >
        <h2 className="text-xl md:text-3xl font-bold text-[#e6f9ff] mb-2">
          Get 100% Ownership of Your UAE Business in 6 Steps
        </h2>
        <p className="text-[#b8e2f2] text-sm md:text-base max-w-2xl mx-auto">
          Simplified process - efficient, transparent, and fast.
        </p>
      </motion.div>

      {/* 🔹 Steps Grid */}
      <div className="relative z-10 grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="relative bg-[rgba(255,255,255,0.05)] border border-[rgba(79,195,247,0.2)] rounded-xl p-6 text-center shadow-[0_0_20px_rgba(79,195,247,0.1)] backdrop-blur-sm hover:shadow-[0_0_30px_rgba(79,195,247,0.2)] transition-all"
          >
            {/* 🔢 Step Number */}
            <div className="flex justify-center mb-3">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(79,195,247,0.3)",
                    "0 0 20px rgba(79,195,247,0.5)",
                    "0 0 10px rgba(79,195,247,0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00bcd4] to-[#4fc3f7] text-[#031c2e] text-base font-bold shadow-[0_0_10px_rgba(79,195,247,0.3)]"
              >
                {i + 1}
              </motion.div>
            </div>

            {/* 📋 Step Text */}
            <h3 className="text-base font-semibold text-[#e6f9ff] mb-1">
              {s.title}
            </h3>
            <p className="text-[#b8e2f2] text-xs leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
