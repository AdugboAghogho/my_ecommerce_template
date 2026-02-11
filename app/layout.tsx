import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a clean fashion look
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import MobileNav from "@/components/shopPage/MobileNav";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kels Footwear",
  description: "Curated fashion for the modern individual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <Toaster />
          <main className="min-h-screen">{children}</main>
          <MobileNav />
        </body>
      </html>
    </ClerkProvider>
  );
}
