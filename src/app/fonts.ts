// app/fonts.ts
import { Inter, Allison, Darumadrop_One } from "next/font/google";

// Body text (fallback body font)
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// Top nav (script) — Allison @ Google Fonts
export const allison = Allison({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allison",
  display: "swap",
  preload: true,
});

// Big title — Darumadrop One @ Google Fonts
export const darumadrop = Darumadrop_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-darumadrop",
  display: "swap",
  preload: true,
});
