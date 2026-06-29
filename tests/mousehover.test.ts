import {test,expect} from "@playwright/test"
test.beforeEach("Open the website",async({page})=>
{
    await page.goto("https://www.testmuai.com/selenium-playground/hover-demo/");
})
test("mouse hover",async({page})=>{
    const Hover=page.getByText("Hover Me").nth(0);
    await Hover.hover();
    await expect(Hover).toHaveCSS("color", "rgb(40, 167, 69)");
})