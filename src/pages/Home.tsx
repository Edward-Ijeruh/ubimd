"use client";

import { useEffect, useState } from "react";

import { Activity, ShieldCheck, Zap, Users } from "lucide-react";

export default function HomePage() {
  const heroImages = ["/home/hero-1.png", "/home/hero-2.png"];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="font-sans text-gray-900 bg-white"
      style={{ fontFamily: "var(--sans)" }}
    >
      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-30 pb-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="relative z-10 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm ring-1 ring-[color:var(--teal)]/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
            </span>
            <span className="font-semibold">Now available in Nigeria</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[color:var(--text)]">
            Healthcare that feels{" "}
            <span
              className="text-[color:var(--teal)] italic"
              style={{ fontFamily: "var(--serif)" }}
            >
              instant.
            </span>
          </h1>

          {/* Text */}
          <p className="text-[color:var(--text-mid)] text-base md:text-lg max-w-lg leading-relaxed">
            Talk to MDCN-verified doctors in minutes. No queues, no apps, no
            stress, just care when you need it.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full md:w-auto">
            <a
              href="https://app.ubimd.com/dashboard/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[color:var(--teal)] text-white px-6 py-3 rounded-full font-semibold shadow-[var(--shadow)] hover:scale-[1.02] transition cursor-pointer"
            >
              Book consultation
            </a>

            <a
              href="https://app.ubimd.com/dashboard/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-[color:var(--border)] text-[color:var(--teal-dark)] border border-[color:var(--teal)] px-6 py-3 rounded-full font-semibold hover:bg-[color:var(--teal-light)] transition cursor-pointer"
            >
              Become a doctor
            </a>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 text-sm text-[color:var(--text-mid)] w-full">
            {[
              { icon: ShieldCheck, label: "MDCN verified" },
              { icon: Zap, label: "Avg 40s match" },
              { icon: Users, label: "1,200+ consultations today" },
              { icon: Activity, label: "End-to-end secure calls" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[color:var(--teal-light)]/40 border border-[color:var(--border)] hover:bg-[color:var(--teal-light)] transition"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm">
                  <Icon size={16} className="text-[color:var(--teal)]" />
                </span>

                <span className="font-medium text-xs md:text-sm text-[color:var(--text-mid)] leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="relative z-10 flex justify-center items-center">
          {/* Image swap */}
          <div className="relative w-[320px] md:w-[520px] h-[420px] md:h-[520px] rounded-[36px] overflow-hidden shadow-[var(--shadow-lg)] bg-white border border-[color:var(--border)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--teal-light)]/20 via-transparent to-black/10 z-10 pointer-events-none" />

            {/* Images */}
            {heroImages.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  i === activeImage
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={src}
                  alt="Doctor consultation"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white">
              <p className="text-sm font-medium">
                Real consultations, real doctors
              </p>
              <p className="text-xs text-white/70 mt-1">
                Secure video care within minutes
              </p>

              {/* indicator dots */}
              <div className="flex gap-2 mt-3">
                {heroImages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeImage ? "w-6 bg-white" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-[color:var(--off-white)] py-28 px-6 md:px-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm ring-1 ring-[color:var(--teal)]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
              </span>
              <span className="font-semibold">Platform features</span>
            </div>

            <h2
              className="text-4xl  font-semibold md:text-6xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--serif)" }}
            >
              Everything you need.
              <br />
              <em className="italic text-[color:var(--teal)]">
                Nothing you don’t.
              </em>
            </h2>
          </div>

          {/* List */}
          <div className="space-y-32">
            {[
              {
                num: "01",
                tag: "Video Consultations",
                title: "Talk to a doctor instantly",
                desc: "Crystal-clear video calls that work even on low networks. No downloads, no waiting rooms.",
                bullets: [
                  "Optimised for 2G & 3G",
                  "No app required",
                  "End-to-end encrypted",
                  "Send prescriptions instantly",
                ],
                image: "/home/telemedicine.jpg",
              },
              {
                num: "02",
                tag: "Smart Matching",
                title: "Get matched in seconds",
                desc: "We connect you to the best available doctor based on your symptoms, language, and urgency.",
                bullets: [
                  "Language-aware matching",
                  "Real-time availability",
                  "Specialist-first routing",
                  "Manual selection option",
                ],
                image: "home/matching.jpg",
              },
              {
                num: "03",
                tag: "AI Medication",
                title: "Identify any drug with a photo",
                desc: "Upload a pill or package and get instant AI-powered identification with verified data.",
                bullets: [
                  "AI-powered recognition",
                  "NAFDAC cross-check",
                  "Dosage guidance",
                  "Doctor recommendation always",
                ],
                image: "home/scan.jpg",
              },
            ].map((f, i) => (
              <div
                key={f.num}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <div className="max-w-lg">
                  {/* Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="text-[64px] leading-none opacity-20"
                      style={{ fontFamily: "var(--serif)" }}
                    >
                      {f.num}
                    </span>

                    <div className="h-[1px] w-16 bg-[color:var(--border)]" />
                  </div>

                  {/* Tag */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] text-xs font-semibold mb-4">
                    {f.tag}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl md:text-4xl font-semibold leading-tight mb-4"
                    style={{ fontFamily: "var(--serif)", color: "var(--text)" }}
                  >
                    {f.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[color:var(--text-mid)] leading-relaxed mb-6">
                    {f.desc}
                  </p>

                  {/* Bullets */}
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm text-[color:var(--text-mid)]"
                      >
                        <span className="w-4 h-4 rounded-full bg-[color:var(--teal-light)] flex items-center justify-center text-[10px] text-[color:var(--teal)]">
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="relative flex justify-center">
                  {/* Glow */}
                  <div className="absolute w-[360px] h-[360px] bg-[color:var(--teal-light)] blur-[120px] opacity-50 rounded-full animate-pulse" />

                  {/* Card */}
                  <div className="relative w-full max-w-[420px] rounded-[28px] bg-white border border-[color:var(--border)] shadow-[var(--shadow-lg)] overflow-hidden group">
                    {/* Top bar */}
                    <div className="h-2 w-full bg-gradient-to-r from-[color:var(--teal)] to-blue-400" />

                    {/* Content */}
                    <div className="relative h-[320px] md:h-[380px] overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.tag}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 text-[10px] px-2 py-1 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] shadow-sm">
                      Live
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-28 px-6 md:px-16 overflow-hidden bg-[color:var(--teal-dark)]">
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2
              className="text-4xl md:text-6xl font-semibold leading-tight"
              style={{ fontFamily: "var(--serif)", color: "white" }}
            >
              Trusted across <em className="text-blue-300 italic">Nigeria</em>
            </h2>

            <p className="mt-4 text-white/70 text-sm md:text-base">
              Real stories from patients using UbiMD every day
            </p>
          </div>

          {/* List */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I booked a consultation in under a minute. No queues, no stress. This is how healthcare should work.",
                name: "Tunde A.",
                role: "Patient · Ibadan",
              },
              {
                quote:
                  "As a doctor, UbiMD helps me reach more patients without the chaos of physical queues.",
                name: "Dr. Kemi A.",
                role: "General Practitioner · Lagos",
              },
              {
                quote:
                  "Even on low data, the call was clear. I didn’t expect it to actually work this well.",
                name: "Zainab M.",
                role: "Patient · Kano",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="relative p-6 md:p-8 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
              >
                {/* Quote mark*/}
                <span
                  className="text-[64px] leading-none text-blue-300/30 block mb-4"
                  style={{ fontFamily: "var(--serif)" }}
                >
                  “
                </span>

                {/* Quote */}
                <p
                  className="text-lg leading-relaxed text-white/90 mb-6"
                  style={{ fontFamily: "var(--serif)" }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
                    {t.name[0]}
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-white/60">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* bottom highlight strip */}
          <div className="mt-16 flex justify-center">
            <div className="px-6 py-3 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur">
              ⭐ 4.5/5 average rating
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28 px-6 md:px-16 bg-[color:var(--off-white)]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm ring-1 ring-[color:var(--teal)]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
              </span>
              <span className="font-semibold">Pricing</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-[color:var(--text)]">
              Transparent pricing.
              <br />
              <em className="text-[color:var(--teal)] italic">No surprises.</em>
            </h2>

            <p className="mt-4 text-[color:var(--text-mid)] text-lg">
              Pay only for what you need. Cancel anytime.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Basic */}
            <div className="relative rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-sm hover:shadow-lg transition flex flex-col">
              <h3 className="font-serif text-2xl font-semibold text-[color:var(--text)]">
                Basic
              </h3>

              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                Occasional care
              </p>

              <div className="mt-6">
                <span className="text-4xl font-serif font-bold">₦5,000</span>
                <span className="text-sm text-[color:var(--text-muted)]">
                  {" "}
                  / month
                </span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-[color:var(--text-mid)] flex-1">
                {[
                  "1 consultation per month",
                  "Access to verified doctors",
                  "Secure video calls",
                  "Basic support",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[color:var(--teal-light)] flex items-center justify-center text-[10px] text-[color:var(--teal)]">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full py-3 rounded-full border border-[color:var(--border)] text-[color:var(--text)] font-medium hover:bg-gray-50 transition cursor-pointer">
                Get started
              </button>
            </div>

            {/* Standard */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[color:var(--teal)] to-blue-400 shadow-xl">
              <div className="rounded-3xl bg-white p-8 flex flex-col h-full">
                {/* Badge */}
                <div className="absolute top-4 right-4 text-[10px] px-3 py-1 rounded-full bg-[color:var(--teal)] text-white font-semibold">
                  Most popular
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[color:var(--text)]">
                  Standard
                </h3>

                <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                  For regular care
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-serif font-bold text-[color:var(--teal)]">
                    ₦10,000
                  </span>
                  <span className="text-sm text-[color:var(--text-muted)]">
                    {" "}
                    / month
                  </span>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-[color:var(--text-mid)] flex-1">
                  {[
                    "5 consultations per month",
                    "Priority doctor matching",
                    "AI medication tool access",
                    "Secure prescriptions",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[color:var(--teal-light)] flex items-center justify-center text-[10px] text-[color:var(--teal)]">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full py-3 rounded-full bg-[color:var(--teal)] text-white font-semibold shadow hover:scale-[1.02] transition cursor-pointer">
                  Start now
                </button>
              </div>
            </div>

            {/* Pro */}
            <div className="relative rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-sm hover:shadow-lg transition flex flex-col">
              <h3 className="font-serif text-2xl font-semibold text-[color:var(--text)]">
                Pro
              </h3>

              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                Full coverage
              </p>

              <div className="mt-6">
                <span className="text-4xl font-serif font-bold">₦15,000</span>
                <span className="text-sm text-[color:var(--text-muted)]">
                  {" "}
                  / month
                </span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-[color:var(--text-mid)] flex-1">
                {[
                  "Unlimited consultations",
                  "Instant priority matching",
                  "AI + medication insights",
                  "24/7 premium support",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[color:var(--teal-light)] flex items-center justify-center text-[10px] text-[color:var(--teal)]">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full py-3 rounded-full border border-[color:var(--border)] text-[color:var(--text)] font-medium hover:bg-gray-50 transition cursor-pointer">
                Go Pro
              </button>
            </div>
          </div>

          {/* subtle trust line */}
          <p className="text-center text-sm text-[color:var(--text-muted)] mt-10">
            No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 px-6 md:px-16 bg-[color:var(--teal-dark)] text-white">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wide mb-6 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available now across Nigeria
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            See a doctor today.
            <br />
            <span className="text-[color:var(--teal-light)] italic">
              No queue. No download.
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Speak to a licensed doctor in minutes. Whether it’s urgent or
            routine, care is always one tap away.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://app.ubimd.com/dashboard/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-[color:var(--teal-dark)] px-8 py-3.5 rounded-full font-semibold shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
            >
              Book Consultation
            </a>

            <a
              href="https://app.ubimd.com/dashboard/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-center backdrop-blur cursor-pointer"
            >
              Join as Provider
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <span>✔ 1,200+ consultations today</span>
            <span>✔ MDCN verified doctors</span>
            <span>✔ End-to-end encrypted</span>
          </div>
        </div>
      </section>
    </div>
  );
}
