"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Impact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const stats = [
    {
      value: 1200,
      suffix: "+",
      label: "Consultations today",
    },
    {
      value: 40,
      suffix: "s",
      label: "Average match time",
    },
    {
      value: 98,
      suffix: "%",
      label: "Patient satisfaction",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Always available care",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-16 overflow-hidden">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--teal-light)]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-[color:var(--text)]">
          Already shaping better healthcare access
        </h2>

        <p className="mt-4 text-[color:var(--text-mid)] text-base md:text-lg max-w-2xl mx-auto">
          Real usage from real patients connecting to licensed doctors across
          Nigeria
        </p>

        {/* stats */}
        <div ref={ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative rounded-2xl bg-white border border-[color:var(--border)] shadow-[var(--shadow)] px-6 py-10 hover:scale-[1.02] transition duration-300"
            >
              {/* glow accent */}
              <div className="absolute inset-0 rounded-2xl bg-[color:var(--teal-light)]/10 opacity-0 hover:opacity-100 transition" />

              <div className="relative">
                <div className="text-3xl md:text-5xl font-serif font-semibold text-[color:var(--teal)]">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    0
                  )}
                </div>

                <div className="text-sm text-[color:var(--text-muted)] mt-3">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
