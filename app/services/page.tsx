import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import CTASection from "@/app/components/sections/CTASection";
import { SERVICES, CASE_STUDIES } from "@/app/lib/data";

export const metadata = {
  title: "Services — LEHETRE | Digital, Events & O2O",
  description: "Digital Strategy & Performance, Event Management & Production, O2O Brand Activation — LEHETRE delivers full-spectrum marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative py-28 overflow-hidden bg-diagonal">
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange opacity-40" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange opacity-40" />
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">What We Do</p>
            <h1 className="font-display text-white leading-none mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              OUR <span className="text-orange">SERVICES</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              Our approach emphasizes <span className="text-orange font-semibold">O2O innovation</span> — seamlessly integrating digital precision with live experiences to create campaigns that convert at every touchpoint.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        {SERVICES.map((service, idx) => {
          const related = CASE_STUDIES.filter(c => c.type.toLowerCase().includes(service.id === "digital" ? "digital" : service.id === "events" ? "event" : "o2o"));
          return (
            <section key={service.id} className={`relative py-24 overflow-hidden ${idx % 2 === 1 ? "bg-surface" : ""}`}>
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                  {/* Left: content */}
                  <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-display text-orange opacity-30" style={{ fontSize: "4rem", lineHeight: 1 }}>{service.number}.</span>
                      <div className="h-px flex-1 bg-divider" />
                    </div>
                    <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                      {service.title.toUpperCase()}
                    </h2>
                    <p className="text-muted mb-8 leading-relaxed">{service.description}</p>
                    <ul className="flex flex-col gap-5">
                      {service.items.map(item => (
                        <li key={item.label} className="flex gap-3">
                          <span className="text-orange mt-1 shrink-0">●</span>
                          <div>
                            <span className="text-white font-semibold">{item.label}: </span>
                            <span className="text-muted text-sm">{item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: related cases */}
                  <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-orange text-xs font-semibold tracking-widest uppercase mb-4">Related Work</p>
                    <div className="flex flex-col gap-4">
                      {related.length > 0 ? related.slice(0, 2).map(c => (
                        <div key={c.id} className="card-orange p-5">
                          <p className="text-orange text-sm font-semibold">{c.client}</p>
                          <p className="text-white font-bold mt-1">{c.title}</p>
                          <p className="text-orange text-sm mt-2 font-medium">{c.highlight}</p>
                          <p className="text-muted text-xs mt-1">{c.period}</p>
                        </div>
                      )) : (
                        <div className="card-orange p-5">
                          <p className="text-muted text-sm">More case studies coming soon.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <span className="section-watermark">{service.title.split(" ")[0].toUpperCase()}</span>
            </section>
          );
        })}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
