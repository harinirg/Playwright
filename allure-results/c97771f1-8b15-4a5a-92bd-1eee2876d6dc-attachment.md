# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: IFrames.test.ts >> iframe test
- Location: tests\IFrames.test.ts:3:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('iframe[name="firstFr"]').contentFrame().locator('p.has-text-info')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9] [cursor=pointer]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]:
              - text: Products
              - img [ref=e12]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]:
              - text: Grooming
              - img [ref=e17]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
          - link "Courses" [ref=e20] [cursor=pointer]:
            - /url: /courses
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32] [cursor=pointer]:
              - /url: /test
              - img [ref=e33]
              - generic [ref=e38]: Workspace
            - img [ref=e39]
            - generic [ref=e41]: Frame
          - heading "Frame" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]: Let's go for a frame practice 😉
            - iframe [active] [ref=e51]:
              - generic [ref=f1e1]:
                - generic [ref=f1e4]:
                  - heading "Enter Details" [level=1] [ref=f1e5]
                  - generic [ref=f1e6]:
                    - generic [ref=f1e7]:
                      - generic [ref=f1e8]: First Name
                      - textbox "Enter name" [ref=f1e9]: Sample
                    - generic [ref=f1e10]:
                      - generic [ref=f1e11]: Last Name
                      - textbox "Enter email" [active] [ref=f1e12]: "1"
                  - paragraph [ref=f1e14]: You have entered Sample 1
                  - iframe [ref=f1e16]:
                    - generic [active] [ref=f2e1]:
                      - generic [ref=f2e5]:
                        - generic [ref=f2e6]: Email
                        - textbox "Enter email" [ref=f2e7]
                      - insertion [ref=f2e9]:
                        - generic [ref=f2e12]:
                          - heading "These are topics related to the article that might interest you" [level=2] [ref=f2e14]: Discover more
                          - link "Interview preparation guide" [ref=f2e15] [cursor=pointer]:
                            - generic "Interview preparation guide" [ref=f2e16]
                            - img [ref=f2e18]
                          - link "Personalized learning paths" [ref=f2e20] [cursor=pointer]:
                            - generic "Personalized learning paths" [ref=f2e21]
                            - img [ref=f2e23]
                - insertion [ref=f1e18]:
                  - generic [ref=f1e21]:
                    - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e23]: Discover more
                    - link "Colleges & Universities" [ref=f1e24] [cursor=pointer]:
                      - generic "Colleges & Universities" [ref=f1e25]
                      - img [ref=f1e27]
                    - link "Selenium automation tutorials" [ref=f1e29] [cursor=pointer]:
                      - generic "Selenium automation tutorials" [ref=f1e30]
                      - img [ref=f1e32]
                    - link "Educational Resources" [ref=f1e34] [cursor=pointer]:
                      - generic "Educational Resources" [ref=f1e35]
                      - img [ref=f1e37]
          - generic [ref=e53]:
            - generic [ref=e54]:
              - img [ref=e55]
              - heading "Learning Points" [level=3] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - img [ref=e61]
                - generic [ref=e64]: Target Locator
              - listitem [ref=e65]:
                - img [ref=e66]
                - generic [ref=e69]:
                  - text: switchTo()
                  - link "Distance Learning" [ref=e70] [cursor=pointer]:
                    - img [ref=e72]
                    - text: Distance Learning
              - listitem [ref=e74]:
                - img [ref=e75]
                - generic [ref=e78]: defaultContent()
              - listitem [ref=e79]:
                - img [ref=e80]
                - generic [ref=e83]: parentFrame()
              - listitem [ref=e84]:
                - img [ref=e85]
                - generic [ref=e88]:
                  - text: Overloading concept -
                  - link "JAVA" [ref=e89] [cursor=pointer]:
                    - /url: "#"
                    - img [ref=e90]
                    - text: JAVA
            - generic [ref=e92]:
              - link "Watch Tutorial" [ref=e93] [cursor=pointer]:
                - /url: /video/frame
                - img [ref=e94]
                - generic [ref=e96]: Watch Tutorial
              - generic [ref=e97]:
                - text: "Practice ID:"
                - code [ref=e98]: frame
          - generic [ref=e99]:
            - generic:
              - generic:
                - insertion
        - generic:
          - generic:
            - generic:
              - insertion
    - contentinfo [ref=e100]:
      - generic [ref=e101]:
        - paragraph [ref=e102]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e103] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e104] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e105]:
          - link "GitHub" [ref=e106] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e107]
          - link "YouTube" [ref=e110] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e111]
          - link "LinkedIn" [ref=e114] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e115]
          - link "Contact" [ref=e120] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e121] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e123]:
    - generic [ref=e126]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e128]: Discover more
      - link "Playwright quiz challenges" [ref=e129] [cursor=pointer]:
        - generic "Playwright quiz challenges" [ref=e130]
        - img [ref=e132]
      - link "Automation testing courses" [ref=e134] [cursor=pointer]:
        - generic "Automation testing courses" [ref=e135]
        - img [ref=e137]
      - link "Playwright runner tool" [ref=e139] [cursor=pointer]:
        - generic "Playwright runner tool" [ref=e140]
        - img [ref=e142]
  - generic [ref=e144]:
    - generic [ref=e145] [cursor=pointer]:
      - img [ref=e147]
      - link "Go to shopping options for Educational Resources" [ref=e149]: Educational Resources
    - button "Close shopping anchor" [ref=e150]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('iframe test', async ({page}) => {
  4  |     await page.goto("https://letcode.in/frame");
  5  |     const allframes = page.frames();
  6  |     console.log("No of frames "+allframes.length);
  7  |     const myframe = page.frame("firstFr");
  8  |     await myframe?.fill("input[name='fname']", "Sample");
  9  |     await myframe?.fill("input[name='lname']", "1");
  10 |     
  11 |     const frame = page.frameLocator('iframe[name="firstFr"]');
> 12 |     const text = await frame?.locator("p.has-text-info").textContent();
     |                                                          ^ Error: locator.textContent: Test timeout of 60000ms exceeded.
  13 |     expect(text).toContain("Sample 1");})
```