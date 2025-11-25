import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import testimonialBg from "../assets/star.jpg";

export default function Testimonials() {
  const reviews = [
    {
      name: "Menike Dona",
      date: "1 September 2025",
      text: `I was dealing with the institution and the officer assigned for my company is 
      Miss Vidushi Chaturvedi. Beyond exaggerations, I state that she always provided quick 
      support and guidance. Her professionalism made the entire process extremely smooth.`,
      short:
        "I was dealing with the institution… Miss Vidushi helped me a lot…",
      initial: "M",
      rating: 5,
      color: "from-[#16d3b5] to-[#159E91]",
    },
    {
      name: "Rohit Verma",
      date: "3 September 2025",
      text: `Amazing experience! The team handled everything—from trade license to banking—with speed and clarity.`,
      short: "Amazing experience! Everything was handled smoothly…",
      initial: "R",
      rating: 5,
      color: "from-[#3a7bd5] to-[#00d2ff]",
    },
    {
      name: "Aisha Khan",
      date: "5 September 2025",
      text: `The consultants were extremely cooperative. They helped me with PRO services and the visa process.`,
      short: "The consultants were extremely cooperative and helpful…",
      initial: "A",
      rating: 5,
      color: "from-[#ff9966] to-[#ff5e62]",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="testimonials" className="relative py-16 px-6 overflow-hidden">
      {/* ⭐ Animated Background (Parallax + Zoom) */}
      <motion.img
        src={testimonialBg}
        alt="Testimonials Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        animate={{
          scale: [1, 1.07, 1],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🌟 Soft moving gradient shine overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0a3f33]/40 via-transparent to-[#0a3f33]/40"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "300% 300%" }}
      ></motion.div>

      {/* Dark Overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#0a3f33]/60"></div>

      {/* Floating Glows */}
      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute left-10 top-10 w-64 h-64 bg-[#159E91]/30 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{ y: [20, -20, 20], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute right-10 bottom-10 w-72 h-72 bg-[#1CC7AC]/25 rounded-full blur-[160px]"
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-3xl md:text-4xl font-bold text-white mb-12"
      >
        What Our Clients Say
      </motion.h2>

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
              y: -6,
              boxShadow: "0 22px 55px rgba(21,158,145,0.45)",
            }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-7 bg-white/90 backdrop-blur-md 
                       border border-[#159E91]/30 shadow-[0_14px_40px_rgba(0,0,0,0.35)]
                       transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center 
                  text-lg font-bold text-white bg-gradient-to-br ${r.color} shadow-lg`}
                >
                  {r.initial}
                </div>

                <div>
                  <p className="text-[#063d2e] font-semibold text-lg">
                    {r.name}
                  </p>
                  <p className="text-gray-500 text-xs">{r.date}</p>
                </div>
              </div>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                className="w-7 opacity-80"
                alt="Google Logo"
              />
            </div>

            <div className="flex items-center gap-2 mb-3">
              {[...Array(r.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 text-sm" />
              ))}
              <FaCheckCircle className="text-[#159E91] text-sm" />
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {openIndex === i ? r.text : r.short}
            </p>

            <button
              onClick={() => toggle(i)}
              className="text-[#159E91] text-xs underline hover:text-[#0f7468]"
            >
              {openIndex === i ? "Read less" : "Read more"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
