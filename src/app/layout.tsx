import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // Import providers

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DecentraEvents",
  description: "Decentralized Event Ticketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers> {/* Wrap children */}
      </body>
    </html>
  );
}
