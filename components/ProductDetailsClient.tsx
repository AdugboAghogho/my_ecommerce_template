"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { singleProduct } from "@/lib/queries";
import { ArrowLeft, Heart, Minus, Plus, Star } from "lucide-react";

export default function ProductPage({ product }: { product: any }) {
  const { addItem } = useCartStore();
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "M");
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || "Black",
  );

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor,
    });
    toast.success(`${product.name} Added to Cart.!`);
  };

  const handleBuyNow = () => {
    setShowCart(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24 md:pb-0">
      {/* --- MOBILE HEADER --- */}
      <div className="md:hidden flex justify-between items-center p-4 sticky top-0 z-10">
        <Link href="/shop">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <h1 className="font-bold text-lg">Product Details</h1>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Heart className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* --- LEFT: IMAGES --- */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-3/4 md:aspect-square w-full rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-orange-50 mx-auto max-w-md md:max-w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
              />
              {/* Floating Thumbnails (Desktop Style Mock) */}
              {/* <div className="hidden md:flex flex-col gap-3 absolute left-4 top-1/2 -translate-y-1/2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-xl bg-white p-1 cursor-pointer border-2 border-transparent hover:border-orange-500 overflow-hidden relative"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=100"
                      alt="thumb"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* --- RIGHT: DETAILS --- */}
          <div className="px-6 md:px-0 flex flex-col justify-center">
            {/* Title & Rating */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-bold text-gray-900">4.7</span>
                <span className="text-gray-400 text-sm">(3k+ Reviews)</span>
              </div>
            </div>

            {/* Price & Quantity */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gray-500 text-sm mb-1">From:</p>
                <p className="text-3xl font-black text-gray-900">
                  ${product.price}
                </p>
              </div>

              {/* Counter */}
              <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-lg w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 shadow-md shadow-orange-200"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <p className="font-bold text-gray-900 mb-3">Color</p>
              <div className="flex gap-3">
                {product.colors?.map((color: string) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-xl font-bold border ${selectedColor === color ? "bg-orange-500 text-white border-orange-500" : "bg-white"}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <p className="font-bold text-gray-900 mb-3">Size</p>
              <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${
                      selectedSize === size
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                        : "bg-white text-gray-400 border border-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="font-bold text-gray-900 mb-2">Description</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Action Buttons (Desktop) */}
            <div className="hidden md:flex gap-4">
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="flex-1 h-14 rounded-2xl border-2 border-gray-200 text-gray-900 hover:bg-gray-50 hover:text-black"
              >
                Add to Cart
              </Button>
              <Button className="flex-1 h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-200 border-none">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE STICKY BOTTOM BAR --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 px-6 rounded-t-4xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 flex gap-4">
        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="flex-1 h-14 rounded-2xl border-gray-200 text-gray-900"
        >
          Add to Cart
        </Button>
        <Button
          onClick={handleBuyNow}
          className="flex-1 h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200 border-none"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
