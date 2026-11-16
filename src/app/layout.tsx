import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = "Muhammad Fathi Farhat — Backend & Fullstack Developer";
const description =
  "Backend & Fullstack Developer based in Jakarta with 3+ years of experience building scalable applications, enterprise approval systems, and thoughtful digital products.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Muhammad Fathi Farhat",
    "Fathi Farhat",
    "Backend Developer",
    "Fullstack Developer",
    "Go Developer",
    "Next.js",
    "Jakarta",
    "flowgo.id",
  ],
  authors: [{ name: "Muhammad Fathi Farhat" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Fathi Farhat",
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
  themeColor: "#F8FAF7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAF7] text-[#17191C]">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
