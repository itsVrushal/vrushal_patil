import type { Metadata } from "next";
import { VT323, Orbitron } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Vrushal Patil | AI & Systems Developer",
  description: "Portfolio of Vrushal Patil - AI/ML Engineer, Systems Developer, and Tech Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vt323.variable} ${orbitron.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <div className="scanlines" />
        <div className="crt-overlay" />
        <div className="grid-bg" />
        {children}
      </body>
    </html>
  );
}