import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UDC WS1 — Notes",
  description: "Greenfield demo built with an agentic AI workflow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
