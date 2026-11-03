import { test, expect } from "@playwright/test";

const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "desktop-1280", width: 1280, height: 800 },
  { name: "desktop-1024", width: 1024, height: 768 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-375", width: 375, height: 667 },
];

function isOverlapping(rect1: { x: number; y: number; width: number; height: number }, rect2: { x: number; y: number; width: number; height: number }) {
  return !(
    rect1.x + rect1.width <= rect2.x ||
    rect2.x + rect2.width <= rect1.x ||
    rect1.y + rect1.height <= rect2.y ||
    rect2.y + rect2.height <= rect1.y
  );
}

for (const vp of viewports) {
  test(`Hero layout verification @ ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto("/");
    await page.waitForSelector("#hero", { state: "visible", timeout: 10000 });

    // 1. Verify no horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalOverflow, `Horizontal overflow detected at ${vp.width}px`).toBe(false);

    // 2. Verify text safe-zone elements are visible
    const headline = page.locator("#hero h1");
    await expect(headline).toBeVisible();

    const headlineBox = await headline.boundingBox();
    expect(headlineBox).not.toBeNull();

    const paragraph = page.locator("#hero p").first();
    const paragraphBox = await paragraph.boundingBox();

    // 3. For viewports >= 1024, check the 10 floating cards
    if (vp.width >= 1024) {
      const cards = page.locator('figure[data-slot="visual"] > div');
      const cardCount = await cards.count();
      expect(cardCount).toBe(10);

      const cardBoxes = [];
      for (let i = 0; i < cardCount; i++) {
        const box = await cards.nth(i).boundingBox();
        expect(box, `Card ${i} should have a bounding box`).not.toBeNull();
        if (box) cardBoxes.push({ index: i, box });
      }

      // Assert NO card overlaps the headline or paragraph
      for (const { index, box } of cardBoxes) {
        if (headlineBox) {
          const overlapsHeadline = isOverlapping(box, headlineBox);
          expect(overlapsHeadline, `Card ${index} overlaps headline at ${vp.width}px`).toBe(false);
        }
        if (paragraphBox) {
          const overlapsParagraph = isOverlapping(box, paragraphBox);
          expect(overlapsParagraph, `Card ${index} overlaps paragraph at ${vp.width}px`).toBe(false);
        }
      }

      // Assert NO two cards collide with one another
      for (let i = 0; i < cardBoxes.length; i++) {
        for (let j = i + 1; j < cardBoxes.length; j++) {
          const c1 = cardBoxes[i];
          const c2 = cardBoxes[j];
          const collision = isOverlapping(c1.box, c2.box);
          expect(collision, `Card ${c1.index} collides with Card ${c2.index} at ${vp.width}px`).toBe(false);
        }
      }
    } else {
      // For mobile/tablet (<1024), absolute cards are hidden, compact rack is present
      const visualSlot = page.locator('figure[data-slot="visual"]');
      await expect(visualSlot).toBeHidden();
    }
  });
}
