import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

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

const siteUrl = "https://hongeze.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hong Eze — Backend Engineer",
    template: "%s | Hong Eze",
  },
  description:
    "Backend Engineer specialising in Java, Spring Framework, and web application development. Building reliable and maintainable systems.",
  keywords: [
    "Backend Engineer",
    "Java",
    "Spring Framework",
    "Web Developer",
    "Hong Eze",
  ],
  authors: [{ name: "Hong Eze", url: siteUrl }],
  creator: "Hong Eze",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hong Eze",
    title: "Hong Eze — Backend Engineer",
    description:
      "Backend Engineer specialising in Java, Spring Framework, and web application development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hong Eze — Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hong Eze — Backend Engineer",
    description:
      "Backend Engineer specialising in Java, Spring Framework, and web application development.",
    creator: "@hongeze",
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
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
