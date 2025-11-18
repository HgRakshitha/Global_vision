export default function Footer() {
  return (
    <footer className="bg-[#02101e] border-t border-cyan-300/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 items-start gap-6 text-gray-300 text-sm">
          <div>
            <h3 className="text-cyan-300 font-semibold text-lg mb-2">
              Global Vision UAE
            </h3>
            <p className="leading-snug">
              Fast, compliant mainland & free zone company formation in the UAE.
            </p>
          </div>
          <div>
            <h4 className="text-cyan-200 font-semibold text-base mb-2">
              Quick Links
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="#packages" className="hover:text-cyan-300">
                  Packages
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:text-cyan-300">
                  Setup Process
                </a>
              </li>
              <li>
                <a href="#leadform-top" className="hover:text-cyan-300">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-200 font-semibold text-base mb-2">
              Contact
            </h4>
            <p>📍 Downtown Dubai</p>
            <p className="mt-1">
              📧{" "}
              <a
                href="mailto:info@globalvisionuae.com"
                className="hover:text-cyan-300"
              >
                info@globalvisionuae.com
              </a>
            </p>
            <p className="mt-1">
              📞{" "}
              <a href="tel:+9714 579 3444" className="hover:text-cyan-300">
                +9714 579 3444
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-cyan-200 font-semibold text-base mb-2">
              Legal
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>

            <h4 className="text-cyan-200 font-semibold text-base mt-4 mb-2">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/GlobalvisionUAE"
                className="hover:text-cyan-300"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/globalvision.ae/?igsh=Z2gwb21pZmw0dDlt#"
                className="hover:text-cyan-300"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/global-vision-business-hub/"
                className="hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} Global Vision UAE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
