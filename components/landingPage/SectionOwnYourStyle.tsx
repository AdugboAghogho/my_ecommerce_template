import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SectionOwnYourStyle() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-150 items-center">
          {/* Text Content */}
          <div className="p-12 md:p-20 space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Own Your <br />
              Style
            </h2>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Exclusive pieces, crafted for confidence and effortless elegance.
              Don't wait—your perfect look is just a click away.
            </p>
            <Link href="/shop">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-base bg-black text-white hover:bg-gray-800"
              >
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Image Content */}
          <div className="relative h-full w-full min-h-125">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
              alt="Model sitting"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
