import { singleProduct, relatedProducts } from "@/lib/queries";
import { client } from "@/lib/sanity";
import ProductDetailsClient from "../../../../components/ProductDetailsClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await client.fetch(singleProduct, { slug });
  const related = await client.fetch(relatedProducts, {
    category: product.category,
    currentId: product._id,
  });

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <ProductDetailsClient product={product} relatedProducts={related} />
    </div>
  );
}
