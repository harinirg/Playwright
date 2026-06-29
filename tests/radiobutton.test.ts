import {test,expect} from "@playwright/test"
test.beforeEach("website open",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground");
    await page.getByRole("link",{name:"Radio Buttons Demo"}).click();
})
test("gender radio button", async ({ page }) => {
    await page.getByRole("radio", { name: "Female" }).nth(0).check();
    await page.locator("#buttoncheck").click();
    await expect(page.locator(".radiobutton"))
        .toHaveText("Radio button 'Female' is checked");

})
test("disabled button",async({page})=>{
    const radio = page.locator("input[value='RadioButton1']");
    await radio.check();
    await expect(radio).toBeChecked();
    const disableradio=page.getByRole("radio",{name:"Disabled Radio Button"});
    await expect(disableradio).toBeDisabled();
})
test ("Select Gender and Age",async({page})=>{
    await page.getByRole("radio", { name: "Female" }).nth(1).check();
    await page.getByLabel("15 to 50").check();
    await page.getByRole("button",{name:"Get values"}).click();
    await expect(page.locator(".genderbutton")).toHaveText("Female");
    await expect(page.locator(".groupradiobutton")).toHaveText("15 - 50");
})