import { describe, it, expect } from "vitest";

import { ProductDetail } from "@/domain";
import {
  CurrencyCode,
  GetProductByHandleQuery,
} from "@/graphql/generated-types";
import { mapProduct } from "./response-mapper";

type RawProduct = GetProductByHandleQuery["productByHandle"];

describe("mapProduct", () => {
  it("returns null if rawProduct is null", () => {
    const result = mapProduct(null);
    expect(result).toBeNull();
  });

  it("maps a raw product correctly", () => {
    const mockProduct: NonNullable<RawProduct> = {
      id: "gid://shopify/Product/789",
      title: "Test Product",
      description: "An amazing test product",
      handle: "test-product",
      priceRange: {
        minVariantPrice: {
          amount: "29.99",
          currencyCode: "USD" as CurrencyCode,
        },
      },
      images: {
        edges: [
          {
            node: {
              url: "https://example.com/image1.jpg",
            },
          },
          {
            node: {
              url: "https://example.com/image2.jpg",
            },
          },
        ],
      },
    };

    const expected: ProductDetail = {
      id: mockProduct.id,
      title: mockProduct.title,
      description: mockProduct.description,
      price: "29.99 USD",
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
      handle: mockProduct.handle,
    };

    const result = mapProduct(mockProduct);
    expect(result).toEqual(expected);
  });

  it("handles a product without images gracefully", () => {
    const mockProduct: RawProduct = {
      id: "gid://shopify/Product/012",
      title: "No Image Product",
      description: "A product without any images",
      handle: "no-image-product",
      priceRange: {
        minVariantPrice: {
          amount: "10.00",
          currencyCode: "USD" as CurrencyCode,
        },
      },
      images: {
        edges: [],
      },
    };

    const result = mapProduct(mockProduct);

    expect(result?.images).toEqual([]);
  });
});
