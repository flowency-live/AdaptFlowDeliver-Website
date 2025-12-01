import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adapt Flow Deliver | Delivery Transformation Consultancy",
  description: "End-to-end delivery. Capability uplift. Value with clarity. We help organisations design and embed simple, scalable and customer-centric delivery systems.",
  keywords: ["delivery transformation", "consultancy", "agile", "kanban", "flow", "capability building", "operating model"],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
