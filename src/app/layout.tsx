import type { Metadata, Viewport } from "next";
import {
  Archivo_Black,
  Space_Grotesk,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-heavy",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const title = "Fathi Farhat — Backend & Fullstack Developer";
const description =
  "Backend & Fullstack Developer based in Jakarta, Indonesia. Turning complex problems into clean, scalable digital solutions.";

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
  themeColor: "#FAF9F6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#171717]">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
