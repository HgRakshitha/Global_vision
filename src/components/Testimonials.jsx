import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import testimonialBg from "../assets/star.jpg";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aida Kalantaryan",
      date: "2 weeks ago",
      text: `I had excellent experience with Global Vision Business Hub. They did the whole process to gain my trade license in UAE smooth and free.
      Fond thanks to the team because of their exceptional support. From start until finish, they were professional, sensitive and genuinely helpful. Their guidance made a big difference, and I always felt me in good hands.`,
      short:
        "Excellent experience with Global Vision… very professional and helpful…",
      initial: "A",
      rating: 5,
      color: "from-[#3a7bd5] to-[#00d2ff]",
    },
    {
      name: "Kasif Shaikh",
      date: "4 weeks ago",
      text: `Global Vision is an excellent partner with which are loved to work.
      Very structured, oriented to results, helpful, proactive, intelligent and always had to help! So only some hours after sending my first application, already received a response. The representative of the company was a very professional.
      It leaned us at all times and always it was available, even during a weekend.
      It is a pleasure and an honor for me work with them, since I value the professionalism and the toil.`,
      short:
        "Global Vision is an excellent partner… very structured and proactive…",
      initial: "K",
      rating: 5,
      color: "from-[#16d3b5] to-[#159E91]",
    },
    {
      name: "Mohsin Shaikh",
      date: "5 weeks ago",
      text: `I had a great experience with Global Vision Business Hub while setting up my business in the UAE. They handled everything from company registration to getting my Emirates ID and visa with complete professionalism and transparency. The entire process was smooth, well organized and completed much faster than I expected.

      What I appreciated most was their honesty and clarity about the procedures and costs no hidden charges, just straightforward and reasonable pricing. The team was always available to answer my questions and guide me through every step.

      I highly recommend Global Vision Business Hub to anyone looking to start a business in the UAE. They truly make the process stress free and efficient!`,
      short:
        "Great experience with Global Vision… very honest, clear and fast…",
      initial: "M",
      rating: 5,
      color: "from-[#ff9966] to-[#ff5e62]",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="testimonials" className="relative py-16 px-6 overflow-hidden">
      {/* ⭐ Animated Background */}
      <motion.img
        src={testimonialBg}
        alt="Testimonials Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        animate={{ scale: [1, 1.07, 1], y: [-20, 20, -20] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a3f33]/60"></div>

      {/* Glows */}
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
            whileHover={{ scale: 1.07, y: -6 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-7 bg-white/90 backdrop-blur-md 
                       border border-[#159E91]/30 shadow-[0_14px_40px_rgba(0,0,0,0.35)] 
                       transition-all"
          >
            {/* Header */}
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

            {/* Stars */}
            <div className="flex items-center gap-2 mb-3">
              {[...Array(r.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 text-sm" />
              ))}
              <FaCheckCircle className="text-[#159E91] text-sm" />
            </div>

            {/* Text */}
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
