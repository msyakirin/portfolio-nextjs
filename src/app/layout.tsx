import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import CustomCursor from "@/atoms/CustomCursor";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio M. Syakirin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
