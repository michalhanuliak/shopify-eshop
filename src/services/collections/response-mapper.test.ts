import { describe, it, expect } from "vitest";

import { Category } from "@/domain";
import { GetCollectionsQuery } from "@/graphql/generated-types";
import { mapCollections } from "./response-mapper";

type RawCollection = GetCollectionsQuery["collections"]["edges"][0]["node"];

describe("mapCollections", () => {
  it("returns an empty array if edges is empty", () => {
    const result = mapCollections([]);
    expect(result).toEqual([]);
  });

  it("maps raw collections correctly", () => {
    const mockCollections: Array<{ node: RawCollection }> = [
      {
        node: {
          id: "gid://shopify/Collection/123",
          title: "Summer Collection",
          handle: "summer-collection",
          description: "A great collection for summer.",
        },
      },
      {
        node: {
          id: "gid://shopify/Collection/456",
          title: "Winter Collection",
          handle: "winter-collection",
          description: "Warm and cozy items for winter.",
        },
      },
    ];

    const expected: Category[] = [
      {
        id: "gid://shopify/Collection/123",
        title: "Summer Collection",
        handle: "summer-collection",
        description: "A great collection for summer.",
      },
      {
        id: "gid://shopify/Collection/456",
        title: "Winter Collection",
        handle: "winter-collection",
        description: "Warm and cozy items for winter.",
      },
    ];

    const result = mapCollections(mockCollections);
    expect(result).toEqual(expected);
  });

  it("handles missing description gracefully", () => {
    const mockCollections: Array<{ node: RawCollection }> = [
      {
        node: {
          id: "gid://shopify/Collection/789",
          title: "No Description Collection",
          handle: "no-description-collection",
          // Description is optional in some schemas; if it's nullable, test how it's handled.
          description: null as unknown as string,
        },
      },
    ];

    const expected: Category[] = [
      {
        id: "gid://shopify/Collection/789",
        title: "No Description Collection",
        handle: "no-description-collection",
        description: null as unknown as string,
      },
    ];

    const result = mapCollections(mockCollections);
    expect(result).toEqual(expected);
  });
});
