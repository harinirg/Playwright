# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: IFrames.test.ts >> iframe test
- Location: tests\IFrames.test.ts:3:1

# Error details

```
Error: locator.textContent: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//p[@class=text-sm font-semibold text-center]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6136:25)
    at InjectedScript._queryEngineAll (<anonymous>:6804:49)
    at InjectedScript.querySelectorAll (<anonymous>:6791:30)
    at InjectedScript.querySelector (<anonymous>:6703:25)
    at eval (eval at evaluate (:303:30), <anonymous>:3:39)
    at UtilityScript.evaluate (<anonymous>:305:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('iframe[name="firstFr"]').contentFrame().locator('//p[@class=text-sm font-semibold text-center]')

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
                          - link "Technical interview coaching" [ref=f2e15] [cursor=pointer]:
                            - generic "Technical interview coaching" [ref=f2e16]
                            - img [ref=f2e18]
                          - link "Algorithm practice platform" [ref=f2e20] [cursor=pointer]:
                            - generic "Algorithm practice platform" [ref=f2e21]
                            - img [ref=f2e23]
                - insertion [ref=f1e18]:
                  - generic [ref=f1e21]:
                    - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e23]: Discover more
                    - link "Biological Sciences" [ref=f1e24] [cursor=pointer]:
                      - generic "Biological Sciences" [ref=f1e25]
                      - img [ref=f1e27]
                    - link "Dictionaries & Encyclopedias" [ref=f1e29] [cursor=pointer]:
                      - generic "Dictionaries & Encyclopedias" [ref=f1e30]
                      - img [ref=f1e32]
                    - link "Career Resources & Planning" [ref=f1e34] [cursor=pointer]:
                      - generic "Career Resources & Planning" [ref=f1e35]
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
                - insertion
        - generic:
          - generic:
            - generic:
              - insertion
    - contentinfo [ref=e93]:
      - generic [ref=e94]:
        - paragraph [ref=e95]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e96] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e97] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e98]:
          - link "GitHub" [ref=e99] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e100]
          - link "YouTube" [ref=e103] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e104]
          - link "LinkedIn" [ref=e107] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e108]
          - link "Contact" [ref=e113] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e114] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e116]:
    - generic [ref=e119]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e121]: Discover more
      - link "Playwright quiz challenges" [ref=e122] [cursor=pointer]:
        - generic "Playwright quiz challenges" [ref=e123]
        - img [ref=e125]
      - link "Automation testing tools" [ref=e127] [cursor=pointer]:
        - generic "Automation testing tools" [ref=e128]
        - img [ref=e130]
      - link "Selenium automation tutorials" [ref=e132] [cursor=pointer]:
        - generic "Selenium automation tutorials" [ref=e133]
        - img [ref=e135]
  - generic [ref=e137]:
    - generic [ref=e138] [cursor=pointer]:
      - img [ref=e140]
      - link "Go to shopping options for Automation testing courses" [ref=e142]: Automation testing courses
    - button "Close shopping anchor" [ref=e143]
```