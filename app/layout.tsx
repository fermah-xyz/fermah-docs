import type { Metadata } from "next";
import { ScrollProgress } from "./_components/scroll-progress";
import "./global.css";

export const metadata: Metadata = {
  title: {
    default: "Fermah Documentation",
    template: "%s — Fermah Docs",
  },
  description: "Programmable Execution layer",
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "Fermah Documentation",
    description: "Programmable Execution layer",
    siteName: "Fermah Docs",
    images: [{ url: "/og.webp", width: 1920, height: 1080 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermah Documentation",
    description: "Programmable Execution layer",
    images: ["/og.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
