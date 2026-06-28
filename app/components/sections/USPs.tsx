import { USPS } from "@/app/lib/data";

export default function USPs() {
  return (
    <section className="py-24 border-t border-divider">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">Why LEHETRE</p>
          <h2 className="font-display text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            WE DON'T FOLLOW TRENDS.<br />
            <span className="text-orange">WE LEAD THEM.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {USPS.map((u, i) => (
            <div key={u.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-orange font-display opacity-40" style={{ fontSize: "2rem" }}>
                  0{i + 1}
                </span>
                <div className="flex-1 h-px bg-divider" />
              </div>
              <h3 className="text-white font-bold text-lg">{u.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{u.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
