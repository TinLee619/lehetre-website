import Link from "next/link";
import { SITE } from "@/app/lib/data";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-surface overflow-hidden bg-diagonal">
      {/* HUD corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-orange opacity-40" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-orange opacity-40" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">Ready to make impact?</p>
        <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
          LET'S CREATE SOMETHING{" "}
          <span className="text-orange">EXTRAORDINARY</span>
        </h2>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          From digital campaigns to live activations — LEHETRE builds the full O2O journey for your brand.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-orange hover:bg-orange-dark text-white font-semibold px-10 py-4 rounded transition-colors glow-orange"
          >
            Start a Project
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="border border-divider text-muted hover:border-orange hover:text-white font-semibold px-10 py-4 rounded transition-colors"
          >
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
