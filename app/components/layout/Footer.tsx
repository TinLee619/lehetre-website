import Link from "next/link";
import { SITE } from "@/app/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <span className="font-logo text-orange text-xl tracking-widest">LEHETRE</span>
          <p className="text-muted text-sm mt-3 leading-relaxed">
            Lead the Trend, Ignite the Moment.<br />
            Where Digital Strategy Meets Live Experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-white font-semibold text-sm mb-4">Quick Links</p>
          <div className="flex flex-col gap-2">
            {[["About", "/about"], ["Services", "/services"], ["Work", "/work"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={href} href={href} className="text-muted hover:text-orange text-sm transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold text-sm mb-4">Contact</p>
          <div className="flex flex-col gap-2 text-sm text-muted">
            <a href={`tel:${SITE.phone}`} className="hover:text-orange transition-colors">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-orange transition-colors">{SITE.email}</a>
            <p>{SITE.address}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-divider">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-xs text-muted">
          <span>© 2026 LEHETRE. All rights reserved.</span>
          <a href={SITE.url} className="hover:text-orange transition-colors">{SITE.url}</a>
        </div>
      </div>
    </footer>
  );
}
