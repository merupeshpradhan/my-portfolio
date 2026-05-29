import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupesh Pradhan",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#05050a] text-white antialiased min-h-screen">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
