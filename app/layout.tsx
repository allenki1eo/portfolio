import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Allen — Full-Stack Developer & AI Builder",
  description:
    "Portfolio of Allen, a full-stack developer and AI builder based in Tanzania. Specializing in TypeScript, Python, and intelligent web applications.",
  keywords: ["developer", "AI", "full-stack", "Tanzania", "TypeScript", "Next.js"],
  openGraph: {
    title: "Allen — Full-Stack Developer & AI Builder",
    description: "Building intelligent applications that solve real problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
