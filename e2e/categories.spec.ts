import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("Categories", () => {
  test("should navigate to categories", async ({ page }) => {
    const categoryTitle = page.locator("[data-testid=category-title]");
    await expect(categoryTitle).toBeVisible();

    const categories = page.locator("[data-testid=category-list]");
    await expect(categories).toBeVisible();
  });

  test("should category be clickable", async ({ page }) => {
    const categories = page.locator("[data-testid=category-list]");
    const firstCategory = categories.first();

    await firstCategory.click();
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveURL(new RegExp(`/collections/`));
  });
});
