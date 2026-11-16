import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = "Muhammad Fathi Farhat — Backend & Fullstack Software Developer";
const description =
  "Backend & Fullstack Developer with 3+ years of experience building scalable web applications and internal enterprise systems. Go, Next.js, React, ASP.NET, SQL Server, MongoDB, Redis.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Backend Developer",
    "Fullstack Developer",
    "Golang Developer",
    "Software Engineer",
    "Next.js",
    "Go",
    "Jakarta",
    "Muhammad Fathi Farhat",
  ],
  authors: [{ name: "Muhammad Fathi Farhat" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Fathi Farhat",
    images: [{ url: "/profile.png", width: 1095, height: 1600, alt: "Muhammad Fathi Farhat" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070B12",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070B12] text-slate-100 selection:bg-cyan-400/20 selection:text-cyan-200">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
