![](https://javascript30.com/images/JS3-social-share.png)

# YuMing's JavaScript30 Challenge
This is me following through the 30-day challenge designed by Wes Bos (visit [JavaScript30](https://JavaScript30.com) for details)

I create [this landing page](https://yumingchang1991.github.io/JavaScript30/) for better navigation.

All challenges are written from vanila JavaScript.
- index.html and style.css are pre-designed by Wes Bos

### Logs
| Day | Date       | Challenge                    | New Learnings                                     |
| --- | ---------- | ---------------------------- | ------------------------------------------------- |
|  1  | 2022-05-04 | Drum Kit                     | 1) Use `transitionend` listener, which returns events for each CSS property changed <br/> 2) Access dataset in querySelector: `Node[data-key=52]` |
|  2  | 2022-05-05 | Clock                        | 1) Use `CSS transform-origin: \[0% ~ 100%]` to control the middle point of `transform: rotate()` <br/> 2) Use CSS `transition` to specify how long it takes for a property to change |
|  3  | 2022-05-06 | CSS Variable                 | 1) Create CSS varialbe at `:root{}` with `--` prefix <br/> 2) Access CSS variables from JavaScript using `document.documentElement.style.setProperty(CSSVarName, ValueToSet)` |
|  4  | 2022-05-07 | Array Cardio                 | 1) Use `array.from()` to make NodeList with full array methods <br/> 2) Use `array.reduce()` to return an **object** storing results we need <br/> 3) Use `Array.sort()` and realize that **string could be compared directly** without using `String.charCodeAt(index)` |
|  5  | 2022-05-08 | Flex Panel Gallery           | 1) Use CSS selector `>`, `:first-child`, `:last-child` <br/> 2) Create nested flex with `flex-grow` to make components occupied whole space and render responsively <br/> 3) Realize browsers interpret transitionend event property for flex and flex-grow differently |
|  6  | 2022-05-09 | Type Ahead                   | 1) Use `new RegExp()` with `match` for search function provides more flexibility than a simple `.includes()` <br> 2) Use `String.replace(regex, string)` to build string with special class to highlight |
|  7  | 2022-05-10 | Array Cardio 2               | just recall the array methods of `.some()` `.every()` `.find()` and `.findIndex()` |
|  8  | 2022-05-11 | Fun with Canvas              | 1) Canvas element and context object <br/> 2) Change color gradually by increasing hue in `hsl(hue, saturation, lightness)` |
|  9  | 2022-05-12 | Dev Tools Domination         | 1) Use console.dir(HTMLDOMElement) to print DOM Element as object <br> 2) Use console.groupCollapsed(key) & console.groupend(key) to group log messages together <br> 3) Use console.time(key) & console.timeEnd(key) for timing a block of code <br> 4) Use console.log('%c stringToLog', inlineCSS) to use CSS to style log message |
|  10 | 2022-05-13 | Hold Shift & Check Chckboxes | 1) Use event.shiftKey to check if user is holding shift key |
|  11 | 2022-05-14 | Custom Video Player          | 1) Select elements based on their dataset by using `querySelector('[data-set]')` <br> 2) Use video event listeners like play, pause and timeupdate |
|  12 | 2022-05-15 | Key Sequence Detection       | it is just pure fun to know cornify CDN |
|  13 | 2022-05-16 | Slide in Scroll              |  |