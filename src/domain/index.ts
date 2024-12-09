export type ProductDetail = {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  handle: string;
};

export type ProductPreview = Pick<
  ProductDetail,
  "id" | "title" | "description" | "price" | "handle"
> & {
  imageUrl: string;
};

export type Category = {
  id: string;
  title: string;
  handle: string;
  description: string;
};
