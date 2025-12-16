import { motion } from "framer-motion";
import bgImg from "../assets/business-to-business.png";

export default function About() {
  const pkgs = [
    {
      title: "Freezone Business License – From AED 4,888",
      price: "AED 4,888",
      bullets: [
        "Business License",
        "Unlimited Shareholders",
        "Memorandum of Association (MoA)",
        "Bank Account Assistance",
        "5–10 Mix-and-Match Activities",
        "Commercial Registry and Lease Agreement",
      ],
    },
    {
      title: "Freezone Company Setup – From AED 10,800",
      price: "AED 10,800",
      bullets: [
        "Business License",
        "10 Mix-and-Match Activities",
        "Establishment Card",
        "Residence Visa",
        "Emirates ID",
        "Bank Account Assistance",
      ],
    },
    {
      title: "Mainland Business Setup – From AED 14,999",
      price: "AED 14,999",
      bullets: [
        "Professional License",
        "Establishment Card",
        "100% Ownership",
        "Local Sponsor",
        "Residence Visa",
        "Emirates ID",
        "Bank Account Assistance",
      ],
    },
  ];

  return (
    <section id="about" className="relative py-16 px-6 overflow-hidden">
      {/* 🎥 ANIMATED BACKGROUND IMAGE */}
      <motion.img
        src={bgImg}
        alt="Business Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-[#f4fffb]/60 backdrop-blur-[2px]"
        animate={{ opacity: [0.6, 0.72, 0.6] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Glows */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute left-10 top-8 w-60 h-60 bg-[#159E91]/25 blur-[130px] rounded-full"
      />
      <motion.div
        animate={{ y: [20, -25, 20] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute right-10 bottom-8 w-72 h-72 bg-[#5fe5cc]/25 blur-[150px] rounded-full"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#063d2e] mb-3">
          Choose Your Ideal Business Setup Plan
        </h2>
        <p className="text-[#2c6f61] text-base md:text-lg font-medium max-w-2xl mx-auto">
          Pick a package tailored to your business goals and start your UAE
          journey.
        </p>
      </motion.div>

      {/* Packages */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pkgs.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.06,
              y: -8,
              boxShadow:
                "0 18px 45px rgba(21,158,145,0.35), 0 8px 25px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.35 }}
            className="bg-white/75 backdrop-blur-md p-8 rounded-2xl 
           shadow-[0_12px_30px_rgba(0,0,0,0.15)]
           border border-[#159E91]/40 transition-all 
           flex flex-col justify-between min-h-[420px]"
          >
            <div>
              <h3 className="text-[#063d2e] text-lg font-semibold mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-[#159E91] text-xl font-bold mb-4">{p.price}</p>

              <ul className="text-[#063d2e] text-sm space-y-2 text-left mb-6">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#159E91] text-lg">•</span> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#lead-form-hero"
              className="mt-auto inline-block bg-[#159E91] text-white font-bold 
             py-3 px-6 rounded-full shadow-md hover:scale-105 
             transition-all duration-300 text-center"
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
