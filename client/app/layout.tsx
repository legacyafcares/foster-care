import { Providers } from "./providers";
import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";

const nunito = Nunito({
  subsets: ['latin']
}) 

export const metadata: Metadata = {
  title: "Some app whose name we don't know yet",
  description: "A haven for your loved ones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
