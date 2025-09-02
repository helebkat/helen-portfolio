// app/fonts.ts
import { Inter, Allison, Darumadrop_One } from "next/font/google";

// Body text (fallback body font)
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Top nav (script) — Allison @ Google Fonts
export const allison = Allison({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allison",
});

// Big title — Darumadrop One @ Google Fonts
export const darumadrop = Darumadrop_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-darumadrop",
});
