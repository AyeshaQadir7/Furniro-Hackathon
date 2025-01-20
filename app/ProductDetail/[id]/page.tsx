import ProductDetail from "./ProductDetail";
import IconsSection from "@/components/Shop/IconsSection";

export default async function Page({ params }: { params: { _id: string } }) {
  console.log("Fetching all products...");

  const res = await fetch(`https://template6-six.vercel.app/api/products`);
  const products = await res.json();

  // Find the product by ID
  const product = products.find((p: { _id: string }) => p._id === params._id);

  if (!product) {
    return <div className="text-center mt-16">Product Not Found</div>;
  }

  return (
    <>
      <ProductDetail product={product} />
      <IconsSection />
    </>
  );
}
