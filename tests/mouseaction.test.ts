import { test } from '@playwright/test';
test.beforeEach(async ({page}) => {
   await page.goto('https://www.demoblaze.com');
});
test('Right Click', async ({page}) => {   
    await page.locator('#login2').click({button:'right'});
});
test('Middle Click', async ({page}) => {
    await page.locator('#cartur').click({button:'middle'});
});
test('Double Click', async ({page}) => {
    await page.locator('#login2').click({clickCount:2});
});
test.afterEach(async ({page} ) => {
    console.log("Execution completed");
    page.close();
});