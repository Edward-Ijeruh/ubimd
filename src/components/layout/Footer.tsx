import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "UbiMD";
  const builder = "LanderCraft Technologies";

  return (
    <footer className="bg-[#060f0f] px-[5vw] pt-16 pb-8">
      <div className="max-w-7xl mx-auto border-b border-white/10 pb-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-[60px]">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center font-serif font-bold text-[#3b82f6] bg-white/10">
              Ub
            </div>
            <span className="font-serif text-2xl font-semibold text-[#3b82f6]">
              UbiMD
            </span>
          </Link>

          <p className="text-sm text-white/50 leading-7 mt-4 max-w-[280px]">
            Secure, accessible telemedicine for Nigeria. MDCN-verified doctors.
            Built by LanderCraft Technologies.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">
            Platform
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#features"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#providers"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                For Providers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                About UbiMD
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                LanderCraft Technologies
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                NDPR Compliance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/30">
        <div>
          © {currentYear} {companyName} · Built by {builder} · All rights
          reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
