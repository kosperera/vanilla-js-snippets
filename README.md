# Vanilla JavaScript { snippets }

[<img align="right" alt="JavaScript" width="128rem" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"  />][all-things-js]

I'm a huge nerd :nerd_face: of [vanilla javascript][all-things-js] (JS). I've built a few websites on it, as well as a few libraries and still has a long way to go to. This repository serves as a library of commonly used boilerplate code for all things vanilla javascript.

> [Read this article to learn more about this repository works](https://kosalanuwan.github.io/bliki/coding/vanilla-js-snippets/).

**On this repo**

- `$qsa.js` is to alias the `document.querySelectorAll` to traverse thru DOM elements
- `$.js` is a micro-library for manipulating DOM as angular's `$q`
- `format-string.js` is to replace strings as C# `String.Format()`
- `snake-case.js` is to style strings to 'snake_case' as Lodash `_.snakeCase()`
- `mixin.js` is to allow `prototype` option for helper functions as Lodash `_.mixin()`
- `script-data-src.js` is magic code to replace `<script>` tags with attribute `data-src` with new `HTMLScripElement`

## Learning Resources

#### Documenting javascript

- [How to document javascript with JSDoc](https://milmazz.uno/article/2014/08/27/how-to-document-your-javascript-code/) is a simple article that has the obvious examples

#### Coding style

- [Air bnb style guide for javascript (es5)](https://github.com/airbnb/javascript/tree/es5-deprecated/es5) is deprecated for vanilla JS but still a good source of information
- [Naming functions and the differences](https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname#336868) is a good explanation.

#### Differences between `.call()` and `.apply()`

- [`.apply()` requires input args as a single array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Description)
- [Managing `arguments` in JavScript](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments) to learn about leaky arguments
- [`arguments` is not purely `Array` type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#Description) is described on MDN spacification

#### Using `prototype`
- [Code snippet that allows both `prototype` and `function` options](https://code-examples.net/en/q/26ad93) from the `string.format` example
- [episode 22](https://www.youtube.com/watch?v=MVMsqBfUBNU) and [episode 23](https://www.youtube.com/watch?v=PXPO-lC-Y9s) on prototypes is a good start.
- [Use of C# like `String.Format` in vanilla JS](https://code-examples.net/en/q/26ad93) for various ways to write a helper function

#### Building libraries as modules (`.mjs`)

- [Serving vanilla JS libraries as modules (.mjs) on the web](https://v8.dev/features/modules#mjs) for full comparison of classic vs. modules

#### Namespace and IIFE for JS libraries

- [Creating and using namespace pattern and IIFE](https://www.dotnetforall.com/namespace-scoping-javascript/) explains how to properly expose the library to `global` namespace
- [Namespace fundamentals when writing vanilla JS libraries](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch13s15.html) by O’Railly library
- [Learning JavaScript - namespaces and scoping](https://www.dotnetforall.com/namespace-scoping-javascript/)

#### Building JS micro-libraries

- [Create your own utility libraries like Lodash and Underscore.js](https://gomakethings.com/creating-your-own-vanilla-js-helper-library-like-lodash-and-underscore.js/) for a walkthru with examples
- [Create your own DOM manipulation library like jQuery](https://gomakethings.com/how-to-create-your-own-vanilla-js-dom-manipulation-library-like-jquery/) for replacing jQuery

#### Testing performance

- [Performance testing using `console.time()` and `console.endTime()`](https://gomakethings.com/how-to-test-vanilla-js-performance/) for helper functions

## Contributing

If you were wondering, I'd be happy to have more code snippets here. Have a suggestion or a bug fix? Just open a pull request or an issue. Include the code snippet with a clear file name and the simplest HTML possible.

## License

Licensed under [MIT](LICENSE)

[all-things-js]: https://github.com/topics/javascript?l=javascript