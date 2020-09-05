/**
 * `_.format()` is to replace strings as C# `String.Format()`.
 * @see {@link mixin.js} to learn about mixin helper functions with system types.
 * @param {Object} ns - Namespace or the module as the root.
 * 
 * @license MIT
 *
 * @example
 * ```js
 * _.format('{0} there! It's actually {1}', 'Hello', '/KP');
 * // expected output: 'Hello there! It's actually /KP'
 * ```
 */
; (function (ns, undefined) {

    'use strict';
    
    /**
     * Replaces strings based on the format specified.
     * @param {String} template The text format.
     * @param {*} args A list of strings to replace.
     */
    function _format(template) {
        /**
         * Sanity check on required args.
         */
        console.assert(typeof template === 'string');
        console.assert(template && template.length > 2);

        var args = Array.prototype.splice.call(arguments, 1);

        return template.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== undefined ? args[number] : match;
        });
    }


    /**
     * Polyfill pattern to provide an instance of {@link _format},
     * Expose to the public as `_.format()`.
     */
    if (!ns.format) (function () {

        /**
         * Public API instance of the {@link _format}.
         */
        ns.format = function format() {
            return _format.apply(this, arguments);
        };
    })();

})(_ = _ || window._ || this);