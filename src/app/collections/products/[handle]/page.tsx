import { fetchProductByHandle } from "@/services/product";
import { Construction, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{
    handle: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;

  const product = await fetchProductByHandle(handle);

  return (
    <div className="container p-4 flex flex-col items-center justify-center h-screen gap-5 mx-auto">
      <h1 className="text-2xl font-bold ">{product?.title}</h1>

      <Construction />

      <p className="text-3xl text-center">
        Whoopsie, product page is under the construction
      </p>

      <Link
        href="https://www.youtube.com/watch?v=xm3YgoEiEDc"
        className="text-primary underline inline-flex  gap-2 items-center text-center"
        target="_blank"
        rel="noreferrer"
      >
        Waste my time until its done <ExternalLink size={18} />
      </Link>
    </div>
  );
}
