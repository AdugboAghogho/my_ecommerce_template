import { singleProduct } from "@/lib/queries";
import { client } from "@/lib/sanity";
import ProductDetailsClient from "../../../../components/ProductDetailsClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 2. Pass it to your GROQ query
  const product = await client.fetch(singleProduct, { slug });

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <ProductDetailsClient product={product} />
    </div>
  );
}
