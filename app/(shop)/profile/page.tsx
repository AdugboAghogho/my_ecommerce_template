"use client";

import Image from "next/image";
import user from "../../../public/Edited/b4f9052e-1648-4e7d-87ec-bb0c978b76f0.jpg";
import { Package, Settings, LogOut, ChevronRight } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  //   const { signOut } = useClerk();

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-4 md:p-8 pb-24">
      <h1 className="font-bold text-3xl mb-8">My Profile</h1>

      {/* User Card */}
      <div className="bg-white p-6 rounded-4xl shadow-sm flex items-center gap-4 mb-8">
        <div className="w-20 h-20 rounded-full bg-orange-100 overflow-hidden relative">
          <Image src={user} alt="User" fill />
        </div>
        <div>
          <h2 className="font-bold text-xl">Donnie Dawson</h2>
          <p className="text-gray-500 text-sm">donnie@example.com</p>
        </div>
      </div>

      {/* Menu Options */}
      <div className="space-y-4 max-w-2xl">
        {/* Orders Section */}
        <h3 className="font-bold text-gray-900 ml-2">History</h3>
        <div className="bg-white rounded-4xl p-2 shadow-sm">
          {[1, 2, 3].map((order) => (
            <div
              key={order}
              className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl cursor-pointer transition-colors border-b border-gray-50 last:border-none"
            >
              <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Order #2390{order}</p>
                <p className="text-xs text-gray-400">
                  Delivered on Jan 24, 2026
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </div>
          ))}
        </div>

        {/* Settings Section */}
        <h3 className="font-bold text-gray-900 ml-2 mt-6">Settings</h3>
        <div className="bg-white rounded-4xl p-2 shadow-sm">
          <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl cursor-pointer">
            <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center shrink-0">
              <Settings className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">Account Settings</p>
            </div>
          </div>

          {/* <button onClick={() => signOut()} className="w-full flex items-center gap-4 p-4 hover:bg-red-50 rounded-2xl cursor-pointer text-left"> */}
          <button className="w-full flex items-center gap-4 p-4 hover:bg-red-50 rounded-2xl cursor-pointer text-left">
            <div className="w-10 h-10 bg-red-100 text-red-500 rounded-full flex items-center justify-center shrink-0">
              <LogOut className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-red-500">Log Out</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
