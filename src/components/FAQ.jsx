import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import faqVideo from "../assets/faq.mp4"; // your video

export default function FAQ() {
  const faqs = [
    {
      q: "What services does Global Vision UAE offer?",
      a: "We provide Mainland, Free Zone, and Offshore company formation, PRO services, visa assistance, trade license processing, documentation support, and corporate bank account setup guidance.",
    },
    {
      q: "How long does it take to start a company in Dubai?",
      a: "Most businesses are registered within 3–7 working days depending on the jurisdiction. We manage approvals and documentation to ensure a smooth and fast setup.",
    },
    {
      q: "Can I own 100% of my company in the UAE?",
      a: "Yes. The UAE permits 100% foreign ownership for most business activities. We help you choose the best structure for your business model.",
    },
    {
      q: "Does Global Vision UAE assist with visas and documentation?",
      a: "Yes. We handle investor, partner, and employee visas along with Emirates ID, medical tests, and related governmental documentation.",
    },
    {
      q: "Why choose Global Vision UAE for company formation?",
      a: "We offer transparent pricing, expert guidance, fast processing, and complete support from documentation to banking - making your setup process stress-free.",
    },
    {
      q: "Do you assist with bank account opening?",
      a: "Yes. We coordinate with major UAE banks, prepare documents, and guide you through compliance requirements for faster approval.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="relative py-16 px-6 overflow-hidden">
      {/* 🌆 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={faqVideo} type="video/mp4" />
      </video>

      {/* Green tinted overlay for readability */}
      <div className="absolute inset-0 bg-[#0b3d33]/70"></div>

      {/* Glow Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-10 w-64 h-64 bg-[#159E91]/22 rounded-full blur-[130px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 bottom-10 w-72 h-72 bg-[#159E91]/22 rounded-full blur-[150px]"
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-3xl md:text-4xl font-bold text-white mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* FAQ LIST */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 16px 40px rgba(21,158,145,0.35)",
            }}
            className="bg-white/90 backdrop-blur-lg rounded-xl 
                       border border-[#159E91]/30 
                       shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                       transition-all duration-300"
          >
            {/* Question */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-5 text-left"
            >
              <span className="text-[#063b2e] font-semibold text-lg">
                {faq.q}
              </span>

              <motion.span
                animate={{
                  rotate: openIndex === i ? 180 : 0,
                  scale: openIndex === i ? 1.2 : 1,
                }}
                transition={{ duration: 0.25 }}
                className="text-[#159E91]"
              >
                <FaChevronDown />
              </motion.span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="px-6 pb-5 text-[#055246] text-sm md:text-base leading-relaxed"
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
