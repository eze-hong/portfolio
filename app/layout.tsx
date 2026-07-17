import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://jungminhong.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jungmin Hong — Frontend Engineer",
    template: "%s | Jungmin Hong",
  },
  description:
    "Frontend Engineer specialising in React, Next.js, and design systems. Building fast, accessible, and beautiful web experiences.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Jungmin Hong",
  ],
  authors: [{ name: "Jungmin Hong", url: siteUrl }],
  creator: "Jungmin Hong",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jungmin Hong",
    title: "Jungmin Hong — Frontend Engineer",
    description:
      "Frontend Engineer specialising in React, Next.js, and design systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jungmin Hong — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jungmin Hong — Frontend Engineer",
    description:
      "Frontend Engineer specialising in React, Next.js, and design systems.",
    creator: "@jungminhong",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
