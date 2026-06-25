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
        - textbox "Your email address" [ref=e64]: harini1782395706714@gmail.com
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
      - link "Contact us solutions" [ref=e79] [cursor=pointer]:
        - generic "Contact us solutions" [ref=e80]
        - img [ref=e82]
      - link "API development kits" [ref=e84] [cursor=pointer]:
        - generic "API development kits" [ref=e85]
        - img [ref=e87]
      - link "Software development lifecycle" [ref=e89] [cursor=pointer]:
        - generic "Software development lifecycle" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - iframe [ref=f23e1]:
        - generic [active]:
          - generic [ref=f24e1]:
            - generic [ref=f24e2]:
              - generic:
                - img [ref=f24e6] [cursor=pointer]
                - button [ref=f24e8] [cursor=pointer]:
                  - img [ref=f24e9]
            - insertion [ref=f24e16]:
              - generic [ref=f24e17]:
                - link "Click Here" [ref=f24e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=ClWd7PDM9aufuAruIid4Py6---Q-Pv_PzhwHs9uLDkxWhpvjz0B0QASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEiQJP0LSohJpYo4BYo3fL-muFtBtfvwy4RThYA4HVUJxkNkxbdlowiJgNVgwGzvHTeUaSokutqCWvkG3OkRMRMlcyltf7bhP5EkXV6X9-b6mes5-f6qps-Tr7KncZb-9ksjTKY72BugHk_ja_71YYJMpgJqA0fdXz-BtZ2N2Gco7bIs2funNm_ZmTQPi_wa_C-0WuFNBeEFGbi1viOfbjPM3ZnT1ZACXOsY4m4Hna_4rK932JiJ2tU4aa_xM47ba09OfmwOnjtGsjQNphot_fXDrlp-744xpHKlgEupbasWVmE8BjOSLrdIgMv-6LM4MJLYsc9BSpzNVY-cKjh_J_Kk-OjAmBywtXnwJCwATzzfiUqQXgBAOIBZjfs45UkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYk8-ZuMWilQNgAYAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAklO6g0TCPWGnLjFopUDFTtEwgUdy5cv__ANAYgOCbATk9j4ItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRIC6FgYTSIBANAZAQ&ae=1&num=1&cid=CAQSjAIAEQoqgYDF8fit2E9yelEv89N-8Vnd8AJ5xN3lHqER2bi6g1J88HRFAnGVq4Xz8Kph77igVVMpldk4fC_wXcit6eZkXKG_MU8PbJzazW_EaXqKHWdl6YK1voG4wb3gG2yG9fTBE5mr05RE133K9suL3d0K_ly5r2-ZrpT0OfPRuzMlcOfMRRTNXWneJmg6IUhwA0xwoVoNG6DqE54UmDZyAmsVR2Q73-3dsRMiULPECvjbIADVm-1XT6GrUaI32Rh4xgYseI6UFih_0SlqDT3Ih1DA470YUy4wXXrHR8uot8lFGzTpLPEMN44nFHVzvnWhMF0DSSPZX2DWOfpqKDELzMzLIWBG6iEEbm2-GAE&sig=AOD64_2igMbkdIgIRwQMKPZyXlgYEUF4mA&client=ca-pub-1677597403311019&dbm_c=AKAmf-Am4J2dt_VR3yUnnM-0Is4kcDEPZbu7q5poBl1VdQUgzKD_ZBISNiEBcnHFz4cagopwxq5HgveCAuz2JYEnE7e7zFk3oq-vkH6kGMiSUMqAWt8pzSJ-eS7ihlTdEl12zKK1GOkVJ2bmRjojWz2QEtN7FbC4wR5CZUiGZO-jcEhSHeJtl74H87D8SC_wHpBggUQo-Tgpp_dFOlOPkTW8CH-NEHauiyOIXj5s395EevBz4naQ7TYKUVOYYx78v_EzrGch0d5ga23TTPy2vMX_jaXrTNRg4Kvy1F1IiyuDlwxdYHtZ2o4&cry=1&dbm_d=AKAmf-AsTh6wRsqLztjL3XShYz5UenbLzSQNkquRh1wlLBiEK7LgYn1XXPMHgee-Z5mD9SUPlNmjP82QMLeNR4DfJFQnp2waPVND2t6CdBF0N5sZdsPduBrZpnFbi7-cCm7v3_WTCr9hwFw7kQhNVXyMCsgawbsuhXMr6K_qWZ4wE0ceTyGqLhdMzSXS_hM7kBHZcHsa-m6YYbQG1j4LoAYz3BToFcfHDByDpwkgumehdKkwMrSGFtfoF-3VZzwKRUmFg1hoeY0PC0W4zpZ9oYFK_r_B6Qo5XGDumPM-5FI8dA5opjiL8oePk6K2N5K-QnZsqQdfqm-DpqvtZNcPqzAD0QuB5xitAhJTARvwefuFXX6iNDAQd4cjDXngOauUp6cUs_uaWs0soKmuB4OOy2mjpp_2fhet33RJ80bvWjDvBhnJrgrziRYHvmpIXSQFMYM2ltsSzJKW-njmXu1xjIdr-eDVInDw52ale2Tearngm4oI0sUaZ2Gph0Dz6JFRtRp_aRb-GWpTO-jSU5t3RAZHj_4kyFy0YG4sg1mKJ51T0JFZ_Mwdf5bhQRLdNN4sEPXSrcvHHbKqIPj1yDk-ChNkT5STi8ZLiYDzrcyUFa_AnEIdyF7Mp7hzQW30A7GXvrpfOPfdbgYRdxrBJwDipv-L2bD_98-Wx3HMJ-VwIizHh-vW97cI-41s2wVYsTBmuPWTN7vZE1J1vYdR0i4iYw5sMnZqJAS1tA&adurl=https://servedby.flashtalking.com/click/7/299371;10256504;5440555;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0gjwPXbPFNpZBp4WobOKaq0&ft_impID=1A4A5DAD-9353-9C38-49DC-24EA3AF4DFBE&ft_section=22578786200&g=67503933644AD7&random=85719.38088300305&ft_width=728&ft_height=90&url=https://www.adobe.com/in/products/illustrator.html?sdid=WPHDJ44J&mv=display&mv2=display
                  - img "Click Here" [ref=f24e19]
                - link "AdChoices arrow" [ref=f24e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f24e22]
                - link "Privacy Notification" [ref=f24e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f24e25]
                - link "Privacy Notification" [ref=f24e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f24e28]
          - iframe
  - generic [ref=e98]:
    - generic [ref=e99] [cursor=pointer]:
      - img [ref=e101]
      - link "Go to shopping options for Development Tools" [ref=e103]: Development Tools
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