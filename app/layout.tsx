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

export const metadata: Metadata = {
  title: "Metronic Dashboard",
  description: "Modern dashboard built with Next.js, React, and Tailwind CSS",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-kt-theme="true" data-kt-theme-mode="light" dir="ltr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="/template/assets/vendors/apexcharts/apexcharts.css" rel="stylesheet" />
        <link href="/template/assets/vendors/keenicons/styles.bundle.css" rel="stylesheet" />
        <link href="/template/assets/css/styles.css" rel="stylesheet" />
        <script src="/template/assets/js/core.bundle.js" defer></script>
        <script src="/template/assets/vendors/ktui/ktui.min.js" defer></script>
        <script src="/template/assets/vendors/apexcharts/apexcharts.min.js" defer></script>
        <script src="/template/assets/js/widgets/general.js" defer></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-full text-base text-foreground bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
