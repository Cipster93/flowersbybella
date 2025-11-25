import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatupContact from "./components/WhatupContact";
import Footer from './components/Footer'
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import { dancingScript } from "./lib/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Flowers by Bella | Buchete și aranjamente florale deosebite",
    template: "%s | Flowers by Bella",
  },
  description:
    "Flowers by Bella - buchete și aranjamente florale pentru orice ocazie. Livrare rapidă, calitate premium, design unic.",
  keywords: [
    "flori",
    "buchete flori",
    "aranjamente florale",
    "livrare flori",
    "cadouri flori",
    "evenimente florale",
    "nunta",
    "botez",
    "eleganță",
    "rafinament",
    "memorial",
    "oferte flori",
    "Flowers by Bella",
    "catalog flori"
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Flowers by Bella | Buchete și aranjamente florale deosebite",
    description:
      "Descoperă buchete și aranjamente florale pentru orice ocazie, cu livrare rapidă și design unic.",
    url: "https://flowersbybella.ro",
    siteName: "Flowers by Bella",
    images: [
      {
        url: "https://flowersbybella.ro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flowers by Bella - Buchete și aranjamente florale deosebite",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  alternates: {
    canonical: "https://flowersbybella.ro",
  },
  metadataBase: new URL("https://flowersbybella.ro"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dancingScript.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-between min-h-screen`}
      >
        <Header />
        <Toolbar />
        <div className="flex-1 w-full flex flex-col items-center">
          {children}
        </div>
        <Footer />
        <div className="fixed bottom-10 right-10 z-50">
          <WhatupContact />
        </div>
      </body>
    </html>
  );
}
