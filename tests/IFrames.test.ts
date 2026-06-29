import {test, expect} from '@playwright/test';

test('iframe test', async ({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No of frames "+allframes.length);
    const myframe = page.frame("firstFr");
    await myframe?.fill("input[name='fname']", "Sample");
    await myframe?.fill("input[name='lname']", "1");
    
    const frame = page.frameLocator('iframe[name="firstFr"]');
    const text = await frame?.locator("p.text-sm.font-semibold.text-center").textContent();
    expect(text).toContain("Sample 1");})