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
            Built by {builder}.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">
            Platform
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/patients"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                For Patients
              </Link>
            </li>
            <li>
              <Link
                to="/providers"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                For Providers
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Blog
              </Link>
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
              <Link
                to="/about"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                About UbiMD
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Contact
              </Link>
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
              <Link
                to="/privacy"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/ndpr"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                NDPR Compliance
              </Link>
            </li>
            <li>
              <Link
                to="/cookies"
                className="text-white/60 hover:text-[#3b82f6] transition"
              >
                Cookie Policy
              </Link>
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
