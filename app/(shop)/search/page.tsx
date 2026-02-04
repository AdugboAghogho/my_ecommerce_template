"use client";

import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] p-4 md:p-8">
      {/* Search Bar Input */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          autoFocus
          className="w-full bg-white h-14 pl-12 pr-4 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-orange-200 text-lg"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
          <X className="w-3 h-3 text-gray-500" />
        </button>
      </div>

      <h2 className="font-bold text-gray-900 mb-6">Recent Searches</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        {["Nike Air", "Orange Hoodie", "Summer Dress"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-white rounded-xl text-sm text-gray-600 border border-gray-100 cursor-pointer hover:border-orange-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="font-bold text-gray-900 mb-6">Results for "Orange"</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <Link
            href="/shop/product/1"
            key={item}
            className="bg-white p-3 rounded-[2rem] shadow-sm"
          >
            <div className="relative aspect-[3/4] bg-gray-100 rounded-[1.5rem] mb-3 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500"
                alt="Item"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-bold text-sm truncate">Orange Summer Set</p>
            <p className="text-orange-500 font-bold">$25.00</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
