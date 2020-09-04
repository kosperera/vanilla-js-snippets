/**
 * Style strings to 'snake_case' helper as Lodash `_.snakeCase()`.
 * @see {@link mixin.mjs} to learn about mixin helper functions with system types.
 * 
 * @param {Object} ns - Namespace or the module as the root.
 * 
 * @license MIT
 *
 * @example
 * var title = 'BTW! WTF is snake case, dude?'
 * _.snakeCase(title);
 * 
 * // expected output: 'btw_wtf_is_snake_case_dude'
 *
 * @example
 * _.mixin(_.snakeCase, String, 'toSnakeCase');
 * 
 * var title = 'BTW! WTF is snake case, dude?'
 * title.toSnakeCase();
 * 
 * // expected output: 'btw_wtf_is_snake_case_dude'
 *
*/
; (function (ns, undefined) {

    'use strict';

    /**
     * Allows prototype option of the function given.
     * @param {String} text The text to style as 'snake_case'.
     * @param {String=_} character The character to dasherize, default to underscore (`_`).
     */
    function _snakeCase(text, character) {
        /**
         * Sanity check on required args.
         */
        console.assert(typeof text === 'string');
        console.assert(text && text.length > 0);

        character = character || '_'

        var defaultToWS = '[' + character.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1') + ']';

        return text
            // Slugify the text
            .replace(/[^\w\s-]/g, character).toLowerCase().trim()
            // Make a snake_case
            .replace(/([A-Z])/g, character + '$1').replace(/[-_\s]+/g, character).toLowerCase()
            // Trim trailing whitespace and stuff
            .replace(new RegExp('^' + defaultToWS + '+|' + defaultToWS + '+$', 'g'), '');
    }


    /**
     * Polyfill pattern to provide an instance of {@link _snakeCase},
     * Expose for the global as `_.snakeCase()`.
     * @alias Elements
     */
    if (!ns.snakeCase) (function () {
        /**
         * Public API instance of the {@link _snakeCase}.
         */
        ns.snakeCase = function snakeCase() {
            return _snakeCase.apply(this, arguments);
        };
    })();

})(window._ = window._ || _ || this);