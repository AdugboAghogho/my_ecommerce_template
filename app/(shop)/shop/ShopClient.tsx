"use client";
import Image from "next/image";
import Link from "next/link";
import user from "../../../public/Edited/b4f9052e-1648-4e7d-87ec-bb0c978b76f0.jpg";
import { Search, ShoppingBag } from "lucide-react";
import SideBar from "@/components/shopPage/SideBar";
import HeroBanner from "@/components/shopPage/HeroBanner";
import ProductGrid from "@/components/shopPage/ProductGrid";
import Banner from "@/components/shopPage/Banner";
import { useState } from "react";

export default function ShopClient({
  products,
  categories,
}: {
  products: any[];
  categories: any[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="flex max-w-400 mx-auto">
      {/* --- DESKTOP SIDEBAR (Left) --- */}
      <SideBar />

      {/* --- MAIN CONTENT (Right) --- */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Header Mobile/Desktop */}
        <header className="flex justify-between items-center mb-8">
          <div className="md:hidden flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden relative">
              <Image src={user} alt="User" fill />
            </div>
            <div>
              <p className="text-xs text-gray-400">Welcome</p>
              <p className="font-bold text-sm">Donnie Dawson</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4 md:mx-0 hidden md:block relative">
            <Link href="/search">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for clothes..."
                className="w-full bg-white border border-gray-100 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 shadow-sm"
              />
            </Link>
          </div>

          <div className="flex gap-3">
            <Link href="/cart">
              <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-orange-200 shadow-lg text-white">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </header>

        {/* Hero Banner (Burberry style) */}
        <HeroBanner />

        {/* Categories Chips */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6 no-scrollbar">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === "All" ? "bg-orange-500 text-white" : "bg-white border"}`}
          >
            All
          </button>
          {categories.map((cat: any) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.title
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-500 border border-gray-100"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} categories={categories} />

        <Banner />
      </main>
    </div>
  );
}
