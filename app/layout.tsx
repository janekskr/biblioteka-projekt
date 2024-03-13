import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "700", "600", "800"] });

export const metadata: Metadata = {
  title: "Biblioteka",
  description: "Wirtualna biblioteka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ poppins.className}>
        <Header />
        <main className="flex items-center justify-center h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
