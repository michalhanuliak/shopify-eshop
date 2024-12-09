import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");

  const categories = page.locator("[data-testid=category-list]");
  categories.first().click();
});

test.describe("Products", () => {
  test("should show products", async ({ page }) => {
    const products = page.locator("[data-testid=product-list]");
    await expect(products).toBeVisible();
  });

  test("should show pagination", async ({ page }) => {
    const pagination = page.locator("[data-testid=pagination]");
    await expect(pagination).toBeVisible();
  });
});
