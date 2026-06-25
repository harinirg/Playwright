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
        - textbox "Your email address" [ref=e64]: harini1782395426476@gmail.com
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
      - iframe [ref=f34e1]:
        - generic [active]:
          - generic [ref=f37e1]:
            - generic [ref=f37e2]:
              - generic:
                - img [ref=f37e6] [cursor=pointer]
                - button [ref=f37e8] [cursor=pointer]:
                  - img [ref=f37e9]
            - insertion [ref=f37e16]:
              - generic [ref=f37e17]:
                - link "Click Here" [ref=f37e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CVDGQIzI9aqvzL9ufrtoPw6r6-AG9_fLggQHG7o3_oBWHtPyf3AIQASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEgAJP0KMhNoJnSqEKv68I80bEfBGEeFLYcDg9A2FnT8ZPtWhkcrjCeSZrd_zksXgwAYk0FQnPcIzB53hgsFSccuEIKHEFj8ouOwAdXWaxaRENziU8xNh56rhplrlwkrlai8dpxd9JKlQM415OyqpNz-i-u_1EY7u0wpcuvFqWDI3TcOjj1WHyc5YUAu_e4z7-p4qs6zD_EjE8AINvhff1WDJrqZ-26nE4cMM7Fs1LoqR21AoLN3vQUzbIO6ZCb8BGANeaP-TlAiVdKGaMZGGQ9Y5Q67qv6OhfzwvPNFNKChnJ2MhIAtAuX5L7rBdUG8b5XCf8qY38fUTNptyhjWmiYsR7wATst5qUpQXgBAOIBZH4qpdUkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYvd7JssSilQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCOGXyrLEopUDFduPSwUdQ5UeH_ANAYgOCbATkNj4ItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRIC6FgYTSIBANAZAQ&ae=1&num=1&cid=CAQSnwIAEQoqgX880Bkncy4ygHaqSPfmdOiBaR-8kJ96EIeZ4kaGFQxfzQPZ1CrtmQHq_R_JJDN-9X58J0LSJ_R_J4Xw-XP7asZTtxVy3zJE4iMu9CImDVhWQ6_f4ApCrBjylJmNlfIUeSZWXESs8mFxC1aUQvfbOzzwiEiF5S9RuOaVkl1PtUIcXBfNN9OSegz6zDFga-XgVvzLn0i4JZpmlA3FBOz1NcDKClFlAs_M6TNBIp1nFs4awNZtrprWKyFv934ol8OstxnoxLBOtAMogjjZ9fR-MOuA1h5GvXn5f-ObPicGk5S5RfV3yUpyM-McybP4Yb6A0WIVBJi7X-k2x1cOCxlPkpYWFnAjuOO2jQCvgJF1wlBHPN3K7kMLElOqQBgB&sig=AOD64_3kWRrlFm1P04su5cwuk7Z5yMRHKg&client=ca-pub-1677597403311019&dbm_c=AKAmf-Ch88PHUgfcU4IECgaXSaBOOkbkFONXvPZHX64-rs7fWf8PYOdQuO7UhwSx9IZDEpbF71r7Wc--kpBRcPq3g5wSOPFbmqoAW4IlD5TdRkYdi1SIndmxEMhEXIlZQf7kzFEuPTCB193J6BdKqb4cBdo2DtaZ610Y4IMquGF8MnyME2m1KNAFvu6Bv5yRRh6be76-k5oRnbtfhiWPLgYaq48Jg7zq8Gjz5rvhDXz5jniRheiu6LWnIlKRz9VccG3O3rqjIOcNIgvVbyJyePt-mrVQ50IrA3nl_tUIR4PKqokNz6R_qUk&cry=1&dbm_d=AKAmf-A5W8LkdXQ4yruJrdGshVp_kbmshTuPnuvwUyxLYOzxVn0VHFlt4OLah1QZZCx0yLnZpW5DJLza2ws_kvrz_yR1oiXVniXrraEi5dwRPJ5ut0j1r4JRXdxj9mBpnKV3KL7mvD6HZyJXRCi9IKQA1kR6Iq3kecCZjN_CM4lOLczkvs1vjtsWm3f1B64oQAMXYkVobL_YIWRSdx_SaiJtyTFukdCOw0B8k1s8w72yi1leN5Rh_FdL1m1rRtck0i5gl1tlF9BFfKazQULEgbwtrnj1ejtyXfcqlnCcF-7W_qobV7pyN0QcqUMfHCe2VcS-yqCPew5Db5Q_UErRIJUiYjAGqg76r7LWHoTumjrC-TNkxGYhwSK6DlFSVisx3ge03td5p6Vs01aKLmRcGNWiYTaUQ16CbIHU7ffdM_Ge9DDrG_O_VjYaxhLbVioHfSCqodI4e4EYWV403NgqV3FHYIrviqCieXkx3PXTT3ets1b5F0-ojiCL-1L_1kM9hzKuuP1lLiGLd7i0cmWwOLVEPHijERhlFKFXpw005ss0-fMw7oXeFOZc0qdzArN6qIoAwS3EkEwxA476YoFn9L1-GsF63rNVP2lgbZB0wPOBcl7M5d_pLwQl2m-2HDXNL2GYyLgN7L5A_jD3DQcd6xMtVdctQjsAnz0fNq6fIz3fzqF9Y-VujW0hesKo3DpAvnSkpON11q1ka5lguyUCh4jr0BLyTZZpJg&adurl=https://servedby.flashtalking.com/click/7/296969;10263004;4947499;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0hah_4Sg7IrGwZB3gPFpglS&ft_impID=F063E2F3-8F30-EA7E-5867-2313128344AB&ft_section=22597516305&g=6750AF29A0ADF4&random=523532.4144278785&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f37e19]
                - link "AdChoices arrow" [ref=f37e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f37e22]
                - link "Privacy Notification" [ref=f37e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f37e25]
                - link "Privacy Notification" [ref=f37e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f37e28]
          - iframe
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | test('verify registeration',async({page})=>{
  3  |     await page.goto("https://automationexercise.com/");
  4  |     await page.getByRole('link',{name:' Signup / Login'}).click();
  5  |     console.log("Signup clicked")
  6  |     await expect(page.getByText('New User Signup!')).toBeVisible();
  7  |     await page.locator('[data-qa="signup-name"]').fill("Harini");
  8  |     const email = `harini${Date.now()}@gmail.com`;
  9  |     await page.getByPlaceholder('Email Address').nth(2).fill(email);
  10 |     await page.getByRole('button',{name:'Signup'}).click();
  11 |     console.log("Credentials entered");
  12 |     console.log(page.url);
  13 |     console.log("Enter Account Information - Verified");
> 14 |     await page.locator('#id_gender2').check();
     |                                       ^ Error: locator.check: Test timeout of 50000ms exceeded.
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