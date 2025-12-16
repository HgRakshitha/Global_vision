import { motion } from "framer-motion";
import logo from "../assets/GV WHITE.png";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const [selectedPlan, setSelectedPlan] = useState("");
  const [submittedFooter, setSubmittedFooter] = useState(false);

  const [footerName, setFooterName] = useState("");
  const [footerEmail, setFooterEmail] = useState("");
  const [footerPhone, setFooterPhone] = useState("");
  const [footerBusiness, setFooterBusiness] = useState("");

  const year = new Date().getFullYear();

  const handleFooterSubmit = async (e) => {
    e.preventDefault();
    setSubmittedFooter(true);
    try {
      const res = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: footerName,
          email: footerEmail,
          phone: footerPhone,
          business: footerBusiness,
          plan: selectedPlan,
          source: "footer",
        }),
      });

      if (res.ok) {
        // RESET FIELDS
        setFooterName("");
        setFooterEmail("");
        setFooterPhone("");
        setFooterBusiness("");
        setSelectedPlan("");

        // auto-hide message
        setTimeout(() => setSubmittedFooter(false), 3000);
      }
    } catch (err) {
      console.error("Footer lead failed:", err);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-[#051a16] pt-16 pb-10 border-t border-[#0b463b] overflow-hidden"
    >
      <motion.div
        animate={{ y: [-30, 30, -30], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute left-0 top-10 w-80 h-80 bg-[#20e0bc]/15 blur-[160px] rounded-full"
      />
      <motion.div
        animate={{ y: [30, -30, 30], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute right-0 bottom-10 w-80 h-80 bg-[#168f7a]/20 blur-[160px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 text-sm">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between hover:scale-[1.01] transition-transform"
        >
          <div className="space-y-5">
            <motion.img
              src={logo}
              alt="Global Vision UAE"
              className="w-44 md:w-52 brightness-95"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            />

            {/* Primary phone updated */}
            <motion.p
              whileHover={{ scale: 1.05, x: 4 }}
              className="flex items-center gap-2 text-[#dff8f2] cursor-default"
            >
              <span className="text-[#1cc7ac] text-lg">
                <FaPhone />
              </span>
              +9714 579 3444
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05, x: 4 }}
              className="flex items-center gap-2 text-[#dff8f2] cursor-default"
            >
              <span className="text-[#1cc7ac] text-lg">
                <FaPhone />
              </span>
              +971 50 419 3507
            </motion.p>

            <motion.p
              whileHover={{ scale: 1.05, x: 4 }}
              className="flex items-center gap-2 text-[#dff8f2] cursor-default"
            >
              <span className="text-[#1cc7ac] text-lg">
                <FaEnvelope />
              </span>
              info@globalvisionuae.com
            </motion.p>

            <motion.p
              whileHover={{ scale: 1.03, x: 4 }}
              className="flex items-start gap-2 text-[#dff8f2] leading-snug max-w-[260px]"
            >
              <FaMapMarkerAlt className="text-[#1cc7ac] mt-[2px]" />
              Ontario Tower-205 Al A'amal St-Business Bay-Dubai-United Arab
              Emirates
            </motion.p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            {[
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/971504193507",
                target: "_blank",
              },
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/GlobalvisionUAE",
                target: "_blank",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/globalvision.ae/",
                target: "_blank",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/company/global-vision-business-hub/",
                target: "_blank",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.25, y: -5, rotate: 2 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="w-9 h-9 flex items-center justify-center rounded-full text-white shadow-lg bg-[#1cc7ac] hover:shadow-[0_0_18px_#1cc7ac]"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-between"
        >
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="text-[#1cc7ac] font-semibold mb-3"
          >
            Our Dubai Office
          </motion.h3>

          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(28,199,172,0.35)",
            }}
            transition={{ duration: 0.4 }}
            className="rounded-xl overflow-hidden border border-white shadow-[0_8px_26px_rgba(255,255,255,0.2)] bg-[#07221d] h-[300px]"
          >
            <iframe
              width="100%"
              height="100%"
              className="brightness-95 contrast-110"
              title="Dubai Office Map"
              loading="lazy"
              style={{ border: 0 }}
              src="https://maps.app.goo.gl/tPSfi52ACSNyduM4A?g_st=aw"
            ></iframe>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-between"
        >
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="text-[#1cc7ac] font-semibold mb-3"
          >
            Start Your Business
          </motion.h3>

          <form className="space-y-3" onSubmit={handleFooterSubmit}>
            <motion.input
              placeholder="Your Name"
              whileFocus={{ scale: 1.02 }}
              className="w-full p-2.5 text-xs bg-[#07221d] border border-white text-white rounded-md 
                         placeholder:text-[#bcefe5] focus:border-white outline-none"
              value={footerName}
              onChange={(e) => setFooterName(e.target.value)}
              required
            />
            <motion.input
              placeholder="Your Email"
              type="email"
              whileFocus={{ scale: 1.02 }}
              className="w-full p-2.5 text-xs bg-[#07221d] border border-white text-white rounded-md 
                         placeholder:text-[#bcefe5] focus:border-white outline-none"
              value={footerEmail}
              onChange={(e) => setFooterEmail(e.target.value)}
              required
            />
            <motion.input
              placeholder="Your Phone"
              whileFocus={{ scale: 1.02 }}
              className="w-full p-2.5 text-xs bg-[#07221d] border border-white text-white rounded-md 
                         placeholder:text-[#bcefe5] focus:border-white outline-none"
              value={footerPhone}
              onChange={(e) => setFooterPhone(e.target.value)}
              required
            />
            <motion.input
              placeholder="What business do you want to start?"
              whileFocus={{ scale: 1.02 }}
              className="w-full p-2.5 text-xs bg-[#07221d] border border-white text-white rounded-md 
                         placeholder:text-[#bcefe5] focus:border-white outline-none"
              value={footerBusiness}
              onChange={(e) => setFooterBusiness(e.target.value)}
              required
            />

            <label className="text-[11px] text-[#dff8f2] font-medium block mt-1">
              When are you planning to set up your business?
            </label>

            <select
              className="w-full p-2.5 text-xs bg-[#07221d] border border-white text-white rounded-md 
                         focus:border-white outline-none"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              required
            >
              <option value="">Select an option</option>
              <option value="Immediately">Immediately</option>
              <option value="1 Month">Within 1 month</option>
              <option value="Later">Later</option>
            </select>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.08 }}
              className="w-full py-2.5 bg-[#1cc7ac] text-white font-bold text-xs rounded-md 
                         shadow-lg hover:bg-[#19b49a] hover:shadow-[0_0_20px_#1cc7ac]"
            >
              Get a Free Consultation
            </motion.button>
          </form>

          {submittedFooter && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#1cc7ac] text-center text-xs font-semibold mt-3"
            >
              Thank you! We will contact you shortly…
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-[#86e6d6] text-[11px] mt-8"
      >
        © {year} Global Vision UAE - All Rights Reserved
      </motion.p>
    </motion.footer>
  );
}
