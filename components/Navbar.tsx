import Link from "next/link";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="w-full border-b bg-white py-4 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          KELS.<span className="text-gray-500">WEAR</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/shop"
            className="hover:text-black text-gray-600 transition"
          >
            New Arrivals
          </Link>
          <Link
            href="/shop"
            className="hover:text-black text-gray-600 transition"
          >
            Shop
          </Link>
          <Link
            href="/product"
            className="hover:text-black text-gray-600 transition"
          >
            Product
          </Link>
          <Link
            href="/shop"
            className="hover:text-black text-gray-600 transition"
          >
            Accessories
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Link href="/sign-in">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
