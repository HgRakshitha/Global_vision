import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const data = [
    {
      name: "Ahmed Al Maktoum",
      role: "CEO, Dubai Properties",
      text: "A highly professional team. Global Vision made the entire business formation process smooth, transparent, and incredibly fast.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Founder, TechStart Dubai",
      text: "Their consultants guided me from start to finish. The Free Zone setup process was easy and efficient thanks to their support.",
      rating: 5,
    },
    {
      name: "Marco Rodriguez",
      role: "Director, International Trading LLC",
      text: "Very knowledgeable team. They provided complete banking and PRO support which saved us weeks of effort.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-[linear-gradient(180deg,#031c2e,#043b5b)] overflow-hidden text-center">
      {/* 🌌 Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 w-64 h-64 bg-[rgba(255,215,0,0.08)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute right-10 bottom-20 w-80 h-80 bg-[rgba(255,215,0,0.06)] rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* ✨ Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl font-bold text-[#e6f9ff] mb-12 drop-shadow-lg"
      >
        What Our Clients Say
      </motion.h2>

      {/* 💬 Testimonials */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[rgba(255,255,255,0.06)] 
              border border-[rgba(255,215,0,0.25)]
              rounded-2xl p-8
              shadow-[0_0_25px_rgba(255,215,0,0.15)]
              hover:shadow-[0_0_35px_rgba(255,215,0,0.3)]
              backdrop-blur-sm
              transition-all duration-500
              hover:scale-[1.03]
              text-left"
          >
            {/* ⭐ Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-[#FFD700]" size={20} />
              ))}
            </div>

            {/* Text */}
            <p className="italic text-[#b8e2f2] mb-6 leading-relaxed text-sm relative">
              <span className="text-[#FFD700] text-xl absolute -left-2 -top-2 opacity-80">
                “
              </span>
              {t.text}
              <span className="text-[#FFD700] text-xl opacity-80">”</span>
            </p>

            {/* 👤 Name + Role */}
            <div className="mt-2">
              <div className="text-[#FFD700] font-semibold text-base">
                {t.name}
              </div>
              <div className="text-[#b8e2f2] text-xs">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
