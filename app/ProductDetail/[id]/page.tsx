import ProductDetail from "./ProductDetail";
import IconsSection from "@/components/Shop/IconsSection";

const products = [
  {
    id: 1,
    name: "Nordic Table",
    price: "$200.00",
    des: "Stylish and Elegant",
    images: [
      "/assets/productdetail/img1.png",
      "/assets/productdetail/img2.png",
      "/assets/productdetail/img3.png",
      "/assets/productdetail/img4.png",
      "/assets/productdetail/img5.png",
    ],
    sku: "SKU123",
    category: "Furniture",
    tags: ["sofa", "chair", "home"],
    sizes: ["S", "M", "L"],
    colors: ["#816DFA", "#B88E2F", "#000000"],
  },
];

// Generate Static Paths
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Render Product Page
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // Await the params
  const product = products.find((p) => p.id.toString() === resolvedParams.id);

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
