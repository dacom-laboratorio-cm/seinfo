import type { Metadata } from "next";
import { Lato, Jersey_15 } from "next/font/google"; // Alterado: Importa Jersey_15
import "./globals.css";


const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});


const jersey15 = Jersey_15({
  subsets: ["latin"],
  weight: "400", 
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
      <body className={`${lato.variable} ${jersey15.variable}`}>
        {children}
      </body>
    </html>
  );
}