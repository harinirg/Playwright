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
        - textbox "Your email address" [ref=e64]: harini1782396016428@gmail.com
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "API development kits" [ref=e79] [cursor=pointer]:
        - generic "API development kits" [ref=e80]
        - img [ref=e82]
      - link "Subscription management software" [ref=e84] [cursor=pointer]:
        - generic "Subscription management software" [ref=e85]
        - img [ref=e87]
      - link "Video tutorials subscription" [ref=e89] [cursor=pointer]:
        - generic "Video tutorials subscription" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - iframe [ref=f18e1]:
        - generic [active]:
          - generic [ref=f19e1]:
            - generic [ref=f19e2]:
              - generic:
                - img [ref=f19e6] [cursor=pointer]
                - button [ref=f19e8] [cursor=pointer]:
                  - img [ref=f19e9]
            - insertion [ref=f19e16]:
              - generic [ref=f19e17]:
                - link "Click Here" [ref=f19e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CsUjTcTQ9as2BJ_nLmsMPjNu88QWPv_PzhwHs9uLDkxWhpvjz0B0QASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEggJP0MF5aNUqu423stE2fOOw8FI6iUKgIEyUCzIXoh9aYVPyhCzdJbhF8Jp-yl2DjcZHy8ZTnMltOHorpDeiwNp-GhynkLA0uwQG3QyzQtGkyIzdpSsXBmpt1lmN3i4WHnQ-kJzC5ylrIgw29gw7CYYAcJv44J4vqJH2JY9kpfTKX4RDYB5FwQMlDZAjrzZqZcG9jBIbyn8zPX1rJVNNLU5uWHUeRDYc9gaK-gsQdqMjofJ0iI2PFA1Qnt5J1V_E1rVWL39klpROC63zpPRdp_g40A9_0r2KEOm2ThRSx7T37IaCdSHUkWR4JOQmOVEemc63utSK_rJtlfUNDHuhj4C43OHABPPN-JSpBeAEA4gFmN-zjlSQBgGgBk2AB92d9d8CqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfn17EC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljt1OvLxqKVA2ABgAoBmAsByAsBgAwBqg0CSU7qDRMI3ofsy8ailQMV-aVmAh2MLS9e8A0BiA4JsBOT2Pgi0BMA2BMNiBQB2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAGshgJEgLoWBhNIgEA0BkB&ae=1&num=1&cid=CAQSjQIAEQoqgamLKNLV8gy-M7ufUkwV8BSKTq0hqNuAMWsMqBfl0wMTIXY0o7C1Pj5Vrxu18_pNQXnB3BIVfA4-Ov6NTMRRwABJONbeOxA0O1O6jaflUdLhoGUeeWp7YbOQs9T5mRhDsgPWWbj9KHKGZ9txwpZlr-E0jgQBg-5sjjEH1R02bPjzo_6ao9OIoJ7IOzO2I0Jg_1N-LkVXPbw_eJCk2EyLb86yCLUTkP207aF7yu9o89GHSgeqDQek-u6eLU2Gxq2TH9CQEEwlJQXkDAsQtA9n8rHIS-366Io9q-nI5PXQbtatPdxgpX7J7qTVVwto8MM9uKYe3onBhK9pyfhqumdO2fwFrCJKfVOb4xgB&sig=AOD64_3TJ9qcWsOgma__htlngBXq-YpKfw&client=ca-pub-1677597403311019&dbm_c=AKAmf-Ce2qydtmY0ubUBis5tyJE5Aj43kxHEX0VI7xdlmDYDqHEeQY0K09AcMOB5Ri-5PiGkMb7e13z1QqW07TSqe3rhHUDd6Q7e5klWgGoJFLtTkmTcdvcS-3CF6oAtzWyIpQ1XKAKo1jJ9jrpFWxPB10GQ78zvWQAVu-cv7Jshj00YogKUrrOgefjVUEyri3E8TEpHFLcDazi-ZimB2fge-pFMpde5cIdEvN3lpvw_cLw6gZtBhoYxYvcB1udo6DGYAbiDKnBHjjAQC_htia6d5_NO35NKTMCWgwbKcE47Bl8cWs0dUyg&cry=1&dbm_d=AKAmf-AVQvcBdDRsb-wkKrPai4gGQeKyOT5Y3POWc0tb4io_G8j2dDo91OlqgIIWf5T1e3uj0ctnSngrxRhv0gTaGaBp7yaMoQrOUveVpjVQOokuz_Q95SBVEykAiq5d9Bs9Sh7_TzsFVm8W5rY-pIfEwtCEpzrKfhu3TRiTKVO5uL2RjSLg1asS_PmFc_dQiy_-66NiKU1lpRoL0yg0sVS_hQxk48y05et2V0ii0qAqSsJ0eeTeolWuG6ugOqb8l0UsetlQGyjlI5LaJe1lF2nPr1wF9ARu6tRn6Ue_Gan1Xd2fHGIo7Id30h1CnseiapSrfxTclCTfd3y-QQqn_kUKPUiw9dPpKCsey3MAaUcGNKwAot4mVX7nw8Qt_Xm0qfJbJMcW04BZo4piG6ANWud4bAGusBTNhw9RJQyQYRtgMfEK8IKM-D0QN4f-5gXLgHfg0bj6SL-ONP1r8pGAn33ylHAqL9-ASfzPy9XPF3DCYeEkJSdvZxVwVet-6_9bBHN8nuMjyX1gh4rM-ImOb2aWDzxL2rHvywj0zAUfkcOO6zKk3f3wUJNDNxWQ-BNfQcg-MITxCUeLtSgSP-B3SzrPhtfHFCpDlMhZeG6ZXxEeor9QwRcKOqRUvn9EFjAI85FPgeiaz-9YIvgx0LLHOLpVU6v9jlTxiY3bFrpqXy2ukKHMeV-YO-ljaOfkHht5giwmp_UNcSiWjtYzv29TDsGNJzyQUd5jww&adurl=https://servedby.flashtalking.com/click/7/299371;10256504;5440555;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0h6tbIUWsLFNMVE84dA7GFq&ft_impID=6D409E81-F0FC-66A0-ABAC-C654510B99EB&ft_section=22578786200&g=6750EB765C05DA&random=85719.38088300305&ft_width=728&ft_height=90&url=https://www.adobe.com/in/products/illustrator.html?sdid=WPHDJ44J&mv=display&mv2=display
                  - img "Click Here" [ref=f19e19]
                - link "AdChoices arrow" [ref=f19e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f19e22]
                - link "Privacy Notification" [ref=f19e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f19e25]
                - link "Privacy Notification" [ref=f19e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f19e28]
          - iframe
          - iframe [ref=f19e29]:
            
          - iframe [ref=f19e30]:
            
          - iframe [ref=f19e31]:
            
          - iframe [ref=f19e32]:
            
          - iframe [ref=f19e33]:
            
  - generic [ref=e98]:
    - generic [ref=e99] [cursor=pointer]:
      - img [ref=e101]
      - link "Go to shopping options for Contact us solutions" [ref=e103]: Contact us solutions
    - button "Close shopping anchor" [ref=e104]
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