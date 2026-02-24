import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IDX Insights - Direct Indexing Solutions for a Changing World",
  description: "A unique approach to quantitative investing backed by robust research and empirical evidence. We provide custom direct indices, institutional research, and risk-managed crypto exposures.",
  keywords: ["direct indexing", "quantitative investing", "research", "risk management", "ESG filters", "crypto"],
  authors: [{ name: "IDX Insights, LLC" }],
  openGraph: {
    title: "IDX Insights - Direct Indexing Solutions",
    description: "A unique approach to quantitative investing backed by robust research and empirical evidence.",
    url: "https://idxinsights.com",
    siteName: "IDX Insights",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDX Insights - Direct Indexing Solutions",
    description: "A unique approach to quantitative investing backed by robust research and empirical evidence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
