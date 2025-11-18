export default function FloatingContact() {
  return (
    <div className="floating-group">
      <a
        className="floating-btn whatsapp"
        href="https://wa.me/971 50 419 3507"
        target="_blank"
        rel="noreferrer"
        title="WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.52 3.48A11.9 11.9 0 0012 .5C6.2.5 1.5 5.14 1.5 10.94c0 1.94.5 3.82 1.43 5.5L.5 23.5l7.4-2.03a11.9 11.9 0 005.6 1.35c5.8 0 10.5-4.64 10.5-10.44 0-2.8-1.08-5.4-3.03-7.38z"
            fill="#fff"
          />
        </svg>
      </a>

      <a
        className="floating-btn email"
        href="mailto:info@globalvisionuae.com"
        title="Email"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 6.5A2.5 2.5 0 015.5 4h13A2.5 2.5 0 0121 6.5v11A2.5 2.5 0 0118.5 20h-13A2.5 2.5 0 013 17.5v-11z"
            fill="#fff"
          />
          <path
            d="M5 7l7 5 7-5"
            stroke="#001422"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
