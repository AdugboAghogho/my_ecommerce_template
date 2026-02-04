"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const CART_ITEMS = [
  {
    id: 1,
    name: "Orange Set",
    price: 25.0,
    size: "M",
    color: "Orange",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
    quantity: 1,
  },
  {
    id: 2,
    name: "Leather Jacket",
    price: 127.67,
    size: "L",
    color: "Black",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000",
    quantity: 2,
  },
];

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-32 md:pb-10">
      {/* Header */}
      <header className="p-4 md:p-8 flex items-center gap-4 bg-white/50 backdrop-blur-xl sticky top-0 z-10">
        <Link href="/shop">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <h1 className="font-bold text-xl">
          My Cart{" "}
          <span className="text-gray-400 text-sm font-normal">(3 Items)</span>
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {CART_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-[2rem] shadow-sm flex gap-4 items-center"
            >
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <button className="text-red-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  {item.color} / {item.size}
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${item.price}</span>
                  <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-full">
                    <button className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">
                      {item.quantity}
                    </span>
                    <button className="w-6 h-6 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-sm">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm h-fit space-y-6">
          <h2 className="font-bold text-lg">Order Info</h2>

          <div className="space-y-3 text-sm text-gray-500">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-gray-900 font-medium">$279.34</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Cost</span>
              <span className="text-gray-900 font-medium">$10.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-500 font-medium">-$20.00</span>
            </div>
            <div className="h-px bg-gray-100 my-2" />
            <div className="flex justify-between text-base font-bold text-gray-900">
              <span>Total</span>
              <span>$269.34</span>
            </div>
          </div>

          <Link href="/checkout">
            <Button className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-xl shadow-orange-200 mt-2">
              Checkout Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
