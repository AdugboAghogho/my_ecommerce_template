import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  image: string;
  title: string;
  subtitle: string;
}

export function CollectionCard({ image, title, subtitle }: CollectionCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer">
      <div className="aspect-[3/4] w-full relative">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm font-medium text-gray-200 mb-1">{subtitle}</p>
        <h3 className="text-xl font-bold flex items-center gap-2">
          {title} 
          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </h3>
      </div>
    </div>
  );
}