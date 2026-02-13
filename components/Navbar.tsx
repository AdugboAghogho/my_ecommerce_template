"use client";

import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";

export function Navbar() {
  const { items } = useCartStore();

  return (
    // 1. Container: Fixed at top, centered, pill-shaped, dark glass effect
    <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 shadow-2xl flex items-center justify-between transition-all hover:bg-[#0f0f0f]/90">
        {/* --- LEFT: LOGO --- */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-white"
        >
          KELS.<span className="text-zinc-500">WEAR</span>
        </Link>

        {/* --- CENTER: NAV LINKS --- */}
        <div className="flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="/shop" className="hover:text-white transition-colors">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* --- RIGHT: ICONS --- */}
        <div className="flex items-center gap-2">
          <Link href="/search">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-300 hover:text-white hover:bg-white/10 rounded-full"
            >
              <Search className="w-5 h-5" />
            </Button>
          </Link>

          <Link href="/profile">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-300 hover:text-white hover:bg-white/10 rounded-full"
            >
              <User className="w-5 h-5" />
            </Button>
          </Link>

          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-zinc-300 hover:text-white hover:bg-white/10 rounded-full group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:text-white" />
              {items.length > 0 && (
                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-[#0f0f0f]"></span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
