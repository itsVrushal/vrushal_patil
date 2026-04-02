import type { Metadata } from "next";
import { VT323, Orbitron, Press_Start_2P } from "next/font/google";
import "./globals.css";
import RetroCursor from "@/components/RetroCursor";

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

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  title: "Vrushal Patil | AI & Systems Developer",
  description: "Portfolio of Vrushal Patil - AI/ML Engineer, Systems Developer, and Tech Enthusiast building the future with code",
  keywords: ["Vrushal Patil", "AI Developer", "Systems Developer", "Portfolio", "Machine Learning", "Full Stack Developer"],
  authors: [{ name: "Vrushal Patil" }],
  openGraph: {
    title: "Vrushal Patil | AI & Systems Developer",
    description: "Portfolio of Vrushal Patil - AI/ML Engineer, Systems Developer",
    url: "https://vrushal-patil.vercel.app",
    siteName: "Vrushal Patil Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vrushal Patil | AI & Systems Developer",
    description: "Portfolio of Vrushal Patil - AI/ML Engineer, Systems Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vt323.variable} ${orbitron.variable} ${pressStart2P.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <div className="scanlines" />
        <div className="crt-overlay" />
        <div className="grid-bg" />
        <RetroCursor />
        {children}
      </body>
    </html>
  );
}