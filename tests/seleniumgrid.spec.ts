
import { test, expect } from '@playwright/test';

test("Verify the field input", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const messageField = page.getByPlaceholder("Please enter your Message");
    console.log(await messageField.getAttribute('placeholder'));
    expect(messageField).toHaveAttribute("placeholder","Please enter your Message")
    console.log('Before entering value:'+await messageField.inputValue());
    await messageField.fill("Hello");
    console.log('After entering value:'+await messageField.inputValue());
    await page.getByRole("button", { name: "Get Checked Value" }).click();
    const displayedText = await page.locator("#message").innerText();
    console.log(displayedText);
    page.close();
});
test("verify sum of two number", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    await page.getByText("Two Input Fields").scrollIntoViewIfNeeded();
    const firstvalue = page.getByPlaceholder("Please enter first value");
    await firstvalue.click();
    await firstvalue.pressSequentially("20", { delay: 100 });
    const secondvalue = page.getByPlaceholder("Please enter second value");
    await secondvalue.click();
    await secondvalue.pressSequentially("10", { delay: 100 });
    const button = page.getByRole("button", { name: "Get Sum" });
    await expect(button).toBeEnabled();
    await button.scrollIntoViewIfNeeded();
    await expect(button).toBeVisible();
    await button.click();
    console.log("Clicked");
    console.log("First Value:", await firstvalue.inputValue());
    console.log("Second Value:", await secondvalue.inputValue());
    const result = page.locator("#addmessage");
    await result.isVisible();
    console.log("Result:", await result.textContent());
    await expect(result).toHaveText("30");

});
