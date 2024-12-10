"use server";

import { fetchProductsByCategoryHandle } from "@/services/products";

export async function getProductsByPage(
  handle: string,
  page: number,
  first: number = 10
) {
  const { cursors, totalPages } = await generateCursorMap(handle, first);
  const afterCursor = page <= 1 ? null : cursors[page - 2];

  const data = await fetchProductsByCategoryHandle(handle, first, afterCursor);
  return {
    data,
    totalPages,
  };
}

async function generateCursorMap(
  handle: string,
  first: number
): Promise<{ cursors: string[]; totalPages: number }> {
  const cursors: string[] = [];
  let afterCursor: string | null = null;
  let hasNextPage = true;
  let totalPages = 0;

  while (hasNextPage) {
    const { products, pageInfo } = await fetchProductsByCategoryHandle(
      handle,
      first,
      afterCursor
    );

    hasNextPage = pageInfo.hasNextPage;
    if (products.length > 0) {
      cursors.push(pageInfo.endCursor || "");
    }

    totalPages++;
    afterCursor = pageInfo.endCursor;
  }

  return { cursors, totalPages };
}
