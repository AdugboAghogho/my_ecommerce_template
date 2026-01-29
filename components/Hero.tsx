"use client";

import { useState, useEffect } from "react";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// --- DATA: Hero Slides Configuration ---
const HERO_SLIDES = [
  {
    id: 1,
    title: "Discover Your Signature Style",
    subtitle: "Luxury Footwear Collection",
    description: "Find the unique pieces that ignite your confidence. Rare vintage finds to modern essentials.",
    // Multiple images per slide to cycle every 4s
    images: [
      "https://images.unsplash.com/photo-1549298916-b41eb506cc65?q=80&w=2070", // Shoe 1
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070", // Shoe 2
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2070", // Shoe 3
    ],
    cta: "Shop Footwear",
    link: "/shop/footwear",
  },
  {
    id: 2,
    title: "Elegance in Every Stitch",
    subtitle: "New Season Apparel",
    description: "Crafted with premium materials for the modern individual. Comfort meets class.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070", // Fashion 1
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070", // Fashion 2
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2070", // Fashion 3
    ],
    cta: "View Lookbook",
    link: "/shop/apparel",
  },
];

// --- SUB-COMPONENT: Internal Image Fader (Changes every 4s) ---
function ImageFader({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Hero"
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          priority
        />
      ))}
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}

// --- MAIN COMPONENT ---
export function Hero() {
  return (
    <section className="relative w-full h-[650px] overflow-hidden shadow-inner-soft mb-12">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 10000, // Slide changes every 10 seconds
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center">
              
              {/* Background Image Cycle */}
              <div className="absolute inset-0 z-0">
                <ImageFader images={slide.images} />
              </div>

              {/* Content Box (Centered with Constraint) */}
              <div className="container-custom relative z-10 w-full h-full flex flex-col justify-center">
                <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 max-w-xl rounded-2xl card-shadow animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <span className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2 block">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <Link href={slide.link}>
                    <Button size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto">
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom CSS for Swiper Pagination dots to match brand */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: white;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}