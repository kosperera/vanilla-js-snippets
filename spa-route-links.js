/**
 * Replace `<script> tags with attribute `data-src` with new `HTMLScripElement` and attributes.
 * @param {Document} document - The DOM.
 * 
 * @license MIT
 * 
 * @example
 * ```html
 * <nav>
 *   <ol>
 *     <li><a href="#" data-route-link="/">Home</a></li>
 *     <li><a href="#" data-route-link="/login">Log in</a></li>
 *     <li><a href="#" data-route-link="/about">About</a></li>
 *     <li><a href="https://github.com/koalanuwan">GitHub</a></li>
 *   </ol>
 * </nav>
 * <button data-route-link="/signup">Sign up</button>
 * ```
 */
; (function (window, document, $, $$, undefined) {

    'use strict';

    var ElementBlackList = ['INPUT', 'SELECT', 'TEXTAREA', 'DETAILS', 'SUMMARY'];

    var RouteConfig = {
        '/': function () { showContent('section.js-home'); },
        '/login': function () { showContent('section.js-login'); },
        '/signup': function () { showContent('section.js-signup'); },
        '/about': function () { showContent('section.js-about'); },
    };

    function isElementOneOf(el, elementTypeArray) {
        elementTypeArray = elementTypeArray || [];
        return elementTypeArray.length === 0 || elementTypeArray.indexOf(el.tagName) > -1;
    }

    function isAttributeOneOf(name, attributeArray) {
        var expression = '[{0}]'.format(Array.prototype.map.call(attributeArray, function (attr) { attr.name }).join('|'));
        var rex = new RegExp(expression);
        var matches = rex.exec(name);
        if (matches || matches.length > 0) return matches[0];
    }

    function isRouteLink(el) {
        return !isElementOneOf(el, ElementBlackList) && isAttributeOneOf('route-link', el.attributes);
    }

    function showContent(selector) {
        $$('section').hide();
        $(selector).show();
    }

    (function () {
        showContentFromRoute('/');

        $('body').on('click', function (e) {
            var path = isRouteLink(e.target);
            if (path && path.length > 0) {
                showContentFromRoute(path);
                e.preventDefault();
            }
        });
    })();

})(window, document, window.$, window.$$);