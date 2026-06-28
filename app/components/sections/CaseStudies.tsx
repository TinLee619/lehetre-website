import Link from "next/link";
import { CASE_STUDIES } from "@/app/lib/data";

export default function CaseStudies() {
  const featured = CASE_STUDIES.slice(0, 4);

  return (
    <section className="relative py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">Case Studies</p>
            <h2 className="font-display text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              OUR <span className="text-orange">WORK</span>
            </h2>
          </div>
          <Link href="/work" className="text-orange hover:text-white text-sm font-semibold transition-colors flex items-center gap-2">
            View All Projects <span>→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((c) => (
            <div key={c.id} className="group card-orange p-7 flex flex-col gap-4 hover:glow-orange transition-all">
              {/* Meta */}
              <div className="flex items-center justify-between">
                <span className="badge-orange">{c.type}</span>
                <span className="text-muted text-xs">{c.period}</span>
              </div>

              {/* Client + Title */}
              <div>
                <p className="text-orange text-sm font-semibold">{c.client}</p>
                <h3 className="text-white font-bold text-xl mt-1">{c.title}</h3>
              </div>

              {/* Highlight */}
              <p className="text-orange font-semibold text-sm">{c.highlight}</p>

              {/* Stats */}
              {c.stats.length > 0 && (
                <div className="flex gap-6 pt-2 border-t border-divider">
                  {c.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-orange" style={{ fontSize: "1.75rem" }}>{stat.value}</p>
                      <p className="text-muted text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Industry */}
              <p className="text-muted text-xs mt-auto">{c.industry}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <span className="section-watermark">CASE STUDIES</span>
    </section>
  );
}
