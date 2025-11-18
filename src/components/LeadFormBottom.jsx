import { useState } from "react";
import { motion } from "framer-motion";
import GMap from "./GMap";
import { FaUser, FaEnvelope, FaPhone, FaBusinessTime } from "react-icons/fa";
import bgVideo from "../assets/35344-405897623_medium.mp4";

export default function LeadFormBottom() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your inquiry was submitted successfully!");
    setForm({ name: "", email: "", phone: "", plan: "" });
  };

  const floatPulse = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.012, 1],
      boxShadow: [
        "0 0 20px rgba(0,180,255,0.2)",
        "0 0 28px rgba(0,180,255,0.3)",
        "0 0 20px rgba(0,180,255,0.2)",
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative py-14 px-6 overflow-hidden">
      {/* Blue Video Background */}
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover 
        brightness-[0.45] saturate-[1.4] hue-rotate-[190deg]"
      />

      <div className="absolute inset-0 bg-[rgba(9,35,52,0.55)] backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT — SMALLER FORM */}
        <motion.div
          variants={floatPulse}
          animate="animate"
          className="bg-[rgba(18,52,71,0.55)]
            border border-[rgba(144,224,255,0.35)]
            backdrop-blur-xl p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-semibold text-cyan-200">
            Request a Consultation
          </h2>

          <p className="text-gray-200 text-sm mt-2 mb-6">
            One of our specialists will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-100 text-sm mb-2 block flex items-center gap-2">
                <FaUser className="text-cyan-300" /> Full Name
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[rgba(4,28,45,0.6)]
                border border-[rgba(144,224,255,0.3)] text-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-gray-100 text-sm mb-2 block flex items-center gap-2">
                <FaEnvelope className="text-cyan-300" /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[rgba(4,28,45,0.6)]
                border border-[rgba(144,224,255,0.3)] text-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-gray-100 text-sm mb-2 block flex items-center gap-2">
                <FaPhone className="text-cyan-300" /> Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[rgba(4,28,45,0.6)]
                border border-[rgba(144,224,255,0.3)] text-white"
                placeholder="+971 5x xxx xxxx"
              />
            </div>

            <div>
              <label className="text-gray-100 text-sm mb-3 flex items-center gap-2">
                <FaBusinessTime className="text-cyan-300" /> When do you plan to
                start?
              </label>

              <div className="grid sm:grid-cols-3 gap-3">
                {["Immediately", "Within 1 month", "Later"].map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer text-center py-3 rounded-lg border text-sm
                    ${
                      form.plan === option
                        ? "bg-cyan-200 text-black border-cyan-300"
                        : "bg-[rgba(4,28,45,0.5)] text-gray-200 border-[rgba(144,224,255,0.25)] hover:bg-[rgba(13,47,66,0.6)]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={option}
                      checked={form.plan === option}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-300 text-black py-3 rounded-lg
              font-semibold hover:bg-cyan-200"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* RIGHT — SMALLER MAP */}
        <motion.div variants={floatPulse} animate="animate">
          <GMap />
        </motion.div>
      </div>
    </section>
  );
}
