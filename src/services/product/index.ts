import graphqlClient from "@/services/graphql-client";
import { GET_PRODUCT_BY_HANDLE } from "@/graphql/queries/product";
import { mapProduct } from "./response-mapper";
import {
  GetProductByHandleQueryVariables,
  GetProductByHandleQuery,
} from "@/graphql/generated-types";
import { ProductDetail } from "@/domain";
import { notFound } from "next/navigation";

export const fetchProductByHandle = async (
  handle: string
): Promise<ProductDetail | null> => {
  const data = await graphqlClient.request<
    GetProductByHandleQuery,
    GetProductByHandleQueryVariables
  >(GET_PRODUCT_BY_HANDLE, { handle });

  if (!data.productByHandle) {
    notFound();
  }

  return mapProduct(data.productByHandle);
};
