import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  themeColor: "#030303",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030303] text-zinc-100">{children}</body>
    </html>
  );
}
