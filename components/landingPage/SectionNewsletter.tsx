import React from "react";
import Image from "next/image";
import { Link, Star } from "lucide-react";
import image1 from "../../public/Edited/image.jpg.jpg";
import { Button } from "../ui/button";

const SectionNewsletter = () => {
  return (
    <section className="container mx-auto px-4 text-center">
      <div className="bg-zinc-900 rounded-3xl shadow-xl p-12 md:p-24 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-5xl font-bold">
            Get Your Style Inspiration
            <br />
            Straight to Your Inbox
          </h2>
          <p className="text-gray-400">
            Subscribe to our newsletter and receive 15% off your first order,
            plus exclusive access to new drops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" h-12 rounded-full px-6 bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              size="lg"
              className="rounded-full h-12 px-8 bg-white text-black cursor-pointer hover:bg-gray-200"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 blur-[100px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 blur-[100px] opacity-30" />
      </div>
    </section>
  );
};

export default SectionNewsletter;
