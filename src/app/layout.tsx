import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const Sans = localFont({
  src: "../fonts/AlanSans.ttf",
  variable: "--font-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Rik Dental Care",
  description: "Your Smile Our Priority",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
