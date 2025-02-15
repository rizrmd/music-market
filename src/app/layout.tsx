import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

const euclid = localFont({
  src: "../../public/font/EuclidCircularA-Regular.woff2",
  variable: "--font-euclid",
});
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${euclid.variable} antialiased`}>{children}</body>
    </html>
  );
}
