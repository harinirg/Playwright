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
              - generic [ref=f4e1]:
                - generic [ref=f4e4]:
                  - heading "Enter Details" [level=1] [ref=f4e5]
                  - generic [ref=f4e6]:
                    - generic [ref=f4e7]:
                      - generic [ref=f4e8]: First Name
                      - textbox "Enter name" [ref=f4e9]: Sample
                    - generic [ref=f4e10]:
                      - generic [ref=f4e11]: Last Name
                      - textbox "Enter email" [active] [ref=f4e12]: "1"
                  - paragraph [ref=f4e14]: You have entered Sample 1
                  - iframe [ref=f4e16]:
                    - generic [ref=f9e5]:
                      - generic [ref=f9e6]: Email
                      - textbox "Enter email" [ref=f9e7]
                - insertion [ref=f4e18]:
                  - generic [ref=f4e21]:
                    - heading "These are topics related to the article that might interest you" [level=2] [ref=f4e23]: Discover more
                    - link "Selenium automation tutorials" [ref=f4e24] [cursor=pointer]:
                      - generic "Selenium automation tutorials" [ref=f4e25]
                      - img [ref=f4e27]
                    - link "Training & Certification" [ref=f4e29] [cursor=pointer]:
                      - generic "Training & Certification" [ref=f4e30]
                      - img [ref=f4e32]
                    - link "Educational Resources" [ref=f4e34] [cursor=pointer]:
                      - generic "Educational Resources" [ref=f4e35]
                      - img [ref=f4e37]
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
                - generic [ref=e69]: switchTo()
              - listitem [ref=e70]:
                - img [ref=e71]
                - generic [ref=e74]: defaultContent()
              - listitem [ref=e75]:
                - img [ref=e76]
                - generic [ref=e79]: parentFrame()
              - listitem [ref=e80]:
                - img [ref=e81]
                - generic [ref=e84]: Overloading concept - JAVA
            - generic [ref=e85]:
              - link "Watch Tutorial" [ref=e86] [cursor=pointer]:
                - /url: /video/frame
                - img [ref=e87]
                - generic [ref=e89]: Watch Tutorial
              - generic [ref=e90]:
                - text: "Practice ID:"
                - code [ref=e91]: frame
          - generic [ref=e92]:
            - generic:
              - generic:
                - insertion:
                  - iframe [ref=e94]:
                    
        - insertion [ref=e98]:
          - generic [ref=e100]:
            - generic "These are topics related to the article that might interest you" [ref=e101]: Discover more
            - link "Biological Sciences" [ref=e102] [cursor=pointer]:
              - img [ref=e104]
              - text: Biological Sciences
            - link "Career Resources & Planning" [ref=e106] [cursor=pointer]:
              - img [ref=e108]
              - text: Career Resources & Planning
            - link "Playwright quiz challenges" [ref=e110] [cursor=pointer]:
              - img [ref=e112]
              - text: Playwright quiz challenges
            - link "Philosophy" [ref=e114] [cursor=pointer]:
              - img [ref=e116]
              - text: Philosophy
            - link "Psychology" [ref=e118] [cursor=pointer]:
              - img [ref=e120]
              - text: Psychology
            - link "Playwright runner tool" [ref=e122] [cursor=pointer]:
              - img [ref=e124]
              - text: Playwright runner tool
            - link "Dictionaries & Encyclopedias" [ref=e126] [cursor=pointer]:
              - img [ref=e128]
              - text: Dictionaries & Encyclopedias
            - link "Education" [ref=e130] [cursor=pointer]:
              - img [ref=e132]
              - text: Education
            - link "Computer Education" [ref=e134] [cursor=pointer]:
              - img [ref=e136]
              - text: Computer Education
            - link "Colleges & Universities" [ref=e138] [cursor=pointer]:
              - img [ref=e140]
              - text: Colleges & Universities
    - contentinfo [ref=e142]:
      - generic [ref=e143]:
        - paragraph [ref=e144]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e145] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e146] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e147]:
          - link "GitHub" [ref=e148] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e149]
          - link "YouTube" [ref=e152] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e153]
          - link "LinkedIn" [ref=e156] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e157]
          - link "Contact" [ref=e162] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e163] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - generic [ref=e164]:
    - generic [ref=e165] [cursor=pointer]:
      - img [ref=e167]
      - link "Go to shopping options for Selenium automation tutorials" [ref=e169]: Selenium automation tutorials
    - button "Close shopping anchor" [ref=e170]
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