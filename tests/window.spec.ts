import {test, expect} from '@playwright/test';

test('Handle New Window', async({page, context})=>{
    await page.goto("https://demoqa.com/browser-windows/");
    console.log("First window URL: ", page.url());
    const [newWindow] = await Promise.all([context.waitForEvent("page"), page.locator('#windowButton').click()]);
    await newWindow.waitForLoadState("domcontentloaded");
    console.log("New window URL: ", newWindow.url());
    const heading = await newWindow.locator("#sampleHeading").textContent();
    console.log("Heading: ", heading);
    await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a sample page");
    await newWindow.close();
})
test('Iterate windows',async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows/");
    const [tab] = await Promise.all([context.waitForEvent("page"), page.locator('#tabButton').click()]);
    await tab.waitForLoadState();
    const [window] = await Promise.all([context.waitForEvent("page"), page.locator('#windowButton').click()]);
    await window.waitForLoadState();
    const pages=context.pages();
    console.log("Number of pages:",pages.length);
    for(const p of pages){
        console.log("-----------------------");
        console.log("URL:",p.url());
        console.log("Title:",await p.title());

    }
})
test('Iterate windows attribute', async({page, context})=>{
    await page.goto("https://demoqa.com/browser-windows/");
    const [newtab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await newtab.waitForLoadState();
    const [newwindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await newwindow.waitForLoadState();
    const pages = context.pages();
    console.log("Number of Pages: ", pages.length);
    for(const p of pages){
        console.log("URL: ", p.url());
        if(p.url().includes('sample')){
            const text=await p.locator("#sampleHeading").textContent();
            console.log("Sample Page Heading:",text);
        }
        
    }
})