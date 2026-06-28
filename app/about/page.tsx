import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import CTASection from "@/app/components/sections/CTASection";
import { FRAMEWORK_STEPS } from "@/app/lib/data";

export const metadata = {
  title: "About — LEHETRE | Lead The Trend",
  description: "We architect O2O marketing ecosystems that convert at every touchpoint — from performance campaigns to world-class event production.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative py-28 overflow-hidden bg-diagonal">
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange opacity-40" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange opacity-40" />
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">About Us</p>
            <h1 className="font-display text-white leading-none mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              WE DON'T JUST<br />
              EXECUTE <span className="text-orange">CAMPAIGNS.</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl leading-relaxed">
              We architect O2O marketing ecosystems that convert at every touchpoint — bridging the gap between digital precision and live experiences.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 border-t border-divider">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">Our Story</p>
              <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                FROM DIGITAL<br />TO <span className="text-orange">LIVE IMPACT</span>
              </h2>
              <div className="flex flex-col gap-4 text-muted leading-relaxed">
                <p>
                  At LEHETRE, we don't just execute campaigns — we architect O2O marketing ecosystems that convert at every touchpoint.
                </p>
                <p>
                  We bridge the gap between digital precision and live experiences, combining cutting-edge performance marketing with world-class event production to deliver measurable results for ambitious brands.
                </p>
                <p>
                  From viral online campaigns to immersive offline activations, we create seamless customer journeys that turn engagement into action, and moments into lasting business impact.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15K+", label: "Event Attendees" },
                { value: "4.2x", label: "Peak ROAS" },
                { value: "350%", label: "MQL Increase" },
                { value: "2026", label: "Proven Track Record" },
              ].map((s) => (
                <div key={s.label} className="card-orange p-6 flex flex-col gap-2">
                  <p className="font-display text-orange" style={{ fontSize: "2.5rem" }}>{s.value}</p>
                  <p className="text-muted text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">Our Vision</p>
              <h2 className="font-display text-white mb-8" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                PIONEERING <span className="text-orange">INNOVATION</span><br />THAT LEAVES IMPACT
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Our primary mission is to pioneer innovative event solutions that redefine industry standards, empowering brands and communities to connect in meaningful ways. By integrating cutting-edge technology with creative vision, we deliver experiences that inspire, engage, and leave a lasting impact on every participant.
              </p>
            </div>
          </div>
        </section>

        {/* 5-Step Framework */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">How We Work</p>
              <h2 className="font-display text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                OUR 5-STEP <span className="text-orange">FRAMEWORK</span>
              </h2>
              <p className="text-muted mt-3">Ensuring precision from the first insight to the final impact report.</p>
            </div>

            <div className="flex flex-col gap-4">
              {FRAMEWORK_STEPS.map((step, i) => (
                <div key={step.number} className="flex items-start gap-6 p-6 bg-surface border border-divider hover:border-orange rounded-lg transition-colors group">
                  <span className="font-display text-orange opacity-50 group-hover:opacity-100 transition-opacity shrink-0" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {i < FRAMEWORK_STEPS.length - 1 && (
                    <div className="ml-auto shrink-0 text-divider group-hover:text-orange transition-colors text-xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <span className="section-watermark">FRAMEWORK</span>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
