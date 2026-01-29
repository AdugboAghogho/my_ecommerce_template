import Link from "next/link";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Hero } from "@/components/Hero";

import { CollectionCard } from "@/components/ui/CollectionCard";

import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* 1. HERO SECTION (Adapted from "Discover World's Hidden Wonders") */}

      <section className="container mx-auto px-4 mt-10 rounded-[3rem] shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
                  className="rounded-full px-8 h-12 text-white bg-black"
                >
                  Shop Collection
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full h-12 px-8"
              >
                View Lookbook
              </Button>
            </div>
          </div>

          {/* Hero Images Grid */}

          <div className="relative h-[600px] w-full md:block">
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
      </section>

      {/* 2. TOP COLLECTIONS (Adapted from "Top Destinations") */}

      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Curated Collections
            </h2>

            <p className="text-gray-500 mt-2">
              Hand-picked styles for the season.
            </p>
          </div>

          <Button variant="ghost" className="hidden md:flex gap-2">
            Explore all categories <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CollectionCard
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
            title="Urban Footwear"
            subtitle="Sneakers & Boots"
          />

          <CollectionCard
            image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop"
            title="Summer Breeze"
            subtitle="Lightweight Linens"
          />

          <CollectionCard
            image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop"
            title="Formal Edit"
            subtitle="Office Essentials"
          />

          <CollectionCard
            image="https://images.unsplash.com/photo-1551488852-080175b92751?q=80&w=1000&auto=format&fit=crop"
            title="Accessories"
            subtitle="The Final Touch"
          />
        </div>
      </section>

      {/* 3. LATEST STORIES -> TRENDING NOW */}

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Trending this Week</h2>

              {/* Feature Item */}

              <div className="flex gap-6 items-start bg-white p-4 rounded-xl shadow-sm">
                <div className="w-24 h-24 relative rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1549298916-b41eb506cc65?q=80&w=1000"
                    alt="Shoe"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold text-blue-600 mb-1">
                    BEST SELLER
                  </p>

                  <h4 className="font-bold text-lg">Nike Air Max Revival</h4>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    The classic silhouette returns with sustainable materials
                    and improved comfort for all-day wear.
                  </p>

                  <Link
                    href="/shop/product/nike-air"
                    className="text-sm font-semibold mt-2 block underline"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              <div className="flex gap-6 items-start bg-white p-4 rounded-xl shadow-sm">
                <div className="w-24 h-24 relative rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000"
                    alt="Shirt"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold text-orange-600 mb-1">
                    NEW DROP
                  </p>

                  <h4 className="font-bold text-lg">Oversized Heavy Tee</h4>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    Designed for the modern streetwear aesthetic. 100% heavy
                    cotton.
                  </p>

                  <Link
                    href="/shop/product/tee"
                    className="text-sm font-semibold mt-2 block underline"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Large Feature Card */}

            <div className="relative rounded-3xl overflow-hidden min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000"
                alt="Model"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000"
                      alt="User"
                      fill
                    />
                  </div>

                  <span className="text-sm font-semibold">Sarah Jenkins</span>
                </div>

                <p className="text-gray-800 italic text-sm">
                  "I've never felt more confident. The quality of the fabrics is
                  unmatched at this price point."
                </p>

                <div className="flex gap-1 mt-3 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />

                  <Star className="w-4 h-4 fill-current" />

                  <Star className="w-4 h-4 fill-current" />

                  <Star className="w-4 h-4 fill-current" />

                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Hero /> */}

      {/* 4. NEWSLETTER (Adapted from "Get Your Travel Inspiration") */}

      <section className="container mx-auto px-4 text-center">
        <div className="bg-zinc-900 rounded-3xl p-12 md:p-24 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
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
                className="flex-1 h-12 rounded-full px-6 bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <Button
                size="lg"
                className="rounded-full h-12 px-8 bg-white text-black hover:bg-gray-200"
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
    </div>
  );
}
