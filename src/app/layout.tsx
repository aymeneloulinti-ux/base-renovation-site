import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roofing & Renovation Template",
  description: "Reusable foundation for roofing and renovation websites.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
