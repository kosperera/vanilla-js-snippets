; (function (window, document, undefined) {
    
    'use strict';

    if (!Element.prototype.on) (function () {
        Element.prototype.on = function (type, listener, useCapture) {
            this.addEventListener(type, listener, !!useCapture);

            return this;
        };
    })();

    if (!NodeList.prototype.each) (function () {
        NodeList.prototype.each = function (callbackFn) {
            Array.prototype.forEach.call(this, callbackFn);

            return this;
        };
    })();

    if (!NodeList.prototype.on) (function () {
        NodeList.prototype.on = function (type, listener) {
            this.each(function (target) {
                window.$on(target, type, listener);
            });

            return this;
        };
    })();

    if (!Window.prototype.$each) (function () {
        Window.prototype.$each = function (nodeList, callbackFn) {
            console.assert(nodeList instanceof NodeList);
            console.assert(typeof callbackFn === 'function');

            return nodeList.each(callbackFn);
        };
    })();

    if (!Window.prototype.$on) (function () {
        Window.prototype.$on = function (target, type, listener) {
            console.assert(target instanceof Element);
            console.assert(typeof listener === 'function');

            var useCapture = ['blur', 'focus'].indexOf(type) > -1;

            return target.on(type, listener, !!useCapture);
        };
    })();

    if (!Window.prototype.$parent) (function () {
        Window.prototype.$parent = function (element, tagName) {
            console.assert(element instanceof Element);

            if (!element.parentNode) return;
            if (!tagName || element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) return element.parentNode;

            return window.$parent(element.parentNode, tagName);
        };
    })();

    if (!Window.prototype.$$) (function () {
        Window.prototype.$$ = function (selector, scope) {
            console.assert(selector && selector.length > 0);
            if (scope) console.assert(scope instanceof HTMLElement);

            return (scope || document).querySelectorAll(selector);
        };
    })();

    if (!Window.prototype.$) (function () {
        Window.prototype.$ = function (selector, scope) {
            console.assert(selector && selector.length > 0);
            if (scope) console.assert(scope instanceof HTMLElement);

            return (scope || document).querySelector(selector);
        };
    })();

})(window, document);
