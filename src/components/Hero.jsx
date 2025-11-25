import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp";
import heroVideo from "../assets/bg1.mp4";

export default function Hero() {
  const [plan, setPlan] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const options = ["Immediately", "Within 1 month", "Later"];

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#1cc7ac]/18 backdrop-blur-[1px]"></div>

      <div className="absolute top-24 left-10 w-72 h-72 bg-[#1cc7ac]/35 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#5FE5CC]/35 blur-[160px] rounded-full"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-10">
        {/* LEFT SIDE */}
        <div>
          <motion.img
            src={logo}
            className="w-44 md:w-56 mb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          />

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
            Start Your Company in UAE
            <br />
            with <span className="text-[#1cc7ac]">Expert Guidance</span>
          </h1>

          <motion.div
            className="flex items-center gap-3 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-white text-gray-800 px-3 py-1 rounded text-xs font-semibold">
              STARTING FROM
            </div>

            <div className="bg-[#1cc7ac] text-white px-4 py-2 text-xl font-bold rounded shadow-lg">
              AED 10,800
            </div>
          </motion.div>

          <motion.ul
            className="mt-6 space-y-3 text-white tracking-wide drop-shadow"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              "100% Ownership",
              "Trade License",
              "Bank Account Assistance",
              "Visa Support",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="text-[#1cc7ac] text-lg">✔</span> {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.a
            href="#lead-form-hero"
            whileHover={{ scale: 1.08 }}
            className="inline-block mt-8 px-10 py-3 
                       bg-gradient-to-r from-[#1cc7ac] to-[#17b198]
                       text-white rounded-xl font-semibold
                       shadow-[0_8px_25px_rgba(28,199,172,0.55)]
                       hover:shadow-[0_12px_40px_rgba(28,199,172,0.6)]
                       transition-all"
          >
            Get a Free Consultation
          </motion.a>
        </div>

        {/* RIGHT FORM BOX */}
        {/* RIGHT FORM BOX */}
        <motion.div
          id="lead-form-hero"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-md bg-white/40 
             border border-white/30 shadow-xl 
             rounded-xl p-6 w-full max-w-sm mx-auto"
        >
          <h3 className="text-base font-semibold text-gray-900 text-center mb-2">
            Get a Free Consultation
          </h3>

          <p className="text-[11px] text-gray-700 text-center mb-4">
            Fill in your details - our consultants will contact you shortly.
          </p>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);

              setTimeout(() => {
                window.open("https://wa.me/971504193507", "_blank");
              }, 2000);
            }}
          >
            <input className="form-input" placeholder="Full Name" required />
            <input
              className="form-input"
              placeholder="Email"
              type="email"
              required
            />
            <input className="form-input" placeholder="Phone Number" required />

            {/* NEW FIELD */}
            <input
              className="form-input"
              placeholder="What business do you want to start?"
              required
            />

            <label className="text-xs text-gray-800 font-medium block mt-1">
              When are you planning to set up your business?
            </label>

            <div className="grid grid-cols-3 gap-2">
              {options.map((option) => (
                <label
                  key={option}
                  onClick={() => setPlan(option)}
                  className={`radio-chip ${plan === option ? "active" : ""}`}
                >
                  {option}
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#1cc7ac] text-white rounded-lg font-semibold 
                 shadow-md hover:bg-[#17b198] text-sm"
            >
              Submit
            </button>
          </form>

          {submitted && (
            <p className="text-center text-[#1cc7ac] font-semibold mt-3 text-sm">
              Thank you! We will reach you shortly…
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
