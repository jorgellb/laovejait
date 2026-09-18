import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RouteScroll } from "@/components/layout/RouteScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { rootMetadata } from "@/lib/metadata";
import { siteGraph } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-pt-28 antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <Suspense fallback={null}>
          <RouteScroll />
        </Suspense>
        <JsonLd data={siteGraph()} />
        <Navbar />
        <main id="contenido" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
