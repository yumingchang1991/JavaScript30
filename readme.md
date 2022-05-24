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
|  9  | 2022-05-12 | Dev Tools Domination         | 1) Use `console.dir(HTMLDOMElement)` to print DOM Element as object <br> 2) Use `console.groupCollapsed(key)` & `console.groupend(key)` to group log messages together <br> 3) Use `console.time(key)` & `console.timeEnd(key)` for timing a block of code <br> 4) Use `console.log('%c stringToLog', inlineCSS)` to use CSS to style log message |
|  10 | 2022-05-13 | Hold Shift & Check Chckboxes | 1) Use `event.shiftKey` to check if user is holding shift key |
|  11 | 2022-05-14 | Custom Video Player          | 1) Select elements based on their dataset by using `querySelector('[data-set]')` <br> 2) Use video event listeners like play, pause and timeupdate |
|  12 | 2022-05-15 | Key Sequence Detection       | it is just pure fun to know cornify CDN |
|  13 | 2022-05-16 | Slide in on Scroll           | 1) Use scroll event <br> 2) `window.scrollY` is equal to `window.pageYOffset` in modern browser <br> 3) `window.innherHeight` includes the height of horizental scrollbar if presented <br> 4) `scroll` event fires very often, so need to use a debounce function to reduce the frequency firing scroll event for better performance |
|  14 | 2022-05-17 | JS References V.S. Copying   | 1) Use `Object.assign()` to copy an object one-level deep <br> 2) Use `JSON.parse(JSON.stringify(obj))` as a hack to workaround the one-level deep problem, but do you really need it? |
|  15 | 2022-05-18 | LocalStorage & Event Delegation | 1) Listen to `submit` event on a form is more precise than a `click` event on a submit button <br> 2) Use THIS smartly <br> 3) The `checked` attribute of a checkbox: no matter what value we put, even a false, as long as it is there, it CHECKS the checkbox |
|  16 | 2022-05-19 | Mouse Move Shadow            | When event listener is put on parent, `this` is always the parent inside event handler. `e.target` is not always equal to `this` because of event delegation |
|  17 | 2022-05-20 | Sort Without Articles        | Just fun practicing `regular expresssion` and `sort` |
|  18 | 2022-05-21 | Adding up Times              | 1) Use `array.map(parseFloar)` to turn all array items into number <br> 2) Chaining `array.map()` & `array.reduce` |
|  19 | 2022-05-22 | Webcam Fun                   | 1) Loop through each single pixels to make webcam looks like with filter-effect 2) HTML tag `link` has an attribute to enable download: `link.setAttribute('download', filename)` |