/**
 * Allow `prototype` option for helper function as `_.mixin()`.
 * @see {@link snake-case.js} to learn more about creating helper functions in vanilla JS.
 * @param {Object|Window} ns - Namespace or the module as the root.
 *
 * @license MIT
 * 
 * @example
 * ```js
 * String.prototype.toSnakeCase = _.mixin(_.snakeCase);
 * // or
 * _.mixin(_.snakeCase, String, 'toSnakeCase');
 *
 * // then use as
 * some_string_variable.toSnakeCase();
 * ```
 */
; (function (ns, undefined) {

    'use strict';

    /**
     * Provides a delegate for the function given.
     * @param {Function} fn - Function to invoke.
     * @returns {Function} The wrapper delegate of the function.
     */
    function prototype2Fn(fn) {
        return function () {
            var args = [this].concat(Array.prototype.slice.call(arguments));
            return fn.apply(this, args);
        }
    }

    /**
     * Allows prototype option of the function given.
     * @param {Function} fn - Function to prototype.
     * @param {Function} Symbol Base type to allow.
     * @param {String} alias A method name for the function to alias.
     */
    function _mixin(fn, Symbol, alias) {
        /**
         * Sanity check on required args.
         */
        console.assert(typeof fn === 'function');

        var method = prototype2Fn(fn);
        if (Symbol) {
            alias = alias || fn.name;
            Symbol.prototype[alias] = method;
        } else {
            return method;
        }
    }

    /**
     * Polyfill pattern to provide an instance of {@link _mixin},
     * Expose for the global as `_.mixin()`.
     * @alias _mixin
     */
    if (!ns.mixin) (function () {

        /**
         * Public API instance of the {@link _mixin}.
         */
        ns.mixin = function mixin() {
            return _mixin.apply(this, arguments);
        };
    })();

})(_ = _ || window._ || this);