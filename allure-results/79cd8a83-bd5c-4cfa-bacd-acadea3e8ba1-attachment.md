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
Error: locator.click: Test timeout of 50000ms exceeded.
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
        - textbox "Your email address" [ref=e64]: harini1782395348279@gmail.com
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
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=Ckhc71TE9auecI-_14dkPyOrL4Ar5zOD_hwG0usSI9RShpvjz0B0QASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEiQJP0Lan3IMk-ucCOrfG53VMEV48YnHQxi8r-GH0JUHvMYh_YjogsNEfMM_1buJqsf5fcm-EoECTjjXoGkDx1YAl5wDDOnvH8k2ZhH43AgsjDsWyoDHgSl3G94LkzyzRchbwDRDybVJVkhggl5Kl1qL1yKt7KuYiRQqAc0kWURfV6OymhkfREwBZ60QxY2kU02d5hiBWn772-i5buA5B_Fw20v9cFaXrttsP4FnIQ8Zl4fxTBvEgq3DbvNcW1RHJ8pe9BQK0NZOPlEnDvIb99iUBjrjADbn7jVTuhpSxc4qEFTNZKDoX1deYVZX58IaDcwQKHIfbnbpzrYvMVaSmKhR5ebpjlkgGlFqOwASaxOuykwXgBAOIBe2K3IBTkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYmpKjjcSilQNgAYAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAklO6g0TCNPmpI3EopUDFe96OAUdSPUSrPANAYgOCbATkNj4ItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAQ&ae=1&num=1&cid=CAQSoAIAEQoqgbQ8dZu5Fp4bqYYyA-frw-1oZIFrMDe-Sz_ODrbVOeakcaRcHSzSVh8I6pTr-saCC3x7yvqk5M2_-2Y_aPTBdphdnyMGHBkdJJ_wIX7lMtGJeh34bxA3OfQ0NqusL2sW6Mf425bHMzSsg_Wf5SIXM5cV4k4BFMCa3Z57zMyG3JAvJWZCZARJZbLlTYPzC_GgQgvU0ej_azTLBjDb9_OCTBmZlgQfAK-8Wp3xS2JFWmYoQMCnr0WT0UhErhPRSPo1Z-cUFon8J13QZpnN8Ue6BjaMuo8k6KT5AMbaJvf045vlkMBme3qf_ahNgKYV2FgBaGx3oYfKm32mHxMpA5u2064v0UFgacvrZGx4pP5CII3ygC5P2o93XN4L9hsYAQ&sig=AOD64_3DccQ-p6EaZkKHNPjjVRECsFKK5A&client=ca-pub-1677597403311019&dbm_c=AKAmf-AYoY3GYCNJUvDRG-IrXNYp4OEoqfEsCrQCVTQ8M9Fh-CrgTDQgeBjn9BTkxEdtT1hYuU0iIuui7r8Mgrbj6cYNW5NLSWAkIlH-40HE8KRPmxN2gpn9YgS30dT_R4oplzAjOYVoc7_NnacOHI43whRfFatf37cIZREhkf9Yxws3iBVDI8fj_ht3pIhca1mvKdOVxqbo0WAiKGqm204KlJFgwB8wEbFkytCOJ8y2kca_cjLNMDLSC03KORJ2_tNhaPseV1Wc2D0JZPkwS5oVeHCUfOTH-cQmtGQdwVE6TRwotKHEHaI&cry=1&dbm_d=AKAmf-DzY1cko0x5heK7nC5WutJqKVuVtAFj_dBKRpGJSFJPz5xbMk_wqGUSkH-_mDPEx7e2yBbZF-by-q0B6DFpMf1kw2nergLaUhatfeSZKL_yNvX7guemLBuIzeEAzDacwUhKaQpWE8ikrJmXE3HZSVztR503NhoUpFm2bAAkyT5fOjFm0mhEw6rbuWExPM38qlvobrxQ2lUqnLd-r9T1j0RzZzoB70ShhIs1kQRuJ3BUzuRkPltvSkGrly4XEDzykMYZ8ZSswzcuLIQrNDcWiXXCLpkh9RgoeHP1L3P0TMcAoUWSm82hCVOiyi1Xiam6rMe7D_8u098ErraTilY0fWotUO3kTmtInTqtnmRkYpNbNlnhZ-dnOuVnE6hMMxjzTIUt7L63_dUbgSYbAdExf2gXULi_YxUc-5LfWpuzIkh-8kakyrsYRBjqzJpHJ4Nnq3KJktgDiok4x4Yiw8zo6mE1HiuGyj2Rkm_u9jw7M0Tqa38KB1AokerwflA7ax7Y4YRSOS8jXPX-hFQv2XdY95A2umVhqelDyOCzMe_wtU0XhOZ_uh6d5NapLwjayJETT5Um_EY9nFbbeZrVvsxMxYODKC9Uf4egH445a0Aua83xv15SqYfRKhKonyTY2TjpoFuIDUk9ZX0M9wDCWL-4lfr0qxxBKwSg-Aj_zv30zIPMowrI9bT9688lGy9I5Wxr-djMikoW&adurl=https://servedby.flashtalking.com/click/7/296969;10263352;5471230;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0j5oeO5QAdgg8Z4JbK5sz0j&ft_impID=ACFADE2D-A002-5947-45C0-12E17B205271&ft_section=22281651565&g=6750A8BE14F0E3&random=791580.5382350077&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
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
> 14 |     await page.locator('#id_gender2').click();
     |                                       ^ Error: locator.click: Test timeout of 50000ms exceeded.
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