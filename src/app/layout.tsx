import type { Metadata } from "next";
import { Lato, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel", 
});

export const metadata: Metadata = {
  title: "SEINFO 2025 - Semana da Informática",
  description: "Página do evento SEINFO 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.variable} ${pixelify.variable}`}>
        {children}
      </body>
    </html>
  );
}