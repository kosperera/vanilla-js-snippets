/**
 * Magic code to strip out debugging info in production.
 * @param {Window} window - The Global or Window namespace.
 * @param {Document} document - The DOM.
 *
 * @license MIT
 */
; (function (window, document, undefined) {

    'use strict';

    var noop = function () { };

    var console = window.console || {};
    var props = Object.getOwnPropertyNames(console);

    var length = props.length;
    var method;

    while (length--) {
        method = props[length];
        console[method] = noop;
    }

    window.alert = noop;

})(window, document);