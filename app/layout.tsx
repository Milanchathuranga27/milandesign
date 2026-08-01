import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./lib/SmoothScroll";

export const metadata: Metadata = {
  title: "Milan — UI/UX Designer",
  description:
    "Milan is a UI/UX designer with 4+ years of experience crafting bold, user-centered digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-bg text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
