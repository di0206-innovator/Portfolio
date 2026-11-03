import { test, expect } from "@playwright/test";

test.describe("Divyanshu Sinha Portfolio — End-to-End Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to local site
    await page.goto("/");
    // Wait for preloader animation to finish (counter reaches 100% and fades out)
    await page.waitForSelector("#hero", { state: "visible", timeout: 10000 });
  });

  test("01. SEO, GEO and Meta Headers Validation", async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Divyanshu Sinha — The Builder Behind the Builds/);

    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description).toContain("Wispr Flow");

    // Check canonical URL
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toBe("https://divyanshusinha.me");

    // Check Geo Tags
    const geoRegion = await page.locator('meta[name="geo.region"]').getAttribute("content");
    expect(geoRegion).toBe("IN-MH");
    const geoPlacename = await page.locator('meta[name="geo.placename"]').getAttribute("content");
    expect(geoPlacename).toContain("Pune");

    // Check OpenGraph and Twitter cards
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute("content");
    expect(ogTitle).toContain("Divyanshu Sinha");
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute("content");
    expect(twitterCard).toBe("summary_large_image");

    // Check JSON-LD Structured Data
    const jsonLdScript = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLdScript).toBeTruthy();
    const data = JSON.parse(jsonLdScript!);
    expect(data["@context"]).toBe("https://schema.org");

    // Verify Person, WebSite, ItemList, FAQPage exist
    const graph = data["@graph"];
    const person = graph.find((item: any) => item["@type"] === "Person");
    expect(person.name).toBe("Divyanshu Sinha");
    expect(person.address.addressLocality).toBe("Pune");

    const itemList = graph.find((item: any) => item["@type"] === "ItemList");
    expect(itemList.itemListElement.length).toBe(9);

    const faq = graph.find((item: any) => item["@type"] === "FAQPage");
    expect(faq.mainEntity.length).toBeGreaterThanOrEqual(4);
  });

  test("02. Hero Section & Video Pitch Modal", async ({ page }) => {
    // Verify hero statement
    const heroHeadline = page.locator("#hero h1");
    await expect(heroHeadline).toBeVisible();
    await expect(heroHeadline).toContainText("You've seen what I build");

    // Verify Brand statement
    const heroSection = page.locator("#hero");
    await expect(heroSection).toContainText("I build products, communities and experiences");

    // Open video modal
    const videoBtn = page.getByRole("button", { name: /Watch the 3-Minute Pitch/i });
    await expect(videoBtn).toBeVisible();
    await videoBtn.click();

    // Video modal should appear
    const videoModal = page.getByRole("dialog");
    await expect(videoModal).toBeVisible();
    await expect(videoModal).toContainText("3-MINUTE PITCH");

    // Close video modal
    const closeBtn = page.locator("button[aria-label='Close Video Modal']");
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    } else {
      await page.keyboard.press("Escape");
    }
    await expect(videoModal).toBeHidden();
  });

  test("03. Selected Work — 9 Projects & Modal Simulators", async ({ page }) => {
    // Scroll to Selected Work
    await page.locator("#selected-work").scrollIntoViewIfNeeded();

    // Ensure 9 Project Builds tab is active
    const projectsBtn = page.getByRole("button", { name: /01 · 9 Product Builds/i });
    await expect(projectsBtn).toBeVisible();
    await projectsBtn.click();

    // Verify NotesGPT card and click
    const notesGptCard = page.locator("h3", { hasText: "NotesGPT" }).first();
    await expect(notesGptCard).toBeVisible();
    await notesGptCard.click();

    // NotesGPT modal should be open
    const modal = page.getByRole("dialog");
    await expect(modal).toBeVisible();
    await expect(modal).toContainText("NotesGPT");

    // Check modal tabs
    const citationsTab = modal.getByRole("button", { name: /Articles & Citations/i });
    await expect(citationsTab).toBeVisible();
    await citationsTab.click();
    await expect(modal).toContainText("Dev.to");

    // Close modal via Escape
    await page.keyboard.press("Escape");
    await expect(modal).toBeHidden();

    // Check Climbit Decision Engine card
    const climbitCard = page.locator("h3", { hasText: "Climbit Decision Engine" }).first();
    await expect(climbitCard).toBeVisible();
    await climbitCard.click();
    await expect(modal).toBeVisible();
    await expect(modal).toContainText("Climbit Decision Engine");
    await expect(modal).toContainText("34 Tests Passing");
    await expect(modal).toContainText("Zod Validated");
    await page.keyboard.press("Escape");
    await expect(modal).toBeHidden();

    // Check Brainworks SIH 2026 card
    const brainworksCard = page.locator("h3", { hasText: "Brainworks" }).first();
    await expect(brainworksCard).toBeVisible();
    await brainworksCard.click();
    await expect(modal).toBeVisible();
    await expect(modal).toContainText("Smart India Hackathon 2026");
    await expect(modal).toContainText("Sahil Mane");
    await page.keyboard.press("Escape");
    await expect(modal).toBeHidden();
  });

  test("04. Field Notes & Published Writing Tab", async ({ page }) => {
    await page.locator("#selected-work").scrollIntoViewIfNeeded();

    // Switch to Field Notes tab
    const fieldNotesBtn = page.getByRole("button", { name: /02 · Field Notes & Published Writing/i });
    await expect(fieldNotesBtn).toBeVisible();
    await fieldNotesBtn.click();

    // Verify field note cards
    const notesGptArticle = page.locator("h3", { hasText: /Building NotesGPT/i });
    await expect(notesGptArticle).toBeVisible();

    const climbitArticle = page.locator("h3", { hasText: /Climbit: From a Late/i });
    await expect(climbitArticle).toBeVisible();

    const sihArticle = page.locator("h3", { hasText: /Running the SIH 2026/i });
    await expect(sihArticle).toBeVisible();
  });

  test("05. Community Archive, Pagination & Recognition", async ({ page }) => {
    await page.locator("#community").scrollIntoViewIfNeeded();

    // Check Section Header
    await expect(page.locator("#community h2")).toContainText("People, Places & Momentum");

    // Check Filter Buttons
    const hostedFilter = page.getByRole("button", { name: "Organized & Hosted" });
    await expect(hostedFilter).toBeVisible();
    await hostedFilter.click();

    // Check card exists
    await expect(page.locator("h3", { hasText: "PromptWars × ADYPU" })).toBeVisible();

    // Check Next pagination
    const nextBtn = page.getByRole("button", { name: "Next →" });
    if (await nextBtn.isEnabled()) {
      await nextBtn.click();
      const prevBtn = page.getByRole("button", { name: "← Prev" });
      await expect(prevBtn).toBeEnabled();
      await prevBtn.click();
    }

    // Switch to Recognition tab
    const recognitionTab = page.getByRole("button", { name: /Recognition/i });
    await expect(recognitionTab).toBeVisible();
    await recognitionTab.click();

    // Verify verified recognition honor
    await expect(page.locator("text=Career Guidance on AI & Emerging Tech")).toBeVisible();
    await expect(page.locator("text=INSPIRE MANAK National Workshop")).toBeVisible();
  });

  test("06. Interactive X-Ray & Voice Pipeline Simulation", async ({ page }) => {
    const xraySection = page.locator("#xray");
    await xraySection.scrollIntoViewIfNeeded();

    // Check X-Ray Header
    await expect(xraySection.locator("h2")).toContainText("Every surface has an underneath");

    // Toggle between Engineer and Growth showcases
    const growthBtn = xraySection.getByRole("button", { name: /Growth Operator/i });
    await expect(growthBtn).toBeVisible();
    await growthBtn.click();
    await expect(xraySection).toContainText("GROWTH ENGINE & DISTRIBUTION FLYWHEEL");

    const engineerBtn = xraySection.getByRole("button", { name: /Product Engineer/i });
    await expect(engineerBtn).toBeVisible();
    await engineerBtn.click();
    await expect(xraySection).toContainText("DETERMINISTIC STATE MACHINE");

    // Test Voice Process simulation step clicks
    const step2Btn = xraySection.getByRole("button", { name: /PHASE 02/i });
    if (await step2Btn.isVisible()) {
      await step2Btn.click();
      await expect(xraySection).toContainText("Synthesizing the State Machine");
    }
  });

  test("07. Footer Watermark & Direct Connect Verification", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();

    // Verify LinkedIn link
    const linkedinLink = page.locator('a[href="https://www.linkedin.com/in/divyanshu-sinha-46074126b/"]').first();
    await expect(linkedinLink).toBeVisible();

    // Verify GitHub link
    const githubLink = page.locator('a[href="https://github.com/di0206-innovator"]').first();
    await expect(githubLink).toBeVisible();

    // Verify Email link
    const emailLink = page.locator('a[href="mailto:divyanshu.b.sinha@gmail.com"]').first();
    await expect(emailLink).toBeVisible();

    // Verify SVG watermark text is DIVYANSHU
    const watermarkText = page.locator("#contact svg text");
    await expect(watermarkText).toContainText("DIVYANSHU");
  });

  test("08. AEO Endpoints Availability: llms.txt & llms-full.txt", async ({ request }) => {
    // Check llms.txt
    const llmsRes = await request.get("/llms.txt");
    expect(llmsRes.ok()).toBeTruthy();
    const llmsText = await llmsRes.text();
    expect(llmsText).toContain("Divyanshu Sinha");
    expect(llmsText).toContain("NotesGPT");
    expect(llmsText).toContain("Wispr Flow");

    // Check llms-full.txt
    const llmsFullRes = await request.get("/llms-full.txt");
    expect(llmsFullRes.ok()).toBeTruthy();
    const llmsFullText = await llmsFullRes.text();
    expect(llmsFullText).toContain("Divyanshu Sinha");

    // Check robots.txt
    const robotsRes = await request.get("/robots.txt");
    expect(robotsRes.ok()).toBeTruthy();
    const robotsText = await robotsRes.text();
    expect(robotsText).toContain("llms.txt");
    expect(robotsText).toContain("sitemap.xml");

    // Check sitemap.xml
    const sitemapRes = await request.get("/sitemap.xml");
    expect(sitemapRes.ok()).toBeTruthy();
    const sitemapText = await sitemapRes.text();
    expect(sitemapText).toContain("https://divyanshusinha.me");
  });
});
