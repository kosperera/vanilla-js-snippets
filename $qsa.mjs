/**
 * `$` aliases the `document.querySelectorAll()` helper for DOM manipulation.
 * @see {@link $.mjs} to learn more about micro-library as angular's jqLite.
 * 
 * @param {Window|Object} ns - Namespace or the module as the root.
 * @param {Window} window - Global or browser instance.
 * @param {Document} document - DOM to manipulate.
 * 
 * @license MIT
 *
 * @example
 * $('a').each(function(el) { el.addEventListener('input', console.log); });
 *
*/
; (function (ns, window, document, undefined) {

    'use strict';

    /**
     * Provides an instance of the DOM manipulation library.
     * @param {String} selector - The pseudo-selector to query DOM elements
     * @param {Document|NodeList=Document} scope - The context, defaults to the current document
     */
    function Elements(selector, scope) {
        console.assert(typeof selector === 'string');
        console.assert(selector && selector.length > 0);

        /**
         * Cache the node list for further manipulation.
         */
        if (selector === 'document') {
            this.nodeList = [document];
        } else if (selector === 'window') {
            this.nodeList = [window];
        } else {
            this.nodeList = (scope || document).querySelectorAll(selector);
        }
    }

    /**
     * Performs an action against each node matching the pseudo-selector.
     * @param {Function} fn - The delegate to execute for each node.
     */
    Elements.prototype.each = function each(fn) {
        /**
         * Sanity check on required args.
         */
        console.assert(typeof fn === 'function');

        for (el of this.nodeList) fn.apply(this, [el, this.nodeList, this]);

        return this;
    };

    /**
     * Polyfill pattern to provide an instance of {@link Elements}, 
     * expose for the global as `$()`.
     * @alias Elements
     */
    if (!ns.$) (function () {

        /**
         * Public API instance of the {@link Elements}.
         */
        ns.$ = function $(selector, scope) {
            return new Elements(selector, scope);
        };

    })();

})(window = window || this, window || this, document);