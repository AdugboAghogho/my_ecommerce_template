"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import { ArrowLeft, Heart, Minus, Plus, Star, ArrowRight } from "lucide-react";

// Helper to calculate discount (fake for demo) or just show a label
const DISCOUNT_TAG = "25% off";

export default function ProductPage({
  product,
  relatedProducts = [], // Default to empty array if not passed
}: {
  product: any;
  relatedProducts?: any[];
}) {
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "M");
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || "Black",
  );

  // --- IMAGE GALLERY LOGIC ---
  // Default to the first image. Ensure product.images exists.
  const images = product.images || [product.imageUrl] || ["/placeholder.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (images.length < 2) return; // Don't rotate if only 1 image

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: images[0], // Use first image for cart
      quantity: quantity,
      size: selectedSize,
      color: selectedColor,
    });
    toast.success(`${product.name} Added to Cart!`);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24 md:pb-10">
      {/* --- MOBILE HEADER --- */}
      <div className="md:hidden flex justify-between items-center p-4 sticky top-0 z-10 bg-[#FDFBF7]/80 backdrop-blur-md">
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

      <div className="max-w-7xl mx-auto md:p-10 p-4">
        {/* --- MAIN PRODUCT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
          {/* --- LEFT: GALLERY --- */}
          <div className="flex flex-col-reverse md:flex-row gap-4 h-fit">
            {/* Thumbnails (Vertical on Desktop, Horizontal on Mobile) */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar justify-center md:justify-start">
              {images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    currentImageIndex === idx
                      ? "border-orange-500 ring-2 ring-orange-200"
                      : "border-transparent bg-white"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`View ${idx}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image Display */}
            <div className="relative flex-1 aspect-square bg-white rounded-[2.5rem] shadow-xl shadow-orange-50 overflow-hidden group">
              {/* Discount Tag */}
              <div className="absolute top-4 right-4 z-10 bg-white px-4 py-2 rounded-full font-bold text-sm shadow-sm">
                {DISCOUNT_TAG}
              </div>

              <Image
                src={images[currentImageIndex]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* --- RIGHT: DETAILS --- */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-bold text-gray-900 text-lg">4.7</span>
                <span className="text-gray-400">(3k+ Reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <p className="text-4xl font-black text-gray-900">
                ${product.price}
              </p>

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

            {/* Selectors */}
            <div className="space-y-6 mb-8">
              <div>
                <p className="font-bold text-gray-900 mb-3">Color</p>
                <div className="flex gap-3">
                  {product.colors?.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl font-bold border ${
                        selectedColor === color
                          ? "bg-orange-500 text-white border-orange-500"
                          : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-3">Size</p>
                <div className="flex gap-3">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${
                        selectedSize === size
                          ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                          : "bg-white text-gray-400 border border-gray-100 hover:border-orange-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-bold text-gray-900 mb-2">Description</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="hidden md:flex gap-4">
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="flex-1 h-14 rounded-2xl border-2 border-gray-200 text-gray-900 hover:bg-gray-50 text-lg"
              >
                Add to Cart
              </Button>
              <Button className="flex-1 h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-200 border-none text-lg">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* --- HOT PICKS / RELATED PRODUCTS --- */}
        <div className="border-t border-gray-200 pt-10 md:pt-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Hot picks for you
              </h2>
              <p className="text-gray-500 mt-2">
                More items from {product.category || "this category"}
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 font-bold text-gray-900 hover:text-orange-500 transition-colors"
            >
              Check All Categories <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((item) => (
                <Link
                  key={item._id}
                  href={`/shop/${item.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] bg-white rounded-3xl overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-shadow">
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full z-10">
                      New
                    </span>
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="font-bold text-gray-900">${item.price}</p>
                  </div>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 text-orange-400 fill-current"
                      />
                    ))}
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-400">
                No related products found.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- MOBILE STICKY BAR --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 px-6 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 flex gap-4">
        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="flex-1 h-14 rounded-2xl border-gray-200 text-gray-900"
        >
          Add to Cart
        </Button>
        <Button className="flex-1 h-14 rounded-2xl bg-orange-500 text-white border-none shadow-lg shadow-orange-200">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
