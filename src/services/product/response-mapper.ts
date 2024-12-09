import { ProductDetail } from "@/domain";
import { GetProductByHandleQuery } from "@/graphql/generated-types";

type RawProduct = GetProductByHandleQuery["productByHandle"];

export const mapProduct = (rawProduct: RawProduct): ProductDetail | null => {
  if (!rawProduct) {
    return null;
  }

  return {
    id: rawProduct.id,
    title: rawProduct.title,
    description: rawProduct.description,
    price: `${rawProduct.priceRange.minVariantPrice.amount} ${rawProduct.priceRange.minVariantPrice.currencyCode}`,
    images: rawProduct.images.edges.map((edge) => edge.node.url),
    handle: rawProduct.handle,
  };
};
