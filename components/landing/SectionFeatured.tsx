import { FeaturedCard } from "@/components/ui/FeaturedCard";

const PRODUCTS = [
  { id: 1, title: "Linen Comfort Shirt", price: "$120", category: "Summer", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000" },
  { id: 2, title: "Classic Polo Fit", price: "$85", category: "Essentials", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000" },
  { id: 3, title: "Urban Chino Pant", price: "$145", category: "Trousers", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1000" },
  { id: 4, title: "Signature Blazer", price: "$299", category: "Formal", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000" },
  { id: 5, title: "Weekend Tee", price: "$45", category: "Casual", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000" },
];

export function SectionFeatured() {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-4xl font-serif mb-4">Featured Collection</h2>
        <p className="text-gray-500">Curated looks for the modern individual.</p>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-6 px-4 pb-10 no-scrollbar snap-x snap-mandatory">
        {PRODUCTS.map((product) => (
            <div key={product.id} className="snap-center">
                <FeaturedCard 
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    image={product.img}
                />
            </div>
        ))}
      </div>
    </section>
  );
}