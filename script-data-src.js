/**
 * Replace `<script> tags with attribute `data-src` with new `HTMLScripElement` and attributes.
 * @param {Document} document - The DOM.
 * 
 * @license MIT
 * 
 * @example
 * ```html
 * <script async
 *       data-src="../scripts/tokenizer.js"
 *       data-client-id="{{client_id}}">
 * </script>
 * <script async
 *       data-src="../scripts/gtm.js"
 *       data-client-id="{{ga-key}}">
 * </script>
 * <script async src="script-data-src.js"></script>
 * ```
 */
; (function (document, undefined) {

    'use strict';

    var AttributeBlackList = ['data-src', 'src'];

    function isAttributeOneOf(attr, attrArray) {
        attrArray = attrArray || [];
        return attrArray.length < 1 || attrArray.indexOf(attr) > -1;
    }

    function each(selector, fn) {
        var nodeList = document.querySelectorAll(selector);
        for (el of nodeList) fn.apply(this, [el, nodeList, this]);
    }

    function script2El(el) {
        /**
         * Create a script tag w/ as current script
         */
        var js = document.createElement('script');
        for (var attr of el.attributes) {
            if (!isAttributeOneOf(attr.name, AttributeBlackList)) js.setAttribute(attr.name, attr.value || '');
        }
        js.src = el.getAttribute('data-src');

        return js;
    }

    (function () {
        each('script[data-src]', function (el) {
            var js = script2El(el);
            el.parentNode.replaceChild(js, el);
        });
    })();

})(document);