import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "inkwell — Cloud-synced markdown notebook",
  description:
    "A cloud-synced markdown notebook with local-first feel, AI-augmented backlinks, and semantic search.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
