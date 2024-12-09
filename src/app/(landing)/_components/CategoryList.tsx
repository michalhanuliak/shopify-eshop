"use client";

import { useRouter } from "next/navigation";
import { CategoryCard } from "../../../components/category-card/CategoryCard";
import { Category } from "@/domain";

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const router = useRouter();

  const handleRedirect = (handle: string) => {
    router.push(`/collections/${handle}`);
  };

  const renderedCategories = categories.map(
    ({ id, title, handle, description }) => (
      <CategoryCard
        key={id}
        title={title}
        onClick={() => handleRedirect(handle)}
        description={description}
      />
    )
  );

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      data-testid="category-list"
    >
      {renderedCategories}
    </div>
  );
};
