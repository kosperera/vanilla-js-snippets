/**
 * Polyfill pattern with IIFE boilerplate.
 * @param {Window} window - The Global or Window namespace.
 * @param {Document} document - The DOM.
 *
 * @license MIT
 *
 * @example
 * ```js
 * $('span');
 * ```
 *
 * @example
 * ```html
 * <span>this is an example!</span>
 * ```
 */
; (function (window, document, undefined) {

    'use strict';

    /**
     * Polyfill pattern for helper function `$`.
     */
    if (!Window.prototype.$) (function () {

        Window.prototype.$ = function (selector, scope) {

            /**
             * Example logic for querying DOM.
             */
            return (scope || document).querySelector(selector);
        };

    })();

})(window, document);
