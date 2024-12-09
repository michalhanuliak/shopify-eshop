export const metadata = {
  title: "All Categories | My Shop",
  description: "Explore all product categories at My Shop.",
  openGraph: {
    title: "All Categories",
    description: "Find the perfect product category for your needs.",
  },
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6" data-testid="category-title">
        Categories
      </h1>

      {children}
    </div>
  );
}
