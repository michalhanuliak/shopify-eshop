import graphqlClient from "@/services/graphql-client";
import { GET_PRODUCTS_BY_COLLECTION_HANDLE } from "@/graphql/queries/products";
import {
  GetProductsByCollectionHandleQuery,
  GetProductsByCollectionHandleQueryVariables,
} from "@/graphql/generated-types";
import { mapProducts } from "./response-mapper";
import { ProductPreview } from "@/domain";

interface FetchProductsResult {
  id: string;
  title: string;
  products: ProductPreview[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string | null;
    startCursor: string | null;
  };
}

export const fetchProductsByCategoryHandle = async (
  handle: string,
  first: number = 10,
  after: string | null
): Promise<FetchProductsResult> => {
  const data = await graphqlClient.request<
    GetProductsByCollectionHandleQuery,
    GetProductsByCollectionHandleQueryVariables
  >(GET_PRODUCTS_BY_COLLECTION_HANDLE, {
    handle,
    first,
    after,
  });

  if (!data.collectionByHandle) {
    throw new Error(`Collection with handle "${handle}" not found.`);
  }

  const collection = data.collectionByHandle;
  const products = mapProducts(collection.products.edges).filter(
    (product) => product !== null
  );

  return {
    id: collection.id,
    title: collection.title,
    products,
    pageInfo: collection.products.pageInfo,
  };
};
