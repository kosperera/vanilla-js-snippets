# Vanilla JavaScript { snippets }

[<img align="right" alt="JavaScript" width="128rem" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"  />][all-things-js]

I'm a huge nerd :nerd_face: of [vanilla javascript][all-things-js] (JS). I've built a few websites on it, as well as a few libraries and still has a long way to go to. This repository serves as a library of commonly used boilerplate code for all things vanilla javascript.

> [Read this article to learn more about this repository works](https://kosalanuwan.github.io/bliki/coding/vanilla-js-snippets/).

**On this repo**

- `$qsa.js` is to alias the `document.querySelectorAll` to traverse thru DOM elements
- `$.js` is a micro-library for manipulating DOM as angular's $q
- `format-string.js` is to replace strings as C# `String.Format()`
- `snake-case.js` is to style strings to 'snake_case' as Lodash `_.snakeCase()`
- `mixin.js` is to allow `prototype` option for helper functions as Lodash `_.mixin()`
- `script-data-src.js` is magic code to replace `<script>` tags with attribute `data-src` with new `HTMLScripElement`

### `$qsa.js`
`$` aliases the `document.querySelectorAll()` to traverse thru DOM elements for manipulation.

```js
$('a').each(function(el) { 
  el.addEventListener('input', console.log);
});
```

### `$.js`
Micro-library for manipulating DOM as angular's jqLite but with most frequent use ones to manage classes, attributes, and to traverse thru DOM elements.

```js
$('.highlight-source-js')
   .each(function(el) { 
    console.log(el.innterHTML);
  })
  .hide();
```

### `format-string.js`
Replaces strings based on the format specified as C# `String.Format()`.

```js
_.format('{0} there! It's actually {1}', 'Hello', '/KP');
// expected output: 'Hello there! It's actually /KP'
```

### `snake-case.js`
Style strings to 'snake_case' helper as Lodash `_.snakeCase()`.

```js
_.snakeCase('Library of vanilla JS snippets');
// expected output: 'library_of_vanilla_js_snippets'
```

### `mixin.js`
Allow `prototype` option for helper functions as Lodash's `_.mixin()`.

```js
String.prototype.toSnakeCase = _.mixin(_.snakeCase);
// or
_.mixin(_.snakeCase, String, 'toSnakeCase');

// then use as
sometext.toSnakeCase();
```

### `script-data-src.js`
Replace `<script>` tags with attribute `data-src` with new `HTMLScripElement` and attributes.

```html
<script async
      data-src="../scripts/tokenizer.js" 
      data-client-id="{{client_id}}">
</script>
<script async
      data-src="../scripts/gtm.js" 
      data-client-id="{{ga-key}}">
</script>
<script async src="script-data-src.js"></script>
```

- [`.apply()` requires input args as a single array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Description)
- [Code snippet that allows both `prototype` and `function` options](https://code-examples.net/en/q/26ad93) from the `string.format` example
- [Lodash `_.mixin`](https://lodash.com/docs/4.17.15#mixin) for the kinda [generic wrapper](https://github.com/lodash/lodash/blob/4.17/lodash.js#L15730) for both `prototype` and `function` options
- [Creating and using namespace pattern and IIFE](https://www.dotnetforall.com/namespace-scoping-javascript/) explains how to properly expose the library to `global` namespace
- [episode 22](https://www.youtube.com/watch?v=MVMsqBfUBNU) and [episode 23](https://www.youtube.com/watch?v=PXPO-lC-Y9s) on prototypes is a good start.

### Articles

- [Create your own utility libraries like Lodash and Underscore.js](https://gomakethings.com/creating-your-own-vanilla-js-helper-library-like-lodash-and-underscore.js/) for a walkthru with examples
- [Create your own DOM manipulation library like jQuery](https://gomakethings.com/how-to-create-your-own-vanilla-js-dom-manipulation-library-like-jquery/) for replacing jQuery
- [Use of C# like `String.Format` in vanilla JS](https://code-examples.net/en/q/26ad93) for various ways to write a helper function
- [Managing `arguments` in JavScript](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments) to learn about leaky arguments
- [`arguments` is not purely `Array` type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#Description) is described on MDN spacification
- [Serving vanilla JS libraries as modules (.mjs) on the web](https://v8.dev/features/modules#mjs) for full comparison of classic vs. modules
- [Namespace fundamentals when writing vanilla JS libraries](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch13s15.html) by O’Railly library
- [Learning JavaScript - namespaces and scoping](https://www.dotnetforall.com/namespace-scoping-javascript/)
- [Performance testing using `console.time()` and `console.endTime()`](https://gomakethings.com/how-to-test-vanilla-js-performance/) for helper functions

## Contributing

If you were wondering, I'd be happy to have more code snippets here. Have a suggestion or a bug fix? Just open a pull request or an issue. Include the code snippet with a clear file name and the simplest HTML possible.

## License

Licensed under [MIT](LICENSE)

[all-things-js]: https://github.com/topics/javascript?l=javascript