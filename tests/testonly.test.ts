import {test,expect} from "@playwright/test"
test("Login test1",async({page})=>{
    await page.goto("https://demoblaze.com/");
    await page.locator("#login2").click();
    await page.fill("//input[@id='loginusername']","Admin");
    await page.fill("//input[@id='loginpassword']","admin");
    await page.click("//button[text()='Log in']");
    await expect (page.locator('#logout2')).toBeVisible();
    await expect(page.getByRole("link", { name: "Log out" })).toHaveText("Log out");
    const text = await page.locator("#nameofuser").textContent();
    expect(text).toBe("Welcome Admin");
})
test("Login test2",async({page})=>{
    await page.goto("https://demoblaze.com/");
    await page.locator("#login2").click();
    await page.fill("//input[@id='loginusername']","Admin");
    await page.fill("//input[@id='loginpassword']","admin");
    await page.click("//button[text()='Log in']");
    await expect (page.locator('#logou2')).toBeVisible();
    await expect(page.getByRole("link", { name: "Log out" })).toHaveText("Log out");
    const text = await page.locator("#nameofuser").textContent();
    expect(text).toBe("Welcome Admin");
})
test("Login3",async({page})=>{
    console.log("Login")
});
