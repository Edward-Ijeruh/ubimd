import { ShieldCheck, CreditCard, BadgeCheck } from "lucide-react";

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 md:px-16 bg-[color:var(--off-white)] overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm ring-1 ring-[color:var(--teal)]/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
            </span>
            <span className="font-semibold">Pricing</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-[color:var(--text)]">
            Transparent pricing.
            <br />
            <em className="text-[color:var(--teal)] italic">
              Built for real healthcare access
            </em>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-[color:var(--text-mid)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose a plan that fits your needs. Whether it’s occasional care or
            full-time access, UbiMD scales with you.
          </p>

          {/* Trust line */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-10 text-sm w-full max-w-3xl mx-auto">
            {[
              {
                label: "Cancel anytime",
                icon: ShieldCheck,
              },
              {
                label: "No hidden fees",
                icon: BadgeCheck,
              },
              {
                label: "Secure payments",
                icon: CreditCard,
              },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[color:var(--teal-light)]/40 border border-[color:var(--border)] hover:bg-[color:var(--teal-light)] transition"
              >
                {/* icon bubble */}
                <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-white shadow-sm">
                  <Icon size={14} className="text-[color:var(--teal)]" />
                </span>

                <span className="font-medium text-xs md:text-sm text-[color:var(--text-mid)] leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-28 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Basic */}
            <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-sm hover:shadow-lg transition flex flex-col">
              <h3 className="font-serif text-2xl font-semibold">Basic</h3>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                Occasional consultations
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

              <button className="mt-8 w-full py-3 rounded-full border border-[color:var(--border)] font-medium hover:bg-gray-50 transition cursor-pointer">
                Get started
              </button>
            </div>

            {/* Standard */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[color:var(--teal)] to-blue-400 shadow-xl">
              <div className="relative rounded-3xl bg-white p-8 flex flex-col h-full">
                {/* badge */}
                <div className="absolute top-6 right-6 text-[10px] px-3 py-1 rounded-full bg-[color:var(--teal)] text-white font-semibold">
                  Most popular
                </div>

                <h3 className="font-serif text-2xl font-semibold">Standard</h3>
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
            <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-sm hover:shadow-lg transition flex flex-col">
              <h3 className="font-serif text-2xl font-semibold">Pro</h3>
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

              <button className="mt-8 w-full py-3 rounded-full border border-[color:var(--border)] font-medium hover:bg-gray-50 transition cursor-pointer">
                Go Pro
              </button>
            </div>
          </div>

          {/* bottom trust line */}
          <p className="text-center text-sm text-[color:var(--text-muted)] mt-12">
            All plans include secure video consultations and encrypted medical
            data handling.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 md:px-16 bg-[color:var(--teal-dark)] text-white overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wide mb-6 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Simple pricing. No hidden charges.
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">
            Start with a plan that
            <br />
            <span className="text-[color:var(--teal-light)] italic">
              works for you
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need occasional consultations or full-time access to
            care, UbiMD pricing is flexible, transparent, and built to scale
            with your needs.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-[color:var(--teal-dark)] px-8 py-3.5 rounded-full font-semibold shadow-lg hover:scale-[1.03] transition cursor-pointer">
              Choose a plan
            </button>

            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition backdrop-blur cursor-pointer">
              Compare pricing
            </button>
          </div>

          {/* trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <span>✔ Cancel anytime</span>
            <span>✔ No hidden fees</span>
            <span>✔ Secure payments</span>
            <span>✔ Upgrade or downgrade anytime</span>
          </div>

          {/* emotional footer line */}
          <p className="mt-10 text-white/50 text-xs">
            You only pay for the care you actually need.
          </p>
        </div>
      </section>
    </>
  );
}
