# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automationexercisetest\register.test.ts >> verify registeration
- Location: tests\automationexercisetest\register.test.ts:2:1

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.fill: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('[data-qa="signup-name"]')

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | test('verify registeration',async({page})=>{
  3  |     await page.goto("https://automationexercise.com/");
  4  |     await page.getByRole('link',{name:' Signup / Login'}).click();
  5  |     await expect(page).toHaveURL("https://automationexercise.com/login") 
> 6  |     await page.locator('[data-qa="signup-name"]').fill("Harini");
     |                                                   ^ Error: locator.fill: Test timeout of 50000ms exceeded.
  7  |     const email = `harini${Date.now()}@gmail.com`;
  8  |     await page.getByPlaceholder('Email Address').nth(2).fill(email);
  9  |     await page.getByRole('button',{name:'Signup'}).click();
  10 |     await expect(page).toHaveURL("https://automationexercise.com/signup");
  11 |     await page.locator('#id_gender2').click();
  12 |     await page.locator('#password').fill("hari");
  13 |     await page.locator('#days').selectOption('26');
  14 |     await page.locator('#months').selectOption('12');
  15 |     await page.locator('#years').selectOption('2004');
  16 |     await page.getByRole("checkbox",{name:"subscribe to Newsletter"}).check();
  17 |     await page.locator("#first_name").fill("Harini");
  18 |     await page.locator("#last_name").fill("Raja");
  19 |     await page.locator('[data-qa="company"]').fill("Expleo");
  20 |     await page.locator('#address1').fill("1/181,vennandur")
  21 |     await page.locator('#address2').fill("3/18,Salem")
  22 |     await page.locator('#country').selectOption('India');
  23 |     await page.locator('#state').fill('TamilNadu');
  24 |     await page.locator('#city').fill('Salem');
  25 |     await page.locator('#zipcode').fill("637501");
  26 |     await page.locator('#mobile_number').fill("9867542200");
  27 |     await page.getByRole('button',{name:'Create Account'}).click();
  28 |     await expect(page.locator("//h2[@data-qa='account-created']")).toHaveText("ACCOUNT CREATED!");
  29 |     await page.getByText('Continue').click();
  30 |     await expect(page.getByText('Logged in as hari')).toBeVisible();
  31 |     await page.getByRole('link',{name:'Delete Account'}).click();
  32 |     await expect(page.locator("//h2[@data-qa='account-deleted']")).toHaveText("ACCOUNT DELETED!");
  33 |     await page.getByText('Continue').click();
  34 |     await expect(page).toHaveURL("https://automationexercise.com/") 
  35 | })
```