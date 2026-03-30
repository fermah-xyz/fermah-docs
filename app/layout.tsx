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
