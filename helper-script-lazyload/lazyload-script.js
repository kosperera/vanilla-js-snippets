/**
 * Replace `<script> tags with attribute `data-lazy-src` with new `HTMLScripElement` and attributes.
 * @param {Document} document - The DOM.
 * @param {Function} $$ - The DOM query helper {@link qsa.js}
 * @param {Function} $parent - The parent node selector {@link qsa.js}
 * 
 * @license MIT
 * 
 * @example
 * ```html
 * <script 
 *       async
 *       data-lazy-src="../scripts/tokenizer.js"
 *       data-client-id="{{client_id}}"
 *       >
 * </script>
 * <script 
 *       async
 *       data-lazy-src="../scripts/gtm.js"
 *       data-client-id="{{ga-key}}"
 *       >
 * </script>
 * <script async src="script-lazyload.js"></script>
 * ```
 */
; (function (document, $$, $parent, undefined) {

    'use strict';

    var AttributeBlackList = ['data-lazy-src', 'src'];

    function isAttributeOneOf(attr, attrArray) {
        attrArray = attrArray || [];
        return attrArray.length < 1 || attrArray.indexOf(attr) > -1;
    }

    function script2El(el) {
        /**
         * Create a script tag w/ as current script
         */
        var js = document.createElement('script');
        for (var attr of el.attributes) {
            if (!isAttributeOneOf(attr.name, AttributeBlackList)) js.setAttribute(attr.name, attr.value || '');
        }
        js.src = el.getAttribute('data-lazy-src');

        return js;
    }

    (function () {
        $$('script[data-lazy-src]').each(function (target) {
            var js = script2El(target);
            $parent(target).replaceChild(js, target);
        });
    })();

})(document, window.$$, window.$parent);