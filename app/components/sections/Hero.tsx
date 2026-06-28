import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-diagonal opacity-100" />

      {/* HUD corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange opacity-60" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange opacity-60" />

      {/* Orange line accent top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-orange" />
            <span className="text-orange text-sm font-semibold tracking-widest uppercase">O2O Marketing Agency</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-white leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
            LEAD THE{" "}
            <span className="text-orange">TREND.</span>
            <br />
            IGNITE THE{" "}
            <span className="text-orange">MOMENT.</span>
          </h1>

          {/* Subline */}
          <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Where Digital Strategy Meets Live Experiences — we architect O2O ecosystems that convert at every touchpoint.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-3.5 rounded transition-colors glow-orange"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="border border-orange text-orange hover:bg-orange hover:text-white font-semibold px-8 py-3.5 rounded transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: "15K+", label: "Event Attendees" },
              { value: "4.2x", label: "ROAS Delivered" },
              { value: "350%", label: "MQL Increase" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-orange" style={{ fontSize: "2.5rem" }}>{s.value}</p>
                <p className="text-muted text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
