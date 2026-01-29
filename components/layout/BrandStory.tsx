import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface BrandStoryProps {
  imageSrc: string; // <--- This makes the image reusable/fetchable from Sanity later
}

export function BrandStory({ imageSrc }: BrandStoryProps) {
  return (
    <section className="container mx-auto px-4 md:px-20 py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Content & Accordion */}
        <div className="space-y-8 order-2 lg:order-1">
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">The Kels Wear Philosophy</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Crafting Confidence, <br/>One Stitch at a Time.</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe fashion is a language. It’s not just about what you wear, but how it makes you feel. 
              Born from a passion for minimalist aesthetics, we bridge the gap between high-end luxury and everyday durability.
            </p>
          </div>

          {/* THE BENEFITS ACCORDION */}
          <Accordion type="single" collapsible className="w-full">
            
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-blue-600">
                Sustainable Sourcing
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed">
                We utilize 100% organic cotton and recycled materials. Our commitment to the planet is as strong as our commitment to your style.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-blue-600">
                Premium Durability
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed">
                Fast fashion falls apart. Kels Wear is built to last. Reinforced stitching and premium fabrics ensure your favorite pieces withstand the test of time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-blue-600">
                Exclusive Limited Drops
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed">
                We believe in uniqueness. Our collections are released in small, limited batches, ensuring that your look remains yours alone.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          <div className="pt-4">
            <Link href="/shop">
              <Button size="lg" className="rounded-full px-10 h-12 bg-black text-white hover:bg-gray-800">
                Explore the Shop
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT: Reusable Image */}
        <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src={imageSrc}
            alt="Brand Philosophy"
            fill
            className="object-cover"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

      </div>
    </section>
  )
}