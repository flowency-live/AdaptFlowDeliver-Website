import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adapt Flow Deliver | Delivery Optimisation Experts",
  description: "We strengthen what works - and streamline what slows you down. End-to-end delivery. Capability uplift. Clear, scalable ways of working.",
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
