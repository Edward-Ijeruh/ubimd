"use client";

import { Mail, MessageSquare, ShieldCheck, Clock, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white text-[color:var(--text)]">
      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-28 pb-24 text-center overflow-hidden bg-[color:var(--off-white)]">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[color:var(--teal-light)]/30 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[color:var(--teal)] animate-pulse" />
            Contact UbiMD
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            We are here when care
            <br />
            <span className="text-[color:var(--teal)] italic">
              needs direction
            </span>
          </h1>

          {/* Divider */}
          <div className="flex justify-center mt-6">
            <div className="h-[2px] w-16 bg-[color:var(--teal)] rounded-full" />
          </div>

          {/* Subtext */}
          <p className="mt-6 text-[color:var(--text-mid)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            For partnerships, support, provider inquiries, or platform
            questions, reach us directly. No automated delays, just real
            responses.
          </p>

          {/* Email card */}
          <div className="mt-10 flex justify-center">
            <a
              href="mailto:hello@ubimd.com"
              className="group relative w-full max-w-md block"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-[color:var(--teal-light)]/20 blur-xl opacity-0 group-hover:opacity-100 transition" />

              <div className="relative flex items-center justify-between px-5 py-4 rounded-2xl border border-[color:var(--border)] bg-white shadow-sm hover:shadow-[var(--shadow)] transition cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--teal-light)] flex items-center justify-center">
                    <Mail size={18} className="text-[color:var(--teal)]" />
                  </div>

                  <div className="text-left">
                    <p className="text-xs text-[color:var(--text-muted)]">
                      Email us
                    </p>
                    <p className="font-medium text-[color:var(--text)]">
                      hello@ubimd.com
                    </p>
                  </div>
                </div>

                <span className="text-xs text-[color:var(--teal)] font-semibold">
                  Active
                </span>
              </div>
            </a>
          </div>

          {/* Trust chips */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-[color:var(--text-mid)]">
            {[
              {
                icon: Clock,
                label: "Responses typically within 24 hours",
              },
              {
                icon: ShieldCheck,
                label: "Secure and verified communication",
              },
              {
                icon: Globe,
                label: "Support for patients and providers",
              },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[color:var(--teal-light)]/40 border border-[color:var(--border)]"
              >
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <Icon size={16} className="text-[color:var(--teal)]" />
                </div>

                <span className="text-xs md:text-sm font-medium leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="relative px-6 md:px-16 py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* left */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight">
                Every message matters when
                <span className="text-[color:var(--teal)] italic">
                  {" "}
                  health is involved
                </span>
              </h2>

              <p className="mt-5 text-[color:var(--text-mid)] leading-relaxed">
                Whether you are a patient needing clarity, a doctor joining the
                platform, or a partner exploring collaboration, we treat every
                message with urgency and care.
              </p>
            </div>

            {/* small feature cards */}
            <div className="space-y-3">
              {[
                {
                  icon: MessageSquare,
                  title: "Direct communication",
                  desc: "No ticket queues or automated bottlenecks",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure handling",
                  desc: "All messages handled with strict confidentiality",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-2xl border border-[color:var(--border)] bg-white hover:shadow-sm transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--teal-light)] flex items-center justify-center">
                    <Icon size={18} className="text-[color:var(--teal)]" />
                  </div>

                  <div>
                    <p className="font-semibold text-[color:var(--text)]">
                      {title}
                    </p>
                    <p className="text-sm text-[color:var(--text-mid)]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right visual card */}
          <div className="relative">
            {/* glow */}
            <div className="absolute w-[360px] h-[360px] bg-[color:var(--teal-light)] blur-[120px] opacity-50 rounded-full" />

            <div className="relative rounded-3xl border border-[color:var(--border)] bg-white shadow-[var(--shadow-lg)] overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-[color:var(--teal)] to-blue-400" />

              <div className="p-8 space-y-6">
                <div className="text-sm text-[color:var(--text-muted)]">
                  Typical inquiry types
                </div>

                <div className="space-y-3 text-sm">
                  {[
                    "Doctor onboarding support",
                    "Patient experience questions",
                    "Partnership opportunities",
                    "Technical assistance",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[color:var(--teal)]" />
                      <span className="text-[color:var(--text-mid)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[color:var(--border)] text-xs text-[color:var(--text-muted)]">
                  We do not use automated replies for critical healthcare
                  related communication
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
