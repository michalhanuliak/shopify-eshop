import { describe, it, expect } from "vitest";

import { ProductPreview } from "@/domain";
import {
  CurrencyCode,
  GetProductByHandleQuery,
} from "@/graphql/generated-types";
import { mapProducts } from "./response-mapper";

type RawProduct = GetProductByHandleQuery["productByHandle"];

describe("mapProducts", () => {
  it("returns an empty array if input is empty", () => {
    const result = mapProducts([]);
    expect(result).toEqual([]);
  });

  it("returns an array of null when node is null", () => {
    const edges = [{ node: null }] as Array<{ node: RawProduct }>;
    const result = mapProducts(edges);
    expect(result).toEqual([null]);
  });

  it("maps a product correctly", () => {
    const mockProduct: NonNullable<RawProduct> = {
      id: "gid://shopify/Product/123",
      title: "Test Product",
      description: "A great test product",
      handle: "test-product",
      priceRange: {
        minVariantPrice: {
          amount: "19.99",
          currencyCode: "USD" as CurrencyCode,
        },
      },
      images: {
        edges: [
          {
            node: {
              url: "https://example.com/image.jpg",
            },
          },
        ],
      },
    };

    const edges = [{ node: mockProduct }];
    const result = mapProducts(edges);

    const expected: ProductPreview = {
      id: mockProduct.id,
      title: mockProduct.title,
      description: mockProduct.description,
      price: "19.99 USD",
      imageUrl: "https://example.com/image.jpg",
      handle: mockProduct.handle,
    };

    expect(result).toEqual([expected]);
  });

  it("handles missing images gracefully by returning empty string as imageUrl", () => {
    const mockProduct: RawProduct = {
      id: "gid://shopify/Product/456",
      title: "No Image Product",
      description: "Product without images",
      handle: "no-image-product",
      priceRange: {
        minVariantPrice: {
          amount: "9.99",
          currencyCode: "USD" as CurrencyCode,
        },
      },
      images: {
        edges: [],
      },
    };

    const edges = [{ node: mockProduct }];
    const result = mapProducts(edges);

    expect(result[0]?.imageUrl).toBe("");
  });
});
