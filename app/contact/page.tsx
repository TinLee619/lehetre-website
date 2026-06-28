"use client";
import { useState } from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { SITE, SERVICES } from "@/app/lib/data";

const SERVICE_OPTIONS = ["Digital Strategy & Performance", "Event Management & Production", "O2O Brand Activation", "IMC / Branding", "Marketing Consulting", "Others"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: replace with EmailJS / Resend / form API
    await new Promise(r => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative py-28 overflow-hidden bg-diagonal">
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange opacity-40" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange opacity-40" />
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">Contact Us</p>
            <h1 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              LET'S CREATE<br /><span className="text-orange">SOMETHING</span><br />EXTRAORDINARY
            </h1>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 border-t border-divider">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

            {/* Left: Info */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-6">Get in Touch</p>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: "📞", label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
                    { icon: "✉️", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                    { icon: "📍", label: "Address", value: SITE.address, href: undefined },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-4 p-4 bg-surface border border-divider hover:border-orange rounded-lg transition-colors group">
                      <span className="text-xl shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-muted text-xs mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white text-sm group-hover:text-orange transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-white text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">Our Services</p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map(s => (
                    <span key={s} className="text-xs text-muted border border-divider px-3 py-1.5 rounded">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="card-orange p-8">
              <h2 className="font-display text-white mb-6" style={{ fontSize: "1.75rem" }}>START A PROJECT</h2>

              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <span className="text-5xl">✅</span>
                  <p className="text-white font-bold text-lg">Message Sent!</p>
                  <p className="text-muted text-sm">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="mt-4 text-orange text-sm hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-muted text-xs">Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Nguyễn Văn A"
                        className="bg-surface2 border border-divider focus:border-orange rounded px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-muted/50"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-muted text-xs">Phone *</label>
                      <input
                        required
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="0912 345 678"
                        className="bg-surface2 border border-divider focus:border-orange rounded px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-muted/50"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-muted text-xs">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="email@company.com"
                      className="bg-surface2 border border-divider focus:border-orange rounded px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-muted/50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-muted text-xs">Service Interested In</label>
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className="bg-surface2 border border-divider focus:border-orange rounded px-4 py-3 text-white text-sm outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-muted text-xs">Project Brief</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us about your project — goals, timeline, budget range..."
                      className="bg-surface2 border border-divider focus:border-orange rounded px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-muted/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-orange hover:bg-orange-dark text-white font-semibold py-4 rounded transition-colors glow-orange disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  >
                    {status === "sending" ? "Sending..." : "Send Message →"}
                  </button>

                  <p className="text-muted text-xs text-center">We typically respond within 24 hours.</p>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
