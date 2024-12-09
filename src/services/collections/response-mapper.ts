import { Category } from "@/domain";
import { GetCollectionsQuery } from "@/graphql/generated-types";

type RawCollection = GetCollectionsQuery["collections"]["edges"][0]["node"];

export const mapCollections = (
  edges: Array<{ node: RawCollection }>
): Array<Category> => {
  return edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description,
  }));
};
