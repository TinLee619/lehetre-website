import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import CTASection from "@/app/components/sections/CTASection";
import { CASE_STUDIES } from "@/app/lib/data";

export const metadata = {
  title: "Work — LEHETRE | Case Studies & Portfolio",
  description: "From 4.2x ROAS to 15,000+ event attendees — see how LEHETRE delivers measurable O2O results for ambitious brands.",
};

const CATEGORIES = ["All", "Digital Strategy & Performance", "Event Management", "O2O Brand Activation"];

export default function WorkPage() {
  const digital = CASE_STUDIES.filter(c => c.type.includes("Digital"));
  const events  = CASE_STUDIES.filter(c => c.type.includes("Event"));
  const o2o     = CASE_STUDIES.filter(c => c.type.includes("O2O"));

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative py-28 overflow-hidden bg-diagonal">
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange opacity-40" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange opacity-40" />
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">Portfolio</p>
            <h1 className="font-display text-white leading-none mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              OUR <span className="text-orange">WORK</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Results that speak for themselves — from performance campaigns to flagship brand events across Vietnam.
            </p>
          </div>
        </section>

        {/* Digital */}
        <CaseGroup title="Digital Strategy & Performance" watermark="DIGITAL" cases={digital} />

        {/* Events */}
        <CaseGroup title="Event Management & Production" watermark="EVENTS" bg cases={events} />

        {/* O2O */}
        <CaseGroup title="O2O Brand Activation" watermark="O2O" cases={o2o} />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}

function CaseGroup({ title, watermark, cases, bg }: { title: string; watermark: string; cases: typeof CASE_STUDIES; bg?: boolean }) {
  return (
    <section className={`relative py-24 overflow-hidden ${bg ? "bg-surface" : ""}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-white shrink-0" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            {title.toUpperCase()}
          </h2>
          <div className="flex-1 h-px bg-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map(c => (
            <div key={c.id} className="card-orange p-7 flex flex-col gap-5 group hover:glow-orange transition-all">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-orange text-sm font-semibold">{c.client}</p>
                  <h3 className="text-white font-bold text-xl mt-1">{c.title}</h3>
                </div>
                <span className="badge-orange shrink-0">{c.industry}</span>
              </div>

              {/* Period */}
              <p className="text-muted text-sm">{c.period}</p>

              {/* Highlight */}
              <p className="text-orange font-semibold">{c.highlight}</p>

              {/* Stats */}
              {c.stats.length > 0 && (
                <div className="flex flex-wrap gap-6 pt-4 border-t border-divider">
                  {c.stats.map(s => (
                    <div key={s.label}>
                      <p className="font-display text-orange" style={{ fontSize: "2rem" }}>{s.value}</p>
                      <p className="text-muted text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <span className="section-watermark">{watermark}</span>
    </section>
  );
}
