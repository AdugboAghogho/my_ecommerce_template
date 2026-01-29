import { Truck, ShieldCheck, RefreshCcw, Clock, Star, Zap } from "lucide-react";

const BENEFITS_ROW_1 = [
  { icon: Truck, title: "Free Shipping", text: "On all orders over $200" },
  { icon: ShieldCheck, title: "Secure Payment", text: "100% protected transactions" },
  { icon: RefreshCcw, title: "30-Day Returns", text: "No questions asked exchange" },
  { icon: Clock, title: "Fast Delivery", text: "Receive within 3 business days" },
];

const BENEFITS_ROW_2 = [
  { icon: Star, title: "Premium Quality", text: "Finest materials guaranteed" },
  { icon: Zap, title: "New Drops Weekly", text: "Stay ahead of the trends" },
  { icon: ShieldCheck, title: "Warranty", text: "1 year fabric warranty" },
  { icon: Truck, title: "Global Shipping", text: "We ship to over 100 countries" },
];

function BenefitCard({ icon: Icon, title, text }: any) {
  return (
    <div className="w-[300px] flex-shrink-0 p-6 mx-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
      <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}

export function SectionBenefits() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
         <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
      </div>

      {/* Row 1: Moving Left */}
      <div className="flex w-[200%] animate-marquee-left hover:[animation-play-state:paused]">
        {[...BENEFITS_ROW_1, ...BENEFITS_ROW_1, ...BENEFITS_ROW_1].map((item, i) => (
          <BenefitCard key={i} {...item} />
        ))}
      </div>

      <div className="h-8" /> 

      {/* Row 2: Moving Right */}
      <div className="flex w-[200%] animate-marquee-right hover:[animation-play-state:paused]">
        {[...BENEFITS_ROW_2, ...BENEFITS_ROW_2, ...BENEFITS_ROW_2].map((item, i) => (
          <BenefitCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}