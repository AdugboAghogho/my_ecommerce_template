import React from "react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Heart, Star, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const ProductGrid = ({
  products,
  categories,
}: {
  products: any[];
  categories: any[];
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addItem } = useCartStore();

  // Filter Logic
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product: any) => (
          <Link
            // href={`/shop/product/${product.id}`}
            href={`/product/${product.slug}`}
            key={product._id}
            className="group"
          >
            <div className="bg-white p-3 rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 border border-gray-50 h-full flex flex-col">
              {/* Image */}
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden mb-3 bg-gray-100">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="px-1 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-900 mb-1 truncate">
                  {product.name}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <button
                    className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-200 hover:scale-110 transition-transform"
                    onClick={() => addItem(product)}
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
