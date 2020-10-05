/**
 * Nano-lodash library for string manipulations.
 * @param {Object} _ - Namespace or the module as the root.
 * 
 * @license MIT
 */
; (function (_, undefined) {

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
        console.assert(fn && typeof fn === 'function', '{fn} must be type of {Function}.');
        console.assert(!!(!alias ? fn.name : alias), '{alias} must be provided for the {fn} arg.');

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
     */
    if (!_.mixin) (function () {

        /**
         * {@link _mixin}
         */
        _.mixin = function () {

            return _mixin.apply(this, arguments);
        };
    })();

    /**
     * Replaces strings based on the format specified.
     * @param {String} template The text format.
     * @param {*} args A list of strings to replace.
     */
    function _format(template) {
        /**
         * Sanity check on required args.
         */
        console.assert(template && typeof template === 'string', '{template} must be a type of {String}.');
        console.assert(template.length > 2, '{template} must be a string literal with placeholders for the rest of the args.');

        var args = Array.prototype.splice.call(arguments, 1);

        return template.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] !== undefined ? args[number] : match;
        });
    }


    /**
     * Polyfill pattern to provide an instance of {@link _format},
     * Expose to the public as `_.format()`.
     */
    if (!_.format) (function () {

        /**
         * {@link _format}
         */
        _.format = function format() {

            return _format.apply(this, arguments);
        };
    })();

    /**
     * Converts a string literal to a dasherized string literal.
     * @param {String} text The text to style as dasherize.
     * @param {String} character The character to dasherize.
     */
    function _dasherize(text, character) {
        /**
         * Sanity check on required args.
         */
        console.assert(text && typeof text === 'string', '{text} must be a type of {String}.');
        console.assert(text.length > 0, '{text} must be a string literal and cannot be empty.');
        console.assert(character && typeof character === 'string', '{character} must be a type of {String}.');
        console.assert(character.length > 0, '{character} cannot be empty.');

        var defaultToWS = '[' + character.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1') + ']';

        return text
            // Slugify the text
            .replace(/[^\w\s-]/g, character).trim()
            // Make a snake_case
            .replace(/([A-Z])/g, character + '$1').replace(/[-_\s]+/g, character).toLowerCase()
            // Trim trailing whitespace and stuff
            .replace(new RegExp('^' + defaultToWS + '+|' + defaultToWS + '+$', 'g'), '');
    }

    /**
     * Polyfill pattern to provide an instance of {@link _dasherize},
     * Expose for the global as `_.dasherize()`.
     */
    if (!_.dasherize) (function () {
        /**
         * {@link _dasherize}
         */
        _.dasherize = function dasherize() {
            return _dasherize.apply(this, arguments);
        };
    })();

    /**
     * Polyfill pattern to provide an instance of {@link _snakeCase}.
     * Expose for the global as `_.snakeCase()`.
     */
    if (!_.snakeCase) (function () {
        /**
         * Converts a string literal into an underscored ('_') string literal.
         * {@link _dasherize}.
         */
        _.snakeCase = function snakeCase() {
            var args = Array.prototype.slice.call(arguments).concat('_');

            return _.dasherize.apply(this, args);
        };
    })();

    /**
     * Polyfill pattern to provide an instance of {@link _kebabCase}.
     * Expose for the global as `_.kebabCase()`.
     */
    if (!_.kebabCase) (function () {
        /**
         * Converts a string literal into a hyphened ('-') string literal.
         * {@link _dasherize}.
         */
        _.kebabCase = function kebabCase() {
            var args = Array.prototype.slice.call(arguments).concat('-');

            return _.dasherize.apply(this, args);
        };
    })();


    /**
     * Determines a text is empty or whitespace.
     * @param {String} text The text assert.
     */
    function _isblank(text) {

        return (/^\s*$/).test('' + (text || ''));
    }

    /**
     * Polyfill pattern to provide an instance of {@link _isblank}.
     * Expose for the global as `_.isblank()`.
     */
    if (!_.isblank) (function () {
        _.isblank = function isblank() {
            return _isblank.apply(this, arguments);
        };
    })();

})(_ = window._ || {});