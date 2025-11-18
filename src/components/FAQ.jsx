import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      q: "How long does it take to set up a company in UAE?",
      a: "On average, it takes around 3–5 working days depending on your company type and document requirements.",
    },
    {
      q: "Can foreigners own 100% of the company?",
      a: "Yes — UAE allows 100% foreign ownership in many business sectors, making it ideal for global entrepreneurs.",
    },
    {
      q: "Do I need to be in the UAE to start the process?",
      a: "No — most of the setup process can be completed remotely with our expert assistance and digital verification tools.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 px-6 bg-[linear-gradient(180deg,#031c2e,#043b5b)] overflow-hidden">
      {/* 💫 Glowing Background */}
      <div className="absolute inset-0">
        <div className="absolute left-12 top-16 w-64 h-64 bg-[rgba(79,195,247,0.08)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute right-12 bottom-16 w-72 h-72 bg-[rgba(0,224,255,0.07)] rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* 🌟 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-2xl md:text-3xl font-bold text-[#e6f9ff] mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* 🧩 FAQ Accordion */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(79,195,247,0.25)] rounded-xl shadow-[0_0_20px_rgba(79,195,247,0.1)] hover:shadow-[0_0_25px_rgba(79,195,247,0.25)] backdrop-blur-sm transition-all duration-300"
          >
            {/* Question Header */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-[#e6f9ff] font-medium text-base md:text-lg">
                {faq.q}
              </span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#4fc3f7]"
              >
                <FaChevronDown />
              </motion.span>
            </button>

            {/* Answer Section */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-4 text-[#b8e2f2] text-sm md:text-base leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
