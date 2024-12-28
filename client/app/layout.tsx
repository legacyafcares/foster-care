import { Providers } from "./providers";
import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";
import Footer from "./components/Footer";

const nunito = Nunito({
  subsets: ['latin']
}) 

export const metadata: Metadata = {
  title: "Legacy AFC",
  description: "A haven for your loved ones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-gray-100`}>
        <Providers>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
