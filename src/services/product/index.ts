import graphqlClient from "@/services/graphql-client";
import { GET_PRODUCT_BY_HANDLE } from "@/graphql/queries/product";
import { mapProduct } from "./response-mapper";
import {
  GetProductByHandleQueryVariables,
  GetProductByHandleQuery,
} from "@/graphql/generated-types";
import { ProductDetail } from "@/domain";

export const fetchProductByHandle = async (
  handle: string
): Promise<ProductDetail | null> => {
  const data = await graphqlClient.request<
    GetProductByHandleQuery,
    GetProductByHandleQueryVariables
  >(GET_PRODUCT_BY_HANDLE, { handle });

  if (!data.productByHandle) {
    throw new Error(`Product with handle "${handle}" not found.`);
  }

  return mapProduct(data.productByHandle);
};
