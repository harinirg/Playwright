import { Browser } from '@playwright/test';
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    const title=await page.title();
    console.log("Page Title:",title);
    const content=await page.content();
    console.log("Html:",content.substring(0,300));
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']","Admin");
    await page.fill("//input[@id='loginpassword']","admin");
    await page.click("//button[text()='Log in']");
    const url=await page.url();
    console.log("url:",url);
    await page.waitForTimeout(5000);
    page.close();
})
    