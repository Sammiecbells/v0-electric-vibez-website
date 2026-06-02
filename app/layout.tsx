import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Electric Vibez | High Energy Party Duo",
  description:
    "Electric Vibez is a high energy party duo perfect for weddings, corporate events, bars, and restaurants. Book us for your next event!",
  keywords: [
    "wedding band",
    "party duo",
    "live music",
    "corporate events",
    "wedding entertainment",
  ],
  openGraph: {
    title: "Electric Vibez | High Energy Party Duo",
    description:
      "Book Electric Vibez for your wedding, corporate event, or venue. High energy live music that gets everyone dancing.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#141414",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
