import { ShieldCheck, Users, Wallet } from "lucide-react";

export default function Providers() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-30 pb-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[color:var(--teal)] animate-pulse" />
            For Healthcare Providers
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            Grow your practice.
            <br />
            <span className="text-[color:var(--teal)] italic">
              Without limits.
            </span>
          </h1>

          {/* Text */}
          <p className="text-[color:var(--text-mid)] text-base md:text-lg max-w-lg leading-relaxed">
            Consult patients remotely, earn more flexibly, and manage your
            practice with powerful tools built for modern Nigerian healthcare.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full md:w-auto">
            <button className="bg-[color:var(--teal)] text-white px-6 py-3 rounded-full font-semibold shadow-[var(--shadow)] hover:scale-[1.03] transition cursor-pointer">
              Join as a provider
            </button>

            <button className="border border-[color:var(--border)] px-6 py-3 rounded-full  border border-[color:var(--teal)] font-semibold hover:bg-[color:var(--teal-light)] transition cursor-pointer">
              Learn more
            </button>
          </div>

          {/* Trust */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 text-sm w-full">
            {[
              { label: "MDCN verified onboarding", icon: ShieldCheck },
              { label: "Flexible remote earnings", icon: Wallet },
              { label: "Patient matching system", icon: Users },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[color:var(--teal-light)]/40 border border-[color:var(--border)]"
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-white shadow-sm">
                  <Icon size={14} className="text-[color:var(--teal)]" />
                </span>
                <span className="text-xs md:text-sm text-[color:var(--text-mid)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <img
            src="/providers/hero.jpg"
            className="rounded-[32px] shadow-2xl"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-[color:var(--off-white)] py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm ring-1 ring-[color:var(--teal)]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
              </span>
              <span className="font-semibold">How it works</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold">
              Start earning in{" "}
              <span className="text-[color:var(--teal)] italic">minutes</span>
            </h2>
          </div>

          {/* List (NOW properly constrained) */}
          <div className="space-y-32">
            {[
              {
                num: "01",
                title: "Complete onboarding",
                desc: "Submit your credentials and get verified by our medical team.",
                sub: "MDCN verification ensures only trusted professionals join the platform.",
                img: "onboard",
                highlights: [
                  "Fast digital verification",
                  "Specialty selection",
                  "Language preferences",
                  "Profile setup assistance",
                ],
              },
              {
                num: "02",
                title: "Get matched with patients",
                desc: "Our system sends patients directly to you based on specialty and availability.",
                sub: "No waiting rooms full of idle time, only relevant consultations.",
                img: "match",
                highlights: [
                  "Smart patient routing",
                  "Real-time availability",
                  "High-intent patients only",
                  "Manual accept/reject control",
                ],
              },
              {
                num: "03",
                title: "Consult & earn instantly",
                desc: "Deliver care via secure video and get paid seamlessly after sessions.",
                sub: "Payments are automated, transparent, and reliable.",
                img: "earn",
                highlights: [
                  "Instant payouts",
                  "Secure video consultations",
                  "Session history tracking",
                  "Flexible working hours",
                ],
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <div className="max-w-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="text-[64px] leading-none opacity-20"
                      style={{ fontFamily: "var(--serif)" }}
                    >
                      {step.num}
                    </span>
                    <div className="h-[1px] w-16 bg-[color:var(--border)]" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-[color:var(--text-mid)] mb-2">
                    {step.desc}
                  </p>

                  <p className="text-sm text-[color:var(--text-muted)] italic">
                    {step.sub}
                  </p>

                  <ul className="mt-5 grid grid-cols-2 gap-3">
                    {step.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-[color:var(--text-mid)]"
                      >
                        <span className="w-4 h-4 rounded-full bg-[color:var(--teal-light)] flex items-center justify-center text-[10px] text-[color:var(--teal)] mt-0.5">
                          ✓
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="relative flex justify-center">
                  <div className="absolute w-[360px] h-[360px] bg-[color:var(--teal-light)] blur-[120px] opacity-50 rounded-full animate-pulse" />

                  <div className="relative w-full max-w-[420px] rounded-[28px] overflow-hidden shadow-[var(--shadow-lg)] bg-white">
                    <div className="h-2 bg-gradient-to-r from-[color:var(--teal)] to-blue-400" />
                    <img
                      src={`/providers/${step.img}.jpg`}
                      className="h-[360px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why providers */}
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/providers/dashboard.jpeg"
            className="rounded-[28px] shadow-xl"
          />

          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold">
              Everything you need
              <br />
              <span className="text-[color:var(--teal)] italic">
                to run a modern practice
              </span>
            </h2>

            <p className="text-[color:var(--text-mid)] leading-relaxed">
              From patient management to analytics and earnings tracking, UbiMD
              gives providers a complete digital workspace designed for modern
              telemedicine.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "Real-time patient dashboard",
                "Automated earnings tracking",
                "Smart scheduling system",
                "Clinical analytics insights",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-[color:var(--text-mid)]"
                >
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-[color:var(--teal-light)] flex items-center justify-center text-[10px] text-[color:var(--teal)]">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 md:px-16 bg-[color:var(--teal-dark)] text-white overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wide mb-6 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Built for Nigerian healthcare providers
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">
            Practice medicine
            <br />
            <span className="text-[color:var(--teal-light)] italic">
              on your own terms
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Join verified doctors across Nigeria using UbiMD to deliver remote
            care, reduce idle time, and build a more flexible, high-quality
            practice.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-[color:var(--teal-dark)] px-8 py-3.5 rounded-full font-semibold shadow-lg hover:scale-[1.03] transition cursor-pointer">
              Become a provider
            </button>

            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition backdrop-blur cursor-pointer">
              Learn how it works
            </button>
          </div>

          {/* trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <span>✔ Verified MDCN doctors only</span>
            <span>✔ Flexible remote consultations</span>
            <span>✔ Automated secure payments</span>
          </div>

          {/* emotional footer line */}
          <p className="mt-10 text-white/50 text-xs">
            Built to give doctors control over time, income, and practice.
          </p>
        </div>
      </section>
    </>
  );
}
