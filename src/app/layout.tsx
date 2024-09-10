import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const customFont = Poppins({
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
      <Script src="https://checkout.razorpay.com/v1/magic-checkout.js" />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
