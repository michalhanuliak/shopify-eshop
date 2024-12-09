import { fetchCollections } from "@/services/collections";
import { CategoryList } from "./_components/CategoryList";

export default async function CategoriesPage() {
  // TODO: Add dynamic fetch for categories
  const categories = await fetchCollections(10);

  return <CategoryList categories={categories} />;
}
