import { test, expect } from "@playwright/test";

const HOME_URL = "http://localhost:5500/index.html";
const VENUE_LIST_SELECTOR = "#venue-container a";
const VENUE_HEADING_SELECTOR = "h1";

test.describe("Navigation Tests", () => {
  
  test("Navigates to a venue details page and verifies heading", async ({ page }) => {
    await page.goto(HOME_URL);
    
    await page.waitForSelector(VENUE_LIST_SELECTOR);
    
    await page.locator(VENUE_LIST_SELECTOR).first().click();
    
    await expect(page.locator(VENUE_HEADING_SELECTOR)).toContainText("Venue details");
  });

});