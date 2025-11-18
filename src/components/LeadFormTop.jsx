import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaBusinessTime,
} from "react-icons/fa";
import consultImg from "../assets/consulting.jpeg";

export default function LeadFormTop({ removeImage = false }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Immediately",
  });
  const [status, setStatus] = useState(null);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", plan: "Immediately" });
    } catch {
      setStatus("error");
    }
  };

  // ✨ FLOAT + PULSE + GLOW ANIMATION (same as bottom form)
  const floatPulse = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.015, 1],
      boxShadow: [
        "0 0 25px rgba(0,180,255,0.25)",
        "0 0 35px rgba(0,180,255,0.35)",
        "0 0 25px rgba(0,180,255,0.25)",
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="leadform-top"
      className="relative flex flex-col items-center justify-center py-12 px-6 
                 bg-[linear-gradient(180deg,#031c2e,#043b5b)] overflow-hidden"
    >
      {/* Glow BG */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-8 w-60 h-60 bg-[rgba(79,195,247,0.08)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute right-10 bottom-10 w-72 h-72 bg-[rgba(0,224,255,0.07)] rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-xl md:text-3xl font-bold text-[#e6f9ff] mb-1">
          Get a Free Consultation
        </h2>
        <p className="text-[#b8e2f2] text-xs md:text-sm">
          Fill in your details below - our consultants will reach out shortly.
        </p>
      </motion.div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 w-full max-w-6xl items-center">
        {/* LEFT IMAGE — floating + subtle pulse */}
        <motion.div
          variants={floatPulse}
          animate="animate"
          className="flex justify-center items-center"
        >
          <img
            src={consultImg}
            alt="Consultation"
            className="h-[380px] w-auto rounded-2xl object-cover 
            shadow-[0_0_30px_rgba(79,195,247,0.3)] border border-[rgba(79,195,247,0.25)]"
          />
        </motion.div>

        {/* RIGHT FORM — floating card */}
        <motion.div
          variants={floatPulse}
          animate="animate"
          className="relative bg-[rgba(255,255,255,0.08)] border border-[rgba(79,195,247,0.25)] 
                     rounded-2xl p-8 w-full max-w-md 
                     shadow-[0_0_40px_rgba(79,195,247,0.25)] 
                     backdrop-blur-sm mx-auto overflow-visible"
        >
          {/* Floating CTA Icons */}
          <div className="absolute -top-9 right-6 flex gap-3 z-30">
            <motion.a
              href="https://wa.me/+9714 579 3444"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] 
              text-white text-2xl shadow-lg border border-white/30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaWhatsapp />
            </motion.a>

            <motion.a
              href="mailto:info@globalvisionuae.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2196f3] 
              text-white text-2xl shadow-lg border border-white/30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2,
                delay: 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaEnvelope />
            </motion.a>
          </div>

          {/* FORM */}
          <form onSubmit={submit} className="space-y-4 mt-8">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-[#b8e2f2] mb-1 flex items-center gap-2">
                <FaUser className="text-[#4fc3f7]" /> Full Name
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={change}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-[rgba(3,18,37,0.45)] 
                border border-[rgba(79,195,247,0.25)] text-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-[#b8e2f2] mb-1 flex items-center gap-2">
                <FaEnvelope className="text-[#4fc3f7]" /> Email
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={change}
                placeholder="Enter your email address"
                className="w-full p-3 rounded-lg bg-[rgba(3,18,37,0.45)] 
                border border-[rgba(79,195,247,0.25)] text-white"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-[#b8e2f2] mb-1 flex items-center gap-2">
                <FaPhone className="text-[#4fc3f7]" /> Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={change}
                placeholder="+971 5x xxx xxxx"
                className="w-full p-3 rounded-lg bg-[rgba(3,18,37,0.45)] 
                border border-[rgba(79,195,247,0.25)] text-white"
              />
            </div>

            {/* Radio Buttons */}
            <div>
              <label className="block text-sm text-[#b8e2f2] mb-2 flex items-center gap-2">
                <FaBusinessTime className="text-[#4fc3f7]" />
                How soon are you planning to set up your business?
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                {["Immediately", "Within a month", "Later"].map((opt) => (
                  <label
                    key={opt}
                    className={`flex-1 text-center py-3 rounded-md cursor-pointer border transition-all duration-300 text-sm font-medium 
                      ${
                        form.plan === opt
                          ? "bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7] text-[#031c2e]"
                          : "bg-transparent text-[#b8e2f2] border border-[rgba(79,195,247,0.3)]"
                      }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={opt}
                      checked={form.plan === opt}
                      onChange={change}
                      className="hidden"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-2.5 bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7] 
                text-[#031c2e] font-bold rounded-full shadow-md hover:shadow-[0_0_20px_rgba(79,195,247,0.5)]"
              >
                {status === "sending" ? "Submitting..." : "Submit"}
              </motion.button>

              {status === "ok" && (
                <p className="text-green-400 mt-2 text-sm">
                  ✅ Thank you — we’ll contact you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 mt-2 text-sm">
                  ❌ Submission failed — try again.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
