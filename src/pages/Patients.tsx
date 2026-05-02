import { ShieldCheck, Signal, Smartphone } from "lucide-react";

export default function Patients() {
  return (
    <>
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

            <span className="font-semibold">For Patients</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[color:var(--text)]">
            Real medical care.
            <br />
            <span className="text-[color:var(--teal)] italic">
              Without the stress.
            </span>
          </h1>

          {/* Text */}
          <p className="text-[color:var(--text-mid)] text-base md:text-lg max-w-lg leading-relaxed">
            Skip the queues, the traffic, and the uncertainty. Speak to verified
            Nigerian doctors in minutes, from wherever you are.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full md:w-auto">
            <a
              href="https://app.ubimd.com/dashboard/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[color:var(--teal)] text-white px-6 py-3 rounded-full font-semibold shadow-[var(--shadow)] hover:scale-[1.03] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Start consultation
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto border border-[color:var(--border)] text-[color:var(--teal-dark)] border border-[color:var(--teal)] px-6 py-3 rounded-full font-semibold hover:bg-[color:var(--teal-light)] transition cursor-pointer"
            >
              How it works
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 text-sm w-full">
            {[
              {
                label: "MDCN verified doctors",
                icon: ShieldCheck,
              },
              {
                label: "Works on low data",
                icon: Signal,
              },
              {
                label: "No app needed",
                icon: Smartphone,
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

        {/* Right side */}
        <div className="relative">
          <img src="/patients/hero.jpg" className="rounded-[32px] shadow-2xl" />
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="relative bg-[color:var(--off-white)] py-28 px-6 md:px-16 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm ring-1 ring-[color:var(--teal)]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
              </span>
              <span className="font-semibold">How it works</span>
            </div>

            <h2
              className="text-4xl font-semibold md:text-6xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--serif)" }}
            >
              Getting care is
              <br />
              <em className="italic text-[color:var(--teal)]">
                simple and instant
              </em>
            </h2>
          </div>

          {/* List */}
          <div className="space-y-32">
            {[
              {
                num: "01",
                title: "Tell us what’s wrong",
                desc: "Answer a few quick questions about your symptoms and preferences.",
                sub: "Takes under 60 seconds. Designed for clarity, even if you’re unsure what’s wrong.",
                highlights: [
                  "Simple symptom checklist (no medical jargon)",
                  "Optional notes or voice input support",
                  "Language-friendly experience (English + local languages)",
                  "Works even on weak network connections",
                ],
                img: "form",
              },
              {
                num: "02",
                title: "Get matched instantly",
                desc: "We connect you to the best available doctor in seconds.",
                sub: "Our system prioritizes urgency, specialty, language, and real-time availability.",
                highlights: [
                  "MDCN-verified doctors only",
                  "Smart matching based on symptoms + specialty",
                  "Instant availability detection",
                  "Option to manually choose a doctor if preferred",
                ],
                img: "match",
              },
              {
                num: "03",
                title: "Start your consultation",
                desc: "Join your session directly in your browser. No downloads.",
                sub: "Your consultation happens securely in real time, audio, video, and chat all in one place.",
                highlights: [
                  "No app download required",
                  "Encrypted video consultations (end-to-end secure)",
                  "Low-bandwidth optimized (2G/3G friendly)",
                  "Instant prescription sharing after consultation",
                ],
                img: "video",
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
                  {/* Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="text-[64px] leading-none opacity-20"
                      style={{ fontFamily: "var(--serif)" }}
                    >
                      {step.num}
                    </span>
                    <div className="h-[1px] w-16 bg-[color:var(--border)]" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl md:text-4xl font-semibold leading-tight mb-4"
                    style={{
                      fontFamily: "var(--serif)",
                      color: "var(--text)",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[color:var(--text-mid)] leading-relaxed">
                    {step.desc}
                  </p>

                  <p className="text-[color:var(--text-muted)] text-sm mt-2 italic">
                    {step.sub}
                  </p>

                  <ul className="mt-5 grid grid-cols-2 gap-y-3 gap-x-6">
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
                  {/* Glow */}
                  <div className="absolute w-[360px] h-[360px] bg-[color:var(--teal-light)] blur-[120px] opacity-50 rounded-full animate-pulse" />

                  {/* Card */}
                  <div className="relative w-full max-w-[420px] rounded-[28px] bg-white border border-[color:var(--border)] shadow-[var(--shadow-lg)] overflow-hidden group">
                    {/* Top bar  */}
                    <div className="h-2 w-full bg-gradient-to-r from-[color:var(--teal)] to-blue-400" />

                    {/* Image */}
                    <div className="relative h-[320px] md:h-[380px] overflow-hidden">
                      <img
                        src={`/patients/${step.img}.jpg`}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      {/* Overlay*/}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 text-[10px] px-2 py-1 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] shadow-sm">
                      Step {step.num}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UbiMd */}
      <section className="py-28 px-6 md:px-16">
        {/* Left side */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/patients/nigeria.jpg"
              className="rounded-[28px] shadow-xl"
            />
          </div>

          {/* Right side */}
          <div className="space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm ring-1 ring-[color:var(--teal)]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
              </span>
              <span className="font-semibold">Designed for Nigeria</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
              Healthcare that fits
              <br />
              <span className="text-[color:var(--teal)] italic">
                how people actually live
              </span>
            </h2>

            {/* Story */}
            <p className="text-[color:var(--text-mid)] leading-relaxed text-base md:text-lg">
              From long hospital queues to unstable internet connections,
              accessing care in Nigeria has always been inconsistent. UbiMD
              removes that friction, making healthcare feel immediate, reliable,
              and human.
            </p>

            {/* Bullets  */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "Optimized for low bandwidth (2G/3G)",
                "Multilingual care: Yoruba, Hausa, Igbo, English",
                "Local payments via Paystack & Flutterwave",
                "No app download required",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-[color:var(--text-mid)]"
                >
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-[color:var(--teal-light)] flex items-center justify-center text-[10px] text-[color:var(--teal)]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Closing line */}
            <p className="pt-4 text-sm text-[color:var(--text-muted)]">
              Built specifically for Nigeria’s infrastructure, not adapted from
              Western systems.
            </p>
          </div>
        </div>
      </section>

      {/* AI medication tool */}
      <section className="relative py-28 px-6 md:px-16 overflow-hidden bg-[color:var(--off-white)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="relative z-10 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm ring-1 ring-[color:var(--teal)]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
              </span>
              <span className="font-semibold">AI Medication Tool</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
              Identify any medication
              <br />
              <span className="text-[color:var(--teal)] italic">
                in seconds with AI
              </span>
            </h2>

            {/* Description */}
            <p className="text-[color:var(--text-mid)] text-base md:text-lg leading-relaxed">
              Simply upload a photo of a pill or package. UbiMD instantly
              analyzes it using AI, cross-checks with verified NAFDAC data, and
              provides clear guidance on what it is, how it’s typically used,
              and safety information.
            </p>

            {/* Bullets */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "Instant pill & package recognition",
                "NAFDAC-verified drug matching",
                "Dosage & usage insights",
                "Doctor escalation recommended",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-[color:var(--text-mid)]"
                >
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-[color:var(--teal-light)] flex items-center justify-center text-[10px] text-[color:var(--teal)]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Safety note */}
            <div className="mt-6 p-4 rounded-xl border border-[color:var(--border)] bg-white">
              <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
                <span className="font-semibold text-[color:var(--text-mid)]">
                  Safety Notice:
                </span>{" "}
                This tool is for informational support only and does not replace
                professional medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute w-[380px] h-[380px] bg-[color:var(--teal-light)] blur-[120px] opacity-50 rounded-full animate-pulse" />

            {/* Card */}
            <div className="relative w-full max-w-[440px] rounded-[28px] bg-white border border-[color:var(--border)] shadow-[var(--shadow-lg)] overflow-hidden group">
              {/* Top bar */}
              <div className="h-2 w-full bg-gradient-to-r from-[color:var(--teal)] to-blue-400" />

              {/* Image */}
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src="/patients/scan.jpg"
                  alt="AI medication scan"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 right-4 text-[10px] px-2 py-1 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] shadow-sm">
                Powered by Gemini AI
              </div>

              {/* Bottom status strip */}
              <div className="p-4 border-t border-[color:var(--border)] flex items-center justify-between text-xs text-[color:var(--text-muted)] bg-white">
                <span>NAFDAC verified database</span>
                <span className="text-[color:var(--teal)] font-medium">
                  Secure scan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="relative py-28 px-6 md:px-16 bg-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm ring-1 ring-[color:var(--teal)]/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
            </span>
            <span className="font-semibold">Security & Compliance</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
            Your data is not just stored,
            <br />
            <span className="text-[color:var(--teal)] italic">
              it is protected at every layer
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-[color:var(--text-mid)] max-w-2xl mx-auto leading-relaxed">
            Healthcare data demands the highest level of trust. UbiMD is built
            with strict encryption, regulated compliance standards, and secure
            infrastructure designed specifically for medical-grade privacy.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
            {[
              {
                title: "AES-256 Encryption",
                desc: "All patient data is encrypted end-to-end using industry-grade security standards.",
              },
              {
                title: "NDPR Compliant",
                desc: "Fully aligned with Nigeria Data Protection Regulation for legal and ethical data handling.",
              },
              {
                title: "Secure Video Infrastructure",
                desc: "Consultations run on encrypted WebRTC channels with no third-party access.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-[color:var(--border)] bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--teal)]" />
                  <h3 className="font-semibold text-[color:var(--text)]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Reassurance */}
          <p className="mt-12 text-xs text-[color:var(--text-muted)]">
            Built for medical-grade privacy standards, not consumer-grade
            shortcuts.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 md:px-16 bg-[color:var(--teal-dark)] text-white overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wide mb-6 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available now across Nigeria
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">
            Healthcare should not feel
            <br />
            <span className="text-[color:var(--teal-light)] italic">
              difficult to access
            </span>
          </h2>

          {/* subtext */}
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether it’s a quick concern or something serious, you can speak to
            a licensed doctor in minutes, without queues, stress, or delays.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://app.ubimd.com/dashboard/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-[color:var(--teal-dark)] px-8 py-3.5 rounded-full font-semibold shadow-lg hover:scale-[1.03] transition cursor-pointer"
            >
              Talk to a doctor now
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition backdrop-blur cursor-pointer"
            >
              Learn how it works
            </a>
          </div>

          {/* trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <span>✔ MDCN verified doctors</span>
            <span>✔ Secure encrypted consultations</span>
            <span>✔ Avg response under 60 seconds</span>
          </div>

          {/* emotional footer line */}
          <p className="mt-10 text-white/50 text-xs">
            Built for moments when waiting is not an option.
          </p>
        </div>
      </section>
    </>
  );
}
