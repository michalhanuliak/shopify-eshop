import { fetchProductByHandle } from "@/services/product";
import { Construction, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{
    productHandle: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { productHandle } = await params;
  const product = await fetchProductByHandle(productHandle);

  return {
    title: product?.title ? `${product.title} - My E-Shop` : "Product Page",
    description: product?.description
      ? product.description
      : "Check out this product from our store.",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productHandle } = await params;
  const product = await fetchProductByHandle(productHandle);

  return (
    <div className="container p-4 flex flex-col items-center justify-center h-full gap-5 mx-auto min-h-screen">
      <h1 className="text-2xl font-bold ">{product?.title}</h1>

      <Construction />

      <p className="text-3xl text-center">
        Whoopsie, product page is under construction
      </p>

      <Link
        href="https://www.youtube.com/watch?v=xm3YgoEiEDc"
        className="text-primary underline inline-flex gap-2 items-center text-center"
        target="_blank"
        rel="noreferrer"
      >
        Waste my time until its done <ExternalLink size={18} />
      </Link>
    </div>
  );
}
