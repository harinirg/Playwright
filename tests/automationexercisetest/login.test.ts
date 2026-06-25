import {test,expect} from '@playwright/test'
test ("verify login",async({page})=>{
await page.goto("https://automationexercise.com/"),{
        waitUntil: "domcontentloaded"
    }
    await expect(page).toHaveURL("https://automationexercise.com/");
    console.log("Home page - Verified");
    await page.getByRole('link', {name: 'Signup / Login'}).click();
    await expect(page.getByText('Login to your account')).toBeVisible();
    await page.getByPlaceholder('Email Address').nth(0).fill('sample.123@gmail.com');
    await page.getByPlaceholder("Password").fill('Sample@123');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Logged in as')).toBeVisible();
})