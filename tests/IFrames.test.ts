import {test, expect} from '@playwright/test';

test('iframe test', async ({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No of frames "+allframes.length);
    const myframe = page.frame("firstFr");
    await myframe?.fill("input[name='fname']", "Harini");
    await myframe?.fill("input[name='lname']", "Raja");
    const frame = page.frameLocator('iframe[name="firstFr"]');
    await expect(page.locator("p.text-sm font-semibold text-center")).toHaveText('Harini');
    await expect(page.locator("p.text-sm font-semibold text-center")).toHaveText('Raja');
})
