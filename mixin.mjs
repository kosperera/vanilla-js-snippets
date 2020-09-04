/**
 * Allow `prototype` option for helper function as `_.mixin()`.
 * @see {@link snake-case.mjs} to learn more about creating helper functions in vanilla JS.
 * 
 * @param {Object|Window} ns - Namespace or the module as the root.
 *
 * @license MIT
 * 
 * @example
 * String.prototype.format = _.mixin(_.format);
 * 
 * var GreetingTemplate = '{0} there! It's actually {1}';
 * GreetingTemplate.format('Hello', '/KP');
 * 
 * @example
 * _.mixin(_.format, String);
 *
 * var GreetingTemplate = '{0} there! It's actually {1}';
 * GreetingTemplate.format('Hello', '/KP');
 *
 * @example
 * _.mixin(_.snakeCase, String, 'toSnakeCase');
 * 
 * var title = 'How to allow both function and prototype options'
 * title.toSnakeCase();
 * 
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

})(window._ = window._ || _ || this);