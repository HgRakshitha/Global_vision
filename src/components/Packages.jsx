import pkgVid from "../assets/packages.mp4";

export default function Packages() {
  const pkgs = [
    {
      title: "Free Zone License",
      price: "AED 10,800",
      bullets: ["Trade license", "1 Visa", "Bank assistance", "PRO services"],
    },
    {
      title: "Mainland License",
      price: "AED 14,500",
      bullets: ["UAE-wide operation", "Government approvals", "Visa support"],
    },
    {
      title: "Offshore License",
      price: "AED 9,999",
      bullets: ["International operations", "Privacy", "Tax-friendly"],
    },
  ];

  return (
    <section
      id="packages"
      className="relative overflow-hidden flex flex-col items-center justify-center py-6 px-6 text-center" // ↓ reduced from py-20
    >
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={pkgVid} type="video/mp4" />
      </video>

      {/* 🩵 Subtle dark overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,37,0.6),rgba(3,18,37,0.9))]"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-[#e6f9ff] mb-3 drop-shadow-md">
            Choose Your Ideal Business Setup Plan
          </h2>
          <p className="text-[#b8e2f2] text-lg">
            Pick a package tailored to your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {pkgs.map((p, i) => (
            <div
              key={i}
              className="group relative bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[rgba(79,195,247,0.2)] rounded-2xl p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(79,195,247,0.3)]"
            >
              <div className="mb-7">
                <h3 className="text-2xl font-semibold text-[#e0f7fa] mb-3">
                  {p.title}
                </h3>
                <div className="text-[#4fc3f7] font-bold text-xl">
                  {p.price}
                </div>
              </div>

              <ul className="mb-8 text-[#cfeff8] text-sm leading-relaxed space-y-2 text-left">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#4fc3f7]">•</span> {b}
                  </li>
                ))}
              </ul>

              <a
                href="#leadform-top"
                className="block w-full py-3 rounded-full bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7] text-[#031c2e] font-bold shadow-md transition-all hover:shadow-[0_0_20px_rgba(79,195,247,0.4)] hover:scale-[1.02]"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-10 top-1/3 w-72 h-72 bg-[rgba(79,195,247,0.08)] rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute right-10 bottom-1/4 w-80 h-80 bg-[rgba(0,224,255,0.07)] rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );
}
