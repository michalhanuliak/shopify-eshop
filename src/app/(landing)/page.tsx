import { fetchCollections } from "@/services/collections";
import { CategoryList } from "./_components/CategoryList";

export const metadata = {
  title: "All Categories | My Shop",
  description: "Explore all product categories at My Shop.",
  openGraph: {
    title: "All Categories",
    description: "Find the perfect product category for your needs.",
  },
};

export default async function CategoriesPage() {
  // TODO: Add dynamic fetch for categories
  const categories = await fetchCollections(10);

  return <CategoryList categories={categories} />;
}
