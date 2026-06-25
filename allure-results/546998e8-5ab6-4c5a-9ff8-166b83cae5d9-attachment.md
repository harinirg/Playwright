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
Error: locator.check: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('#id_gender2')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]: Harini
        - textbox "Email Address" [active] [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]: harini1782396029992@gmail.com
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f22e1]:
        - generic [active]:
          - generic [ref=f23e1]:
            - generic [ref=f23e2]:
              - generic:
                - img [ref=f23e6] [cursor=pointer]
                - button [ref=f23e8] [cursor=pointer]:
                  - img [ref=f23e9]
            - insertion [ref=f23e16]:
              - generic [ref=f23e17]:
                - link "Click Here" [ref=f23e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CVDssfzQ9aqvoBY7fjeYPirjvqA35zOD_hwG0usSI9RShpvjz0B0QASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEiQJP0McogVU4Xb5612ue_Ei8XnCWygqwwIl4Qyfuh4APXl-Vt4aYybpa0VaOnQqok3xUhck4rO6FH-pq7CY4I-LyZJehTa6X1DDHejSLan5iLteIp0RK3j_mbpdA3RpW2BFYE9Wnkw_eBVtV2c7Kz10A_Ng1h9xTtWLjmnjZ6jsKwKz7Enb_RXSlPvZPi7O30e-v93kC0BuAtpdLpLm5IyAnJQrpc3cE7JBToTFRk_JQVUB48gkDwv_X7XB_66oEr9Nswpw_tSF0CiPLJNJeMHOI5Jdq39ceh7H_590gX8UTN0TxeN4egivPebTCaBHzMHJ88FgQebKd6-3YydEXV_EZT1P_UctDWaLqwASaxOuykwXgBAOIBe2K3IBTkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYl-We0sailQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCOSoodLGopUDFY5vwwYdCtwb1fANAYgOCbATkNj4ItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAQ&ae=1&num=1&cid=CAQSnwIAEQoqgQh7Z5tyOxAtRLlgVcj4UHoNdvr5eYKT9d9hdlFwB2-8bzJ2a7i7haEamsu_OxeoCahJN34iNysSL4uDrAsoGgWW2hh_LskxqK_1JYhVLYlhJleA5Ge-gVJHtoxVTrYa0RgMAxDGE_od_eJkak43f9hxC0JFgcrZUc7B-ObjFBzGupnEzfmIyIHqsPQL-F1YhXpTuRB_GiLSNLUn82tiDcWN6e0awS8XxhV8KCDxdHoZruK7n3l_2YIIRoLsJs95e5LLLoqi22PjAOEJc6oiDhjBki_LjOTm7WqYcYLNs8YhK5lZPhb6L30s6yWwes0PscbkUoNWMOcHyG8k5RY3-E-ZU1RKDb7M73guSSoUI2AFv6wGhPwVpfRhCBgB&sig=AOD64_1fvN_jQXEhAHh-HTSsnORIB0rPMw&client=ca-pub-1677597403311019&dbm_c=AKAmf-CEGxWcRsHn9llkw5224YQrcKIh3C8XssqKao5XwB11pYoL9cw1OWOB9U7h-8DoTwWUMIHhniqczV1uIvkgqz4dqgYXlduJUjNRsMo56GJQBy86EIAs_LKA6CWJGDlTjeozQkUB0nrVGeGv25KCz5BcNAvtw_HRcJrOze_sCxRuW0f8zQocyHe8uzMUpr_WBIc1nf7QRzJpl9YN735m6esDmqosPDydl-Xlj5z-rOY9LkVbCrpJ75CqACpoqwdr-8D66JEb_MKmThQ5iJ-IgaSsqoNjyOpEhb5gTgGIfwUcFkuYV2k&cry=1&dbm_d=AKAmf-CFlISdEzlkezLx8CJElwwSHik0ZThfP30cpiTxXmB07h9RnjHcsqah1qCquawTiEH5ztPSlp7vnIw3EY6Hh5FvDTqbjDieMX4wyjIwEIIUUzr7xlAJuIHpRrgC0wdjyVtFK2w2SUL6SoIny0dz07mfeR5qWZmuP2EqBOp1ZPH0TGTi9BNQ5h2D6mbPp3SmXL83Nklm0MiF6d_G50Wdc-_lYoUrEVyB3XaG-TNUjA1_WseYTELBKpmx2hjRaMvHghIDyqx60jkAwtj8fjyC7w6OSetwrDhpzdWMdsvSEgvRo1DX19YrCN-Cl4Ecxpg4GN1QpYDKdMTkXIlrgP8upDD84xqVvdNcs2VMSS4Irh9PxUWS3I2upxIq6io1mESB9UEXmnYk9gGEvLBEicAHy7BDhM0MlFrUF_ePtSOyecwhSVvQlBuM5YdIqcB9aMimhfm5nWXkeYY0kGAtyLYWPjXccTNMds_W7GJBXiUPah-iFlap1kGR5DVuBqMvBhgsi8_SSWljxaSQsQ5pJ-vl_GHUA83gq4JJ2QbfWsq7BfyLwA60pbxCX9DH6eDsjGzBmGsF0BeSEFFLj-pvZmIxVirWHOD3fcEw8SeOtthvGCLb2yOTvWMADeB6L4x4gwEURjtUNVN0t7_qlV8ORIKp5inylyHK-jhBhssSx2dcn6FsmGB9lpdxcIDRgP51JG1yWq3Pppvn&adurl=https://servedby.flashtalking.com/click/7/296969;10263352;5297563;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0gNRlu1NlO9eTVGxScGfFGX&ft_impID=83EC06C6-5FB5-D35D-41D9-901B6B5EDF3A&ft_section=22281651565&g=67508938F3C8AF&random=329195.22677031695&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f23e19]
                - link "AdChoices arrow" [ref=f23e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f23e22]
                - link "Privacy Notification" [ref=f23e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f23e25]
                - link "Privacy Notification" [ref=f23e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f23e28]
          - iframe
          - iframe [ref=f23e29]:
            
          - iframe [ref=f23e30]:
            
          - iframe [ref=f23e31]:
            
          - iframe [ref=f23e32]:
            
          - iframe [ref=f23e33]:
            
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | test('verify registeration',async({page})=>{
  3  |     await page.goto("https://automationexercise.com/");
  4  |     await page.getByRole('link', {name:'Signup / Login'}).click();
  5  |     console.log("Signup clicked")
  6  |     await expect(page.getByText('New User Signup!')).toBeVisible();
  7  |     await page.locator('[data-qa="signup-name"]').fill("Harini");
  8  |     const email = `harini${Date.now()}@gmail.com`;
  9  |     await page.getByPlaceholder('Email Address').nth(2).fill(email);
  10 |     await page.getByRole('button',{name:'Signup'}).click();
  11 |     console.log("Credentials entered");
> 12 |     await page.locator('#id_gender2').check();
     |                                       ^ Error: locator.check: Test timeout of 50000ms exceeded.
  13 | 
  14 | 
  15 |     
  16 |     await page.locator('#password').fill("Demo@123");
  17 |     await page.locator('#days').selectOption('13');
  18 |     await page.locator('#months').selectOption('June');
  19 |     await page.locator('#years').selectOption('2007');
  20 |     await page.locator('#newsletter').check();
  21 |     await page.locator('#optin').check();
  22 |     console.log("Account Information Entered");
  23 | 
  24 |     await page.locator('#first_name').fill("Demo");
  25 |     await page.locator('#last_name').fill("Demo");
  26 |     await page.locator('#company').fill("SmartCliff");
  27 |     await page.locator('#address1').fill("Clock Tower");
  28 |     await page.locator('#address2').fill("R.S Puram");
  29 |     await page.locator('#country').selectOption('India');
  30 |     await page.locator('#state').fill("Tamil Nadu");
  31 |     await page.locator('#city').fill("Coimbatore");
  32 |     await page.locator('#zipcode').fill("641002");
  33 |     await page.locator('#mobile_number').fill("9876543210");
  34 |     console.log("Address Information Entered");
  35 |     await page.getByRole('button', {name: 'Create Account'}).click();
  36 |     console.log("Account Created");
  37 | 
  38 |     await expect(page.getByText('Account Created!')).toBeVisible();
  39 |     await page.getByRole('link', {name: 'Continue'}).click();
  40 |     await expect(page.getByText(`Logged in as Demo`)).toBeVisible();
  41 |     await page.getByRole('link', {name:  'Delete Account'}).click();
  42 |     await expect(page.getByText('Account Deleted!')).toBeVisible();
  43 |     await page.getByRole('link', {name: 'Continue'}).click();
  44 |     console.log("Account Deleted");
  45 | })
```