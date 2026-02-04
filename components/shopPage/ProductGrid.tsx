import React from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/Edited/edite (14).jpg";
import image2 from "@/public/Edited/edite (15).jpg";
import image3 from "@/public/Edited/edite (16).jpg";
import image4 from "@/public/Edited/edite (17).jpg";
import image5 from "@/public/Edited/edite (18).jpg";
import image6 from "@/public/Edited/edite (19).jpg";
import image7 from "@/public/Edited/edite (20).jpg";
import image8 from "@/public/Edited/edite (21).jpg";
import { Heart, Star, ShoppingBag } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Evening Gown",
    price: 90.47,
    rating: 4.2,
    image: image1,
    category: "Dresses",
  },
  {
    id: 2,
    name: "Black Shirt",
    price: 62.77,
    rating: 4.5,
    image: image2,
    category: "Tops",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 127.67,
    rating: 4.8,
    image: image3,
    category: "Outerwear",
  },
  {
    id: 4,
    name: "Orange Set",
    price: 25.0,
    rating: 4.0,
    image: image4,
    category: "Sets",
  },
  {
    id: 5,
    name: "Summer Dress",
    price: 55.0,
    rating: 4.3,
    image: image5,
    category: "Dresses",
  },
  {
    id: 6,
    name: "Casual Hoodie",
    price: 45.99,
    rating: 4.6,
    image: image6,
    category: "Tops",
  },
  {
    id: 7,
    name: "Casual Hoodie",
    price: 45.99,
    rating: 4.6,
    image: image7,
    category: "Tops",
  },
  {
    id: 8,
    name: "Casual Hoodie",
    price: 45.99,
    rating: 4.6,
    image: image8,
    category: "Tops",
  },
];

const ProductGrid = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {PRODUCTS.map((product) => (
          <Link
            // href={`/shop/product/${product.id}`}
            href="/product"
            key={product.id}
            className="group"
          >
            <div className="bg-white p-3 rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 border border-gray-50 h-full flex flex-col">
              {/* Image */}
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden mb-3 bg-gray-100">
                <Image
                  src={product.image}
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

                  <Link href="/cart" className="cursor-pointer">
                    <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-200 hover:scale-110 transition-transform">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </Link>
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
