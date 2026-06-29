import { test, expect } from '@playwright/test';

test('iframe test', async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const allFrames = page.frames();
  console.log("No of frames: " + allFrames.length);
  const myFrame = page.frame("firstFr");
  await myFrame?.fill("input[name='fname']", "Sample");
  await myFrame?.fill("input[name='lname']", "1");
  const frame = page.frameLocator('iframe[name="firstFr"]');
  await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText("Sample 1");
});