"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  // CONNECT TO STORE
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-4 md:p-8 pb-24">
      <h1 className="font-bold text-2xl mb-6">My Cart ({items.length})</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart List */}
        <div className="lg:col-span-2 space-y-4">
          {items.length === 0 ? (
            <p>
              Your cart is empty.{" "}
              <Link href="/shop" className="text-orange-500 font-bold">
                Go Shopping
              </Link>
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id + item.size}
                className="bg-white p-4 rounded-4xl shadow-sm flex gap-4 items-center"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400"
                    >
                      <Trash2 className="w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    {item.color} / {item.size}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">${item.price}</span>
                    <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-full">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="w-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-4xl shadow-sm h-fit">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <Link href="/checkout">
            <Button className="w-full h-14 bg-orange-500 text-white rounded-2xl">
              Checkout Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
