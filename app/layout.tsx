import type { Metadata } from "next";
import { Inter, Bebas_Neue, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });
const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LEHETRE — Lead The Trend | O2O Marketing Agency",
  description: "Where Digital Strategy Meets Live Experiences. LEHETRE delivers measurable O2O marketing — from performance campaigns to world-class event production.",
  keywords: ["O2O marketing", "event management", "digital marketing", "Vietnam", "LEHETRE"],
  icons: {
    icon: "/images/logo/favicon.jpg",
    apple: "/images/logo/favicon.jpg",
  },
  openGraph: {
    title: "LEHETRE — Lead The Trend",
    description: "O2O Marketing Agency — Digital Strategy + Live Experiences",
    url: "https://lehetre.vn",
    siteName: "LEHETRE",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${bebasNeue.variable} ${orbitron.variable}`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
