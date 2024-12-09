import { ProductCard } from "@/components/product-card/ProductCard";
import { Pagination } from "./_components/Pagination";

import { getProductsByPage } from "./_lib/server/actions";

interface CategoryPageProps {
  params: Promise<{ handle: string }>;
  searchParams?: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { handle } = await params;

  const {
    data: { title },
  } = await getProductsByPage(handle, 1, 1);

  return {
    title: `${title} Products | My Shop`,
    description: `Browse products in the ${title} category.`,
    openGraph: {
      title: `${title} Products`,
      description: `High-quality products in the ${title} category.`,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { handle } = await params;
  const searchParamsResult = await searchParams;

  //TODO: Add default page value to env variable
  const currentPage = searchParamsResult?.page
    ? parseInt(searchParamsResult?.page, 10)
    : 1;

  //TODO: Add per page value to env variable
  const perPage = 4;

  const {
    totalPages,
    data: { products },
  } = await getProductsByPage(handle, currentPage, perPage);

  const renderedProducts = products.map(
    ({ id, title, price, imageUrl, handle: productHandle }) => (
      <ProductCard
        key={id}
        title={title}
        price={price}
        imageUrl={imageUrl}
        productUrl={`/products/${productHandle}`}
      />
    )
  );

  return (
    <div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-testid="product-list"
      >
        {renderedProducts}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPagePath={`/collections/${handle}?page=${currentPage + 1}`}
        prevPagePath={`/collections/${handle}?page=${currentPage - 1}`}
      />
    </div>
  );
}
