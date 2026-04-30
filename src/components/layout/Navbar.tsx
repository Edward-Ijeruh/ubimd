import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "For Patients", href: "/patients" },
  { name: "For Providers", href: "/providers" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const languages = ["English", "Igbo", "Yoruba", "Hausa"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("English");

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = () => setLangOpen(false);
    if (langOpen) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [langOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-[50] bg-white/90 backdrop-blur border-b border-gray-200 px-[5vw] h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white font-serif font-bold text-sm">
            Ub
          </div>
          <span className="font-serif text-2xl font-semibold text-blue-900">
            UbiMD
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-600 text-sm font-medium hover:text-blue-500 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((p) => !p);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-600 cursor-pointer"
            >
              🌐 {lang} ▾
            </button>

            {langOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
              >
                {languages.map((l) => (
                  <div
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className="px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer"
                  >
                    {l}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop CTA */}
          <a
            href="#get-started"
            className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Get Started
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-end">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="w-full h-full bg-white shadow-2xl flex flex-col p-6"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white font-serif font-bold text-sm">
                    Ub
                  </div>
                  <span className="font-serif text-xl font-semibold text-blue-900">
                    UbiMD
                  </span>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 px-4 rounded-xl text-md font-medium text-gray-700 hover:bg-blue-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6 border-t border-gray-200 flex flex-col gap-3">
                <a
                  href="#get-started"
                  onClick={() => setMobileOpen(false)}
                  className="bg-blue-500 text-white py-3 rounded-xl text-center font-semibold"
                >
                  Get Started
                </a>

                <a
                  href="#providers"
                  onClick={() => setMobileOpen(false)}
                  className="border border-gray-200 py-3 rounded-xl text-center text-gray-700"
                >
                  Join as Provider
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
