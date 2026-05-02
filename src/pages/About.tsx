"use client";

import {
  ShieldCheck,
  Activity,
  Users,
  HeartPulse,
  Globe,
  Clock,
  Zap,
  Lock,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-[color:var(--text)]">
      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-28 pb-24  mx-auto text-center overflow-hidden bg-[color:var(--off-white)]">
        <div className="relative max-w-6xl mx-auto">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
            </span>
            <span className="font-semibold">About UbiMD</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl max-w-3xl mx-auto font-semibold leading-[1.05] tracking-tight text-[color:var(--text)]">
            Healthcare should feel{" "}
            <span className="text-[color:var(--teal)] italic">
              immediate and human
            </span>
          </h1>

          {/* Divider accent */}
          <div className="flex justify-center mt-6">
            <div className="h-[2px] w-16 bg-[color:var(--teal)] rounded-full" />
          </div>

          {/* Subtext */}
          <p className="mt-6 text-[color:var(--text-mid)] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            UbiMD was built to remove the friction between patients and care. No
            waiting rooms, no uncertainty, no unnecessary delays. Just direct,
            verified access to licensed doctors when it matters most.
          </p>

          {/* small value props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-8 text-sm text-[color:var(--text-mid)] w-full">
            {[
              {
                icon: ShieldCheck,
                label: "Verified medical professionals you can trust",
              },
              { icon: Zap, label: "Care delivered in minutes, not hours" },
              {
                icon: Lock,
                label: "Private and secure consultations end to end",
              },
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
      </section>

      {/* STORY */}
      <section className="px-6 md:px-16 py-28 relative overflow-hidden max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div className="space-y-8 relative flex flex-col items-center md:items-start text-center md:text-left">
            <div className="space-y-5 relative z-10 max-w-xl">
              {/* Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[color:var(--teal)] animate-pulse" />
                Our Story
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight text-[color:var(--text)]">
                Healthcare should never wait for{" "}
                <span className="text-[color:var(--teal)] italic">
                  permission
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-[color:var(--text-mid)] leading-relaxed">
                In many parts of Nigeria, getting medical help still depends on
                time, distance, and luck. Long queues, delayed appointments, and
                limited availability often stand between people and care.
              </p>

              <p className="text-[color:var(--text-mid)] leading-relaxed">
                UbiMD exists to remove that delay. We connect patients to
                verified doctors in minutes using reliable technology that
                adapts to real network conditions, not ideal ones.
              </p>

              <p className="text-[color:var(--text-mid)] leading-relaxed">
                We are not replacing hospitals. We are removing friction so care
                feels immediate, accessible, and more human when it is needed
                most.
              </p>

              {/* Highlight card */}
              <div className="mt-8 p-4 rounded-2xl border border-[color:var(--border)] bg-white shadow-sm">
                <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">
                  Every decision we make is guided by one belief. When someone
                  needs care, access should already be there.
                </p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute w-[340px] h-[340px] bg-[color:var(--teal-light)] blur-[120px] opacity-50 rounded-full" />

            {/* Card */}
            <div className="relative w-full max-w-[440px] rounded-[28px] overflow-hidden shadow-[var(--shadow-lg)] border border-[color:var(--border)] bg-white group">
              {/* Image */}
              <div className="h-[440px] overflow-hidden">
                <img
                  src="/home/telemedicine.jpg"
                  alt="Doctor consultation"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-sm font-medium">
                  Real consultations between patients and doctors
                </p>
                <p className="text-xs text-white/70 mt-1">
                  Secure, verified, and available within minutes
                </p>
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 right-4 text-[10px] px-3 py-1 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] shadow-sm">
                Live care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative bg-[color:var(--off-white)] py-28 px-6 md:px-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
              </span>
              <span className="font-semibold">Our Values</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-[color:var(--text)]">
              Principles that{" "}
              <span className="text-[color:var(--teal)] italic">
                shape care
              </span>
            </h2>

            <p className="mt-5 text-[color:var(--text-mid)] text-base md:text-lg leading-relaxed">
              Every decision on the platform is guided by these foundations.
              They define how care is delivered, experienced, and trusted.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Trust first",
                desc: "Every doctor is verified before joining the platform. Every interaction is protected so patients can focus on care, not caution.",
              },
              {
                icon: Clock,
                title: "Speed matters",
                desc: "Care should respond to need, not delay. We reduce waiting time so patients can connect to help when it actually matters.",
              },
              {
                icon: HeartPulse,
                title: "Human centered",
                desc: "Technology never replaces empathy. It supports it, ensuring every consultation still feels personal and attentive.",
              },
              {
                icon: Globe,
                title: "Accessible everywhere",
                desc: "Designed to work smoothly across devices and network conditions so quality care is not limited by environment.",
              },
              {
                icon: Activity,
                title: "Consistent quality",
                desc: "Every consultation follows the same standard so patients receive dependable care no matter when or where they connect.",
              },
              {
                icon: Users,
                title: "Shared responsibility",
                desc: "Better outcomes happen when doctors and patients communicate clearly and work together toward solutions.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative p-7 rounded-3xl border border-[color:var(--border)] bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* header row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[color:var(--teal-light)] flex items-center justify-center group-hover:scale-105 transition">
                    <Icon size={18} className="text-[color:var(--teal)]" />
                  </div>

                  <h3 className="font-semibold text-lg text-[color:var(--text)]">
                    {title}
                  </h3>
                </div>

                {/* description */}
                <p className="text-sm md:text-[15px] text-[color:var(--text-mid)] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="relative py-32 px-6 md:px-16 overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--teal-light)] text-[color:var(--teal-dark)] border border-[color:var(--teal)]/30 text-xs font-medium tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--teal)]"></span>
            </span>
            <span className="font-semibold">Our Impact</span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-serif text-4xl md:text-6xl font-semibold leading-[1.05] text-[color:var(--text)]">
            Healthcare that is already
            <br />
            <span className="text-[color:var(--teal)] italic">in motion</span>
          </h2>

          <p className="mt-5 text-[color:var(--text-mid)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Every second, people are connecting to verified doctors, getting
            answers, and moving from uncertainty to clarity.
          </p>

          {/* stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: "1,200+",
                label: "Consultations completed today",
                hint: "Across all specialties",
              },
              {
                value: "40s",
                label: "Average time to match",
                hint: "From request to doctor",
              },
              {
                value: "98%",
                label: "Patient satisfaction rate",
                hint: "Based on post visit feedback",
              },
              {
                value: "24/7",
                label: "Care availability",
                hint: "Doctors online at all times",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[color:var(--teal-light)]/40 to-transparent"
              >
                <div className="h-full rounded-3xl bg-white/70 backdrop-blur-xl border border-[color:var(--border)] p-6 shadow-sm hover:shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1">
                  {/* glow on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-[color:var(--teal-light)]/20 blur-xl" />

                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-serif font-semibold text-[color:var(--teal)]">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm font-medium text-[color:var(--text-mid)]">
                      {stat.label}
                    </div>

                    <div className="mt-2 text-[11px] text-[color:var(--text-muted)]">
                      {stat.hint}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* bottom micro line */}
          <div className="mt-14 text-sm text-[color:var(--text-muted)]">
            Real time platform metrics updated continuously
          </div>
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
            Access to care should feel
            <br />
            <span className="text-[color:var(--teal-light)] italic">
              simple and immediate
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need help now or want to be part of the network, UbiMD
            is built for you.
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
};

export default About;
