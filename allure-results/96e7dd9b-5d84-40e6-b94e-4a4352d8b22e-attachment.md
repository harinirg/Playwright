# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automationexercisetest\register.test.ts >> verify registeration
- Location: tests\automationexercisetest\register.test.ts:2:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://automationexercise.com/signup"
Received: "https://automationexercise.com/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://automationexercise.com/login"

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name": Harini
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address": harini1782394852988@gmail.com
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
- insertion:
  - iframe
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | test('verify registeration',async({page})=>{
  3  |     await page.goto("https://automationexercise.com/");
  4  |     await page.getByRole('link',{name:' Signup / Login'}).click();
  5  |     console.log("Signup clicked")
  6  |     await expect(page).toHaveURL("https://automationexercise.com/login"); 
  7  |     await page.locator('[data-qa="signup-name"]').fill("Harini");
  8  |     const email = `harini${Date.now()}@gmail.com`;
  9  |     await page.getByPlaceholder('Email Address').nth(2).fill(email);
  10 |     await page.getByRole('button',{name:'Signup'}).click();
  11 |     console.log("Credentials entered");
  12 |     console.log(page.url);
> 13 |     await expect(page).toHaveURL("https://automationexercise.com/signup");
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  14 |     await page.locator('#id_gender2').click();
  15 |     await page.locator('#password').fill("hari");
  16 |     await page.locator('#days').selectOption('26');
  17 |     await page.locator('#months').selectOption('12');
  18 |     await page.locator('#years').selectOption('2004');
  19 |     await page.getByRole("checkbox",{name:"subscribe to Newsletter"}).check();
  20 |     await page.locator("#first_name").fill("Harini");
  21 |     await page.locator("#last_name").fill("Raja");
  22 |     await page.locator('[data-qa="company"]').fill("Expleo");
  23 |     await page.locator('#address1').fill("1/181,vennandur")
  24 |     await page.locator('#address2').fill("3/18,Salem")
  25 |     await page.locator('#country').selectOption('India');
  26 |     await page.locator('#state').fill('TamilNadu');
  27 |     await page.locator('#city').fill('Salem');
  28 |     await page.locator('#zipcode').fill("637501");
  29 |     await page.locator('#mobile_number').fill("9867542200");
  30 |     await page.getByRole('button',{name:'Create Account'}).click();
  31 |     await expect(page.locator("//h2[@data-qa='account-created']")).toHaveText("ACCOUNT CREATED!");
  32 |     await page.getByText('Continue').click();
  33 |     await expect(page.getByText('Logged in as hari')).toBeVisible();
  34 |     await page.getByRole('link',{name:'Delete Account'}).click();
  35 |     await expect(page.locator("//h2[@data-qa='account-deleted']")).toHaveText("ACCOUNT DELETED!");
  36 |     await page.getByText('Continue').click();
  37 |     await expect(page).toHaveURL("https://automationexercise.com/") 
  38 | })
```