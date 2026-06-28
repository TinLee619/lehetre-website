import { SERVICES } from "@/app/lib/data";

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-display text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            OUR <span className="text-orange">SERVICES</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl text-lg leading-relaxed">
            Our approach emphasizes <span className="text-orange font-semibold">O2O innovation</span>, seamlessly integrating digital precision with live experiences to create campaigns that convert at every touchpoint.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.id} className="card-orange p-8 flex flex-col gap-5">
              {/* Number */}
              <span className="font-display text-orange opacity-30 leading-none" style={{ fontSize: "5rem" }}>
                {s.number}.
              </span>

              {/* Title */}
              <h3 className="font-display text-white leading-tight" style={{ fontSize: "1.75rem" }}>
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed">{s.description}</p>

              {/* Items */}
              <ul className="flex flex-col gap-3 mt-auto">
                {s.items.map((item) => (
                  <li key={item.label} className="text-sm text-muted leading-relaxed">
                    <span className="text-orange mr-2">●</span>
                    <span className="text-white font-semibold">{item.label}:</span>{" "}
                    {item.detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <span className="section-watermark">SERVICES</span>
    </section>
  );
}
