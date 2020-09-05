/**
 * `$()` is a micro-library for manipulating DOM as angular's `$q`.
 * @param {Object|Window} ns - Namespace or the module as the root.
 * @param {Window} window - Global or browser instance.
 * @param {Document} document - DOM to manipulate.
 *
 * @license MIT
 * 
 * @example
 * ```js
 * $('.highlight-source-js')
 *   .each(function(el) { console.log(el.innerHTML); })
 *   .hide();
 * ```
 */
; (function (ns, window, document, undefined) {

    'use strict';

    /**
     * Provides an instance of the micro-library w/ a pseudo-selector
     * @param {String} selector - The pseudo-select to query the DOM
     * @param {Document|NodeList=Document} scope - The current content, defaults to the current document
     */
    function Elements(selector, scope) {
        /**
         * Sanity check on required args.
         */
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
     * Performs an action for each qualified node.
     * @param {Function} fn - The delegate to execute. 
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
     * Mark the qualified notes as hidden and assign relevant classes for styling.
     * Use the `is-hidden` class as you wish.
     * @see {@link Elements#prototype#show} to learn the opposite
     */
    Elements.prototype.hide = function hide() {
        return this.addAttribute('hidden').addAttribute('aria-hidden', true).addClass('is-hidden').removeClass('is-visible');
    };

    /**
     * Mark the qualified notes as visible and assign relevant classes for styling.
     * Use the `is-visible` class as you wish.
     * @see {@link Elements#prototype#hide} to learn the opposite
     */
    Elements.prototype.show = function show() {
        return this.removeAttribute('hidden').addAttribute('aria-hidden', false).removeClass('is-hidden').addClass('is-visible');
    };

    /**
     * Toggles the provided class name on all qualified nodes.
     * @param {String} name - The class to toggle.
     */
    Elements.prototype.toggleClass = function toggleClass(name) {
        /**
         * Sanity check on required args.
         */
        console.assert(typeof name === 'string');
        console.assert(name && name.length > 0);

        return this.each(function (el) { el.toggleClass(name); });
    };

    /**
     * Adds the specified class to all qualified nodes.
     * @param {String} name - The name of the class.
     */
    Elements.prototype.addClass = function addClass(name) {
        /**
         * Sanity check on required args.
         */
        console.assert(typeof name === 'string');
        console.assert(name && name.length > 0);

        return this.each(function (el) { el.classList.add(name); });
    };

    /**
     * Removes the specified class from all qualified nodes.
     * @param {String} name - The name of the class.
     */
    Elements.prototype.removeClass = function removeClass(name) {
        /**
         * Sanity check on required args.
         */
        console.assert(typeof name === 'string');
        console.assert(name && name.length > 0);

        return this.each(function (el) { el.classList.remove(name); });
    };

    /**
     * Attaches the attribute to all qualified nodes.
     * @param {String} name - The name of the attribute
     * @param {String} value - The value to set
     */
    Elements.prototype.addAttribute = function addAttribute(name, value) {
        /**
         * Sanity check on required args.
         */
        console.assert(typeof name === 'string');
        console.assert(name && name.length > 0);

        return this.each(function (el) { el.setAttribute(name, value === undefined ? '' : value); });
    };

    /**
     * Detaches the attribute from all qualified nodes.
     * @param name - The name of the attribute
     */
    Elements.prototype.removeAttribute = function removeAttribute(name) {
        /**
         * Sanity check on required args.
         */
        console.assert(typeof name === 'string');
        console.assert(name && name.length > 0);

        return this.each(function (el) {
            if (el.hasAttribute(name)) el.removeAttribute(name);
        });
    };

    /**
     * Polyfill pattern to provide an instance of {@link Elements}, 
     * Expose to the global as `$()`.
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