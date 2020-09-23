/**
 * Allows prototype options for nano-lodash library, mixing with {@link String} types.
 * @param {Object} _ - Namespace or the module as the root.
 * 
 * @license MIT
 */
; (function (_, undefined) {

    'use strict';

    if (!String.prototype.format) (function () {
        _.mixin(_.format, String);
    })();

    if (!String.prototype.toSnakeCase) (function() {
        _.mixin(_.snakeCase, String, 'toSnakeCase');
    })();

    if (!String.prototype.toKebabCase) (function () {
        _.mixin(_.kebabCase, String, 'toKebabCase');
    })();

})(_ || window._);