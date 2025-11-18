import { motion } from "framer-motion";
import heroVideo from "../assets/111239-690770604_medium.mp4"; // 🎥 Background video

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support video.
      </video>

      {/* 🩵 Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,37,0.85)_10%,rgba(3,18,37,0.7)_60%,rgba(3,18,37,0.9)_100%)]"></div>

      {/* ✨ Floating Glow Effects */}
      <div className="absolute top-16 left-16 w-72 h-72 bg-[rgba(79,195,247,0.08)] rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[rgba(0,224,255,0.07)] rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* 🌟 Hero Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 💰 Offer Tag */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#00bcd4]/20 to-[#4fc3f7]/20 text-[#cfeff8] border border-[rgba(79,195,247,0.3)] backdrop-blur-sm"
          >
            STARTING FROM AED 10,800
          </motion.div>

          {/* 🏙️ Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#e6f9ff] mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] leading-tight">
            Start Your Company in <span className="text-[#4fc3f7]">UAE</span>
          </h1>

          {/* 📄 Description */}
          <p className="text-[#cfeff8] text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            100% Ownership · Trade License · Bank Account Assistance · Visa
            Support - all handled by professionals who make your business setup
            journey smooth and stress-free.
          </p>

          {/* 🔘 Call-To-Action Buttons */}
          <div className="flex items-center justify-center gap-5 mt-4">
            <motion.a
              href="#leadform-top"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7] text-[#031c2e] shadow-[0_0_20px_rgba(79,195,247,0.4)] hover:shadow-[0_0_25px_rgba(79,195,247,0.5)] transition-all"
            >
              Get Free Consultation
            </motion.a>
            <motion.a
              href="#packages"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-8 py-3 rounded-full font-semibold text-[#b8e2f2] border border-[rgba(79,195,247,0.3)] hover:border-[rgba(79,195,247,0.6)] hover:bg-[rgba(255,255,255,0.05)] transition-all"
            >
              View Packages
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
