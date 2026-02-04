"use client";

import { ArrowLeft, CreditCard, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] p-4 md:p-8">
      <header className="mb-8 flex items-center gap-4">
        <Link href="/shop/cart">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <h1 className="font-bold text-2xl">Checkout</h1>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Form */}
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-4xl shadow-sm">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Truck className="w-5 h-5 text-orange-500" /> Shipping Address
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="First Name"
                className="col-span-1 bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-200 outline-none"
              />
              <input
                placeholder="Last Name"
                className="col-span-1 bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-200 outline-none"
              />
              <input
                placeholder="Address"
                className="col-span-2 bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-200 outline-none"
              />
              <input
                placeholder="City"
                className="col-span-1 bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-200 outline-none"
              />
              <input
                placeholder="Zip Code"
                className="col-span-1 bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-200 outline-none"
              />
            </div>
          </section>

          <section className="bg-white p-6 rounded-4xl shadow-sm">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-orange-500" /> Payment
            </h2>
            <div className="p-4 border-2 border-orange-500 bg-orange-50 rounded-xl flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-gray-700" />
                <span className="font-medium text-sm">
                  Credit Card (Stripe)
                </span>
              </div>
              <div className="w-4 h-4 rounded-full border-4 border-orange-500 bg-white" />
            </div>
          </section>
        </div>

        {/* Review & Pay */}
        <div className="bg-white p-6 rounded-4xl shadow-sm h-fit">
          <h3 className="font-bold text-gray-900 mb-6">Summary</h3>
          {/* List short items here */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg" />
            <div>
              <p className="text-sm font-bold">Orange Set</p>
              <p className="text-xs text-gray-500">Qty: 1</p>
            </div>
            <p className="ml-auto font-bold">$25.00</p>
          </div>

          <div className="h-px bg-gray-100 my-4" />
          <div className="flex justify-between font-bold text-xl mb-6">
            <span>Total</span>
            <span>$269.34</span>
          </div>

          <Button className="w-full h-14 bg-black text-white hover:bg-gray-800 rounded-2xl shadow-lg">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
