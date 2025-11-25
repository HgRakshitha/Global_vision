import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <div className="floating-group">
      <a
        className="floating-btn whatsapp"
        href="https://wa.me/971504193507"
        target="_blank"
        rel="noreferrer"
        title="WhatsApp"
        style={{ backgroundColor: "#21C29A" }}
      >
        <FaWhatsapp size={22} color="#051625" />
      </a>

      <a
        className="floating-btn email"
        href="mailto:info@globalvisionuae.com"
        title="Email"
        style={{ backgroundColor: "#5FE5CC" }}
      >
        <FaEnvelope size={20} color="#051625" />
      </a>
    </div>
  );
}
