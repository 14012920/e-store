import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const customFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-STORE",
  description: "ONLINE E-COMMERCE-STORE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={customFont.className}>{children}</body>
    </html>
  );
}