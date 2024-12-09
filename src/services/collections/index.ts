import {
  GetCollectionsQuery,
  GetCollectionsQueryVariables,
} from "@/graphql/generated-types";
import { GET_COLLECTIONS } from "@/graphql/queries/collections";
import graphqlClient from "@/services/graphql-client";
import { mapCollections } from "./response-mapper";

export const fetchCollections = async (first: number) => {
  const response = await graphqlClient.request<
    GetCollectionsQuery,
    GetCollectionsQueryVariables
  >(GET_COLLECTIONS, {
    first,
  });

  return mapCollections(response.collections.edges);
};
