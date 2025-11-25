import { useState } from "react";
import { motion } from "framer-motion";
import GMap from "./GMap";
import { FaUser, FaEnvelope, FaPhone, FaBusinessTime } from "react-icons/fa";

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
      y: [0, -6, 0],
      scale: [1, 1.01, 1],
      boxShadow: [
        "0 0 16px rgba(95,229,204,0.25)",
        "0 0 24px rgba(95,229,204,0.35)",
        "0 0 16px rgba(95,229,204,0.25)",
      ],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative py-14 px-6 bg-[#051625] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(95,229,204,0.06),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT FORM */}
        <motion.div
          variants={floatPulse}
          animate="animate"
          className="bg-[#0A2235]/95 border border-[rgba(95,229,204,0.35)]
                     backdrop-blur-xl p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-semibold text-white">
            Request a Consultation
          </h2>
          <p className="text-[#cfd7df] text-sm mt-2 mb-7">
            One of our business setup specialists will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-[#e5edf5] text-sm mb-2 block flex items-center gap-2">
                <FaUser className="text-[#5FE5CC]" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 bg-[#051625]/70 border border-[rgba(95,229,204,0.4)]
                           text-white rounded-lg focus:outline-none focus:border-[#5FE5CC]"
              />
            </div>

            <div>
              <label className="text-[#e5edf5] text-sm mb-2 block flex items-center gap-2">
                <FaEnvelope className="text-[#5FE5CC]" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 bg-[#051625]/70 border border-[rgba(95,229,204,0.4)]
                           text-white rounded-lg focus:outline-none focus:border-[#5FE5CC]"
              />
            </div>

            <div>
              <label className="text-[#e5edf5] text-sm mb-2 block flex items-center gap-2">
                <FaPhone className="text-[#5FE5CC]" /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+971 5x xxx xxxx"
                className="w-full p-3 bg-[#051625]/70 border border-[rgba(95,229,204,0.4)]
                           text-white rounded-lg focus:outline-none focus:border-[#5FE5CC]"
              />
            </div>

            <div>
              <label className="text-[#e5edf5] text-sm mb-3 block flex items-center gap-2">
                <FaBusinessTime className="text-[#5FE5CC]" /> How soon do you
                plan to start?
              </label>

              <div className="grid sm:grid-cols-3 gap-3">
                {["Immediately", "Within 1 month", "Later"].map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer text-center py-3 rounded-lg border text-sm
                      ${
                        form.plan === option
                          ? "bg-[#21C29A] text-[#051625] border-[#5FE5CC]"
                          : "bg-[#051625]/70 text-[#e5edf5] border-[rgba(95,229,204,0.4)] hover:bg-[#0b2636]"
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
              className="w-full bg-[#21C29A] text-white py-3 rounded-lg font-semibold 
                         hover:bg-[#1AA97F] transition"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* RIGHT MAP */}
        <motion.div variants={floatPulse} animate="animate">
          <GMap />
        </motion.div>
      </div>
    </section>
  );
}
