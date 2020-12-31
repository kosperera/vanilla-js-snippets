/**
 * A nano-library for DOM manipulation as jQuery.
 * @param {Window} window - The Global or the Window namespace.
 * @param {Document} document - The DOM.
 *
 * @license MIT
 */
; (function (window, document, undefined) {
    
    'use strict';

    if (!Element.prototype.parent) (function () {
        /**
         * Provides the parent tag of this element.
         * @param {String=} tagName The name of the tag to find.
         * @returns {Element|undefined|null}
         */
        Element.prototype.parent = function (tagName) {
            console.assert(tagName && typeof tagName === 'string', '{tagName} must be a type of {String}.');

            return window.$parent(this, tagName);
        };
    })();

    if (!Element.prototype.on) (function () {

        /**
         * Adds an event listener for this element.
         * @alias Element#prototype#addEventListener
         * @param {String} type The event type to trigger.
         * @param {Function} listener The delegate to trigger.
         * @param {Boolean=} useCapture Indicate whether the trigger is related to user capture.
         * @returns {Element}
         */
        Element.prototype.on = function (type, listener, useCapture) {
            console.assert(type && typeof type === 'string', '{type} must be a type of {String}.');
            console.assert(listener && typeof listener === 'function', '{listener} must be a type of {Function}.');

            this.addEventListener(type, listener, !!useCapture);

            return this;
        };
    })();

    if (!NodeList.prototype.each) (function () {

        /**
         * Traverse thru each node in this list.
         * @alias Array#prototype#forEach
         * @param {Function} callbackFn The callback function to execute for each element.
         * @returns {NodeList}
         */
        NodeList.prototype.each = function (callbackFn) {
            console.assert(callbackFn && typeof callbackFn === 'function', '{callbackFn} must be a type of {Function}.');

            Array.prototype.forEach.call(this, callbackFn);

            return this;
        };
    })();

    if (!NodeList.prototype.on) (function () {

        /**
         * Adds an event listener for each element in this this.
         * @param {String} type The event type to trigger.
         * @param {Function} listener The delegate to trigger.
         * @returns 
         */
        NodeList.prototype.on = function (type, listener) {
            console.assert(type && typeof type === 'string', '{type} must be a type of {String}.');
            console.assert(listener && typeof listener === 'function', '{listener} must be a type of {Function}.');

            this.each(function (target) {
                window.$on(target, type, listener);
            });

            return this;
        };
    })();

    if (!Window.prototype.$each) (function () {

        /**
         * Traverse thru each node in the provided list.
         * @param {NodeList} nodeList The list of elements.
         * @param {Function} callbackFn The callback function to execute for each element.
         * @returns {NodeList}
         */
        Window.prototype.$each = function (nodeList, callbackFn) {
            console.assert(nodeList && nodeList instanceof NodeList, '{nodeList} must be an instance of {NodeList}.');
            console.assert(callbackFn && typeof callbackFn === 'function', '{callbackFn} must be a type of {Function}.');

            return nodeList.each(callbackFn);
        };
    })();

    if (!Window.prototype.$on) (function () {

        /**
         * Adds an event listener for the provided element.
         * @param {Element} target The target element to attache.
         * @param {String} type The event type to trigger.
         * @param {Function} listener The delegate to trigger.
         * @returns {Element}
         */
        Window.prototype.$on = function (target, type, listener) {
            console.assert(target && target instanceof Element, '{target} must be an instance of {Element}.');
            console.assert(listener && typeof listener === 'function', '{listener} must be a type of {Function}.');

            var useCapture = ['blur', 'focus'].indexOf(type) > -1;

            return target.on(type, listener, !!useCapture);
        };
    })();

    if (!Window.prototype.$parent) (function () {

        /**
         * Provides the parent tag of the provided element.
         * @alias Element#parentNode
         * @param {Element} element The target element.
         * @param {String=} tagName The name of the tag to find.
         * @returns {Element|undefined|null}
         */
        Window.prototype.$parent = function (element, tagName) {
            console.assert(element && element instanceof Element, '{element} must be an instance of {Element}.');

            if (!element.parentNode) return;
            if (!tagName || element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) return element.parentNode;

            return window.$parent(element.parentNode, tagName);
        };
    })();

    if (!Window.prototype.$$) (function () {

        /**
         * Returns all elements matching the pseudo provided.
         * @alias Element#prototype#querySelectorAll
         * @param {String} selector The pseudo selector.
         * @param {Element=} scope The element to narrow down the scope.
         * @returns {NodeList}
         */
        Window.prototype.$$ = function (selector, scope) {
            console.assert(selector && selector.length > 0, '{selector} must be a string literal and cannot be empty.');
            if (scope) console.assert(scope instanceof Element, '{scope} must be an instance of {Element}.');

            return (scope || document).querySelectorAll(selector);
        };
    })();

    if (!Window.prototype.$) (function () {

        /**
         * Returns the first element matching the pseudo provided.
         * @alias Element#prototype#querySelector
         * @param {String} selector The pseudo selector.
         * @param {Element=} scope The element to narrow down the scope.
         * @returns {Element|undefined|null}
         */
        Window.prototype.$ = function (selector, scope) {
            console.assert(selector && selector.length > 0, '{selector} must be a string literal and cannot be empty.');
            if (scope) console.assert(scope instanceof Element, '{scope} must be an instance of {Element}.');

            return (scope || document).querySelector(selector);
        };
    })();

})(window, document);
