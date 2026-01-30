import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a clean fashion look
import "./globals.css";
import { Navbar } from "@/components/Navbar";
// import { ClerkProvider } from "@clerk/nextjs";

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
    // <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {/* Simple Footer */}
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2026 Kels Development. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
    // </ClerkProvider>
  );
}
