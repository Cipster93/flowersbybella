import type { Metadata } from "next";
import "./globals.css";
import WhatupContact from "./components/WhatupContact";
import Footer from './components/Footer'
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import { dancingScript } from "./lib/fonts";


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
        url: "https://flowersbybella.ro/logo.webp",
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="icon" type="image/png" href="/icon1.png" />
      </head>
      <body
        className=" antialiased flex flex-col items-center justify-between min-h-screen"
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
