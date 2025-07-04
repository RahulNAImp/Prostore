import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css"

const inter = Inter({subsets: ["latin"]})
export const metadata: Metadata =  {
  title: `${process.env.NEXT_PUBLIC_APP_NAME || "prostore"}`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Moderm ecommece store built with next js",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000')
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
