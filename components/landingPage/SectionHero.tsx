import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const SectionHero = () => {
  return (
    <section className="container mx-auto px-4 mt-7 rounded-[3rem]">
      <div className="bg-white rounded-[3rem]  md:p-12 shadow-xl border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-8 md:p-10 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900">
              Discover Your <br />
              <span className="text-gray-500">Signature Style.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Find the unique pieces that ignite your confidence. From rare
              vintage finds to modern essentials, we help you uncover the spark
              that turns every outfit into a statement.
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-14 text-base bg-black text-white shadow-xl hover:bg-gray-800 cursor-pointer "
                >
                  Shop Collection
                </Button>
              </Link>

              <Link href="/shop">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-4 h-14 text-base bg-white text-black shadow-xl md:px-8 cursor-pointer "
                >
                  View Lookbook
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Images Grid */}
          <div className="relative h-150 w-full md:block">
            {/* Main large image */}
            <div className="absolute right-0 top-0 w-[80%] h-[90%] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                alt="Fashion Model"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating smaller image 1 */}
            <div className="absolute left-0 bottom-20 w-[40%] h-[40%] rounded-2xl overflow-hidden border-4 border-white shadow-xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                alt="Detail shot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
