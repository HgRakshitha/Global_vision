import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/GV WHITE.png";
import heroImg from "../assets/dubai.jpg";

export default function Hero() {
  const [plan, setPlan] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const res = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          business,
          plan,
          source: "hero",
        }),
      });

      if (res.ok) {
        // RESET FORM FIELDS
        setFullName("");
        setEmail("");
        setPhone("");
        setBusiness("");
        setPlan("");

        // hide success text after 3 seconds
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (err) {
      console.error("Failed to send lead:", err);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
      {/* LOGO TOP LEFT */}
      <motion.img
        src={logo}
        alt="Global Vision"
        className="absolute top-6 left-6 w-40 md:w-48 z-30 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      />

      {/* BACKGROUND IMAGE */}
      <motion.img
        src={heroImg}
        alt="Dubai Skyline"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* GREEN TINT */}
      <motion.div
        className="absolute inset-0 bg-[#1cc7ac]/18 backdrop-blur-[1px]"
        animate={{ opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* FLOATING GLOWS */}
      <motion.div
        className="absolute top-24 left-10 w-72 h-72 bg-[#1cc7ac]/35 blur-[140px] rounded-full"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#5FE5CC]/35 blur-[160px] rounded-full"
        animate={{ y: [25, -25, 25] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* CONTENT GRID */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-10">
        {/* LEFT SECTION */}
        <div className="pt-28">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] max-w-xl">
            Start Your Company in UAE with Expert Guidance
          </h1>

          {/* PRICE */}
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

          {/* BULLETS */}
          <motion.ul
            className="mt-6 space-y-3 text-white tracking-wide drop-shadow max-w-md"
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
        </div>

        {/* FORM SECTION */}
        <motion.div
          id="lead-form-hero"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="ml-6 backdrop-blur-md bg-white/45 border border-white/40 
             shadow-xl rounded-xl p-6 w-full max-w-sm"
        >
          <h3 className="text-base font-semibold text-gray-900 text-center mb-2">
            Get a Free Consultation
          </h3>

          <p className="text-[11px] text-gray-700 text-center mb-4">
            Fill in your details – our consultants will contact you shortly.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* INPUTS */}
            <input
              className="form-input"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="form-input"
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-input"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="form-input"
              placeholder="What business do you want to start?"
              required
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
            />

            {/* DROPDOWN FIELD */}
            <label className="text-xs text-gray-800 font-medium block">
              When are you planning to set up your business?
            </label>

            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              required
              className="w-full mt-1 p-2.5 text-sm bg-white/70 backdrop-blur-sm 
              border border-[#1cc7ac]/40 text-gray-800 rounded-md 
              outline-none focus:border-[#1cc7ac]"
            >
              <option value="">Select an option</option>
              <option value="Immediately">Immediately</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="Later">Later</option>
            </select>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#1cc7ac] text-white rounded-lg font-semibold shadow-md 
                hover:bg-[#17b198] text-sm"
            >
              Get a Free Consultation
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
