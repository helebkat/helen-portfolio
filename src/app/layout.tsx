// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { inter, allison, darumadrop } from "./fonts";

export const metadata: Metadata = {
  title: "Helen Li",
  description: "N/A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${allison.variable} ${darumadrop.variable} ${inter.className} min-h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
