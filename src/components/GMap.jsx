import { FaMapMarkerAlt } from "react-icons/fa";

export default function GMap() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden
      bg-[rgba(18,52,71,0.55)]
      border border-[rgba(144,224,255,0.35)]
      backdrop-blur-xl shadow-[0_0_25px_rgba(0,180,255,0.25)]
      p-5"
    >
      <div className="flex items-center gap-2 mb-3">
        <FaMapMarkerAlt className="text-cyan-300 text-lg" />
        <h3 className="text-lg font-semibold text-cyan-200">
          Visit Our Office
        </h3>
      </div>

      <div className="rounded-xl overflow-hidden border border-[rgba(144,224,255,0.3)] h-[500px]">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          title="Dubai Office Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4258709838493!2d55.2731483150116!3d25.197197783893197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43341f48687d%3A0x7f8b302a1a458943!2sDowntown%20Dubai!5e0!3m2!1sen!2sae!4v1686571234567"
        ></iframe>
      </div>
    </div>
  );
}
