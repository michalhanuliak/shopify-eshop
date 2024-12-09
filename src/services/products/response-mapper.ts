import { ProductPreview } from "@/domain";
import { GetProductByHandleQuery } from "@/graphql/generated-types";

type RawProduct = GetProductByHandleQuery["productByHandle"];

export const mapProducts = (
  edges: Array<{ node: RawProduct }>
): Array<ProductPreview | null> => {
  return edges.map(({ node }) => {
    if (!node) {
      return null;
    }

    return {
      id: node.id,
      title: node.title,
      description: node.description,
      price: `${node.priceRange.minVariantPrice.amount} ${node.priceRange.minVariantPrice.currencyCode}`,
      imageUrl: node.images.edges[0]?.node?.url || "",
      handle: node.handle,
    };
  });
};
