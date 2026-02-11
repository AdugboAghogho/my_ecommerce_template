"use client";

import { useState, useEffect } from "react";
import { Search, X, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Search Logic with Debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 2) {
        // Only search if query is longer than 2 chars
        setIsLoading(true);
        try {
          // GROQ Query: Matches name OR description
          const products = await client.fetch(
            `*[_type == "product" && (name match "*" + $q + "*" || description match $q + "*")] {
              _id,
              name,
              price,
              "slug": slug.current,
              "imageUrl": images[0].asset->url
            }`,
            { q: query },
          );
          setResults(products);
        } catch (error) {
          console.error("Search failed:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
      }
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-4 md:p-8">
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products (e.g. 'Jacket', 'Summer')..."
          autoFocus
          className="w-full bg-white h-14 pl-12 pr-12 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-orange-200 text-lg"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>
        )}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center py-10">
          <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
        </div>
      )}

      {/* Results */}
      {results.length > 0 ? (
        <>
          <h2 className="font-bold text-gray-900 mb-6">
            Results for "{query}"
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((item) => (
              <Link
                href={`/shop/product/${item.slug}`}
                key={item._id}
                className="bg-white p-3 rounded-4xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-3/4 bg-gray-100 rounded-3xl mb-3 overflow-hidden">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <p className="font-bold text-sm truncate">{item.name}</p>
                <p className="text-orange-500 font-bold">${item.price}</p>
              </Link>
            ))}
          </div>
        </>
      ) : query.length > 2 && !isLoading ? (
        <div className="text-center py-10 text-gray-500">
          No products found matching "{query}"
        </div>
      ) : null}

      {/* Recent Searches (Static for UI) */}
      {!query && (
        <>
          <h2 className="font-bold text-gray-900 mb-6">Popular Tags</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Summer", "Jacket", "Dress", "Casual"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-4 py-2 bg-white rounded-xl text-sm text-gray-600 border border-gray-100 cursor-pointer hover:border-orange-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
