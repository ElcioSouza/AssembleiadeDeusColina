import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ItemMenu } from "@/constant/ItemMenu";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  
  description: "Somos uma igreja conservadora de visão progressista no sentido de avançar na fé e na comunhão bíblica seguindo sempre os parâmetros das Sagradas Escrituras.",
  keywords: [
    "Assembeia de Deus",
    "Assembeia de Deus colinas",
  ],
  title: {
    default: "Assembeia de Deus Colinas",
    template: "%s | Assembeia de Deus Colinas",
  },
  robots: {
    index: true, 
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.className}`}>
      <body className="bg-white">
        <Header active={true} ItemMenu={ItemMenu} />
        {children}
        <Footer ItemMenu={ItemMenu}/> 
      </body>
    </html>
  );
}
