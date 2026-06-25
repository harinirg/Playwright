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
        - textbox "Your email address" [ref=e64]: harini1782395701405@gmail.com
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f17e1]:
        - generic [active]:
          - generic [ref=f18e1]:
            - generic [ref=f18e2]:
              - generic:
                - img [ref=f18e6] [cursor=pointer]
                - button [ref=f18e8] [cursor=pointer]:
                  - img [ref=f18e9]
            - insertion [ref=f18e16]:
              - generic [ref=f18e17]:
                - link "Click Here" [ref=f18e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CEwZBNzM9au2nMLGJjeYP9I_S0AT5zOD_hwG0usSI9RShpvjz0B0QASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEiQJP0PQ7-NwWTAnfLpVinriDBhR1Uq9xPjM8L8G7VKcUvJLXC3A2jtBBa8Br5hi4xjOJEvYHA84rQ5bwgY7UY0BdWN1El4Z3Rh_JUgFPD17QUTBTse0wPIaAnNAYNnBYjCGZ1hBm69ExHfFvm-O0VFtwpi9yrj4aP7oG17_k69sdZvxoIPIJToHZfw4-WY72udRlBBBLc-SSrxH1DsL-T3K-AiQcYoqOuw1-4edwuqzXiQvTYdW10wT3dRTC3ICYbdkcFhD7vEUUnt1Nilf-EyL8xseerOznR3xswRac1k_QwlHJOBQCJ5I4FPLZiGX54Fmy-JXoW45kBPPDP3Gi0u-sKZjYEJzH8ChfwASaxOuykwXgBAOIBe2K3IBTkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYgs6VtsWilQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCJOkmLbFopUDFbFEwwYd9IcUSvANAYgOCbATkNj4ItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAQ&ae=1&num=1&cid=CAQSoAIAEQoqgQDn4t8_Laagt-I1UxtXsIApLHyYiFm53oodeB8aOhoRHRZmtjQQkIFhr9l33M3-87yaswUWg0lXoLoq4LVkP6kUC-HS5VGKzyTPWIzUee5nKHs8N5a5chcoMNvk6T5gxY_7lkJs8839duTA-MK1kUUAl1sSrVGPZD-KdbDBrXjOqswBT8wyHpCKlb_vsKHE10EAg8I9cHS_wZcH397aelKSSgj9tiXrY8h7zsRneSNLHeS0xbbkSOa0Iuf4HgvTy5CJIdMo_sUfOFI6OR2Dqp_m8dcoRhgBXeZslZe2wkLg1eVZZeCvmCRG74SrUox6kky-PtuJkpi2B54YUuPNR8nKaCjSjlKnAmZvGXEuULj_5s5zYFVtKFV9MWcYAQ&sig=AOD64_1RQI-qPMrpX5ge5tuVQitP4SovGg&client=ca-pub-1677597403311019&dbm_c=AKAmf-AHyknHapc-xiMdhfqbVbacnpNqy9r5jYWIyHuQoVut0HsCGLyhf9YVFYZbjwzAX0Nj7drTaYzu4f3uHKYGh6UFFyC1FQG611ZrmEabZ1ksm3wIn4Nrf2BWQAAVvPG5JJqxCvmuSSid6zm4gmkiq_CPKUaXNc9NTvMJHLOvgoI5f4Sh0bUi6hcWA_jA8sMfQgsf8ncUoAhgK0yNmoe-Ff15Ml1ytaGpd6ohrZMA7ueEFxYgySD7OH7kabi4DGZ4SuXlNFoBP_N31gYZgt4_XA4Ou8O4LICn9MrNPm4nTgbJsrO-sMQ&cry=1&dbm_d=AKAmf-AdEWX-MOD50oz2Q1g_lQXLGOajFrJoHfAloNfwqxT1yGyoCM6zZX-hYlI0ZjDXJkTAbvpUj9XWVYh73pi5kiAkmZDsAOrmNQTJYF7-yNqoeV820t7lUUDFKahjiKdas2lAA2Z_2sRMTLtVcq3xDQEywvzU4MRpF6Vc_k0kQWU3-MmzmkzSrA30y3WH-HHo2AbOnW6M3iT2VtwHKymOa5DvBpXsO-7nwDJq3uTHcX60j2pc3JN2KnRTRSX-owy1HVTl-gg6zO0IY3EL3H6l04yvhCzfdIyD3H0yXczuO9wLUSV1gaoc8X-HmPACTsQoyemwBFvP31n013nYd3t8w5d8wyctNc7Zp0CWPimPuvRvxOrrG0P56Z51eAIzQZc2S6UtOgpXMb70_zqn6s-IHUEr9JbxwEu1hPuz_b6fRIYGRCRadUDODA3W8bCQDhqpsDx5YzN9uyVTKTDJw7W7CZkCo3df6PGQ_75-JKpVAvsRMoZcsoXrrS8NbRSIM96pb9-JjyebNkQhY_SsiKQthrmIoRqrDr_0cclMLrhvgPgseZQB5nAE6WFudYVkiGNKhgaaUE0nc_XbfgmpU--4lK8jTlFuu2fuPrkcw7qfPErDrfuGK2-i_OhXoevxYvVNhcnFHvrcP4vCMdmOlb89lGLx306QqWpDKdvCpUZMwmH46Sj9iKnOLkWLVjCVu0B4lacN0LSB&adurl=https://servedby.flashtalking.com/click/7/296969;10263352;5404130;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0je_qQ0iaQ8FILEnBv7hLwe&ft_impID=E0ACD07E-A392-CEE4-2465-AB8117B851CB&ft_section=22281651565&g=67508C395826C9&random=778146.2973230479&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f18e19]
                - link "AdChoices arrow" [ref=f18e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f18e22]
                - link "Privacy Notification" [ref=f18e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f18e25]
                - link "Privacy Notification" [ref=f18e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f18e28]
          - iframe
  - insertion [ref=e77]:
    - generic [ref=e80]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e82]: Discover more
      - link "Website analytics tools" [ref=e83] [cursor=pointer]:
        - generic "Website analytics tools" [ref=e84]
        - img [ref=e86]
      - link "Test case management" [ref=e88] [cursor=pointer]:
        - generic "Test case management" [ref=e89]
        - img [ref=e91]
      - link "Quality assurance training" [ref=e93] [cursor=pointer]:
        - generic "Quality assurance training" [ref=e94]
        - img [ref=e96]
  - generic [ref=e98]:
    - generic [ref=e99] [cursor=pointer]:
      - img [ref=e101]
      - link "Go to shopping options for Subscription management software" [ref=e103]: Subscription management software
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
  13 |     await page.locator('#password').fill("hari");
  14 |     await page.locator('#days').selectOption('26');
  15 |     await page.locator('#months').selectOption('12');
  16 |     await page.locator('#years').selectOption('2004');
  17 |     await page.getByRole("checkbox",{name:"subscribe to Newsletter"}).check();
  18 |     await page.locator("#first_name").fill("Harini");
  19 |     await page.locator("#last_name").fill("Raja");
  20 |     await page.locator('[data-qa="company"]').fill("Expleo");
  21 |     await page.locator('#address1').fill("1/181,vennandur")
  22 |     await page.locator('#address2').fill("3/18,Salem")
  23 |     await page.locator('#country').selectOption('India');
  24 |     await page.locator('#state').fill('TamilNadu');
  25 |     await page.locator('#city').fill('Salem');
  26 |     await page.locator('#zipcode').fill("637501");
  27 |     await page.locator('#mobile_number').fill("9867542200");
  28 |     await page.getByRole('button',{name:'Create Account'}).click();
  29 |     await expect(page.locator("//h2[@data-qa='account-created']")).toHaveText("ACCOUNT CREATED!");
  30 |     await page.getByText('Continue').click();
  31 |     await expect(page.getByText('Logged in as hari')).toBeVisible();
  32 |     await page.getByRole('link',{name:'Delete Account'}).click();
  33 |     await expect(page.locator("//h2[@data-qa='account-deleted']")).toHaveText("ACCOUNT DELETED!");
  34 |     await page.getByText('Continue').click();
  35 |     await expect(page).toHaveURL("https://automationexercise.com/") 
  36 | })
```