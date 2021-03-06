/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var CustomError = require('../error/CustomError');

    /**
     * Creates a custom error with the `UndefinedError` type and a predefined message.
     *
     * ```js
     *  console.log(new UndefinedError('myVar'));
     *  // => UndefinedError{message: 'myVar is not defined', stack: '...'}
     * ```
     *
     * @function UndefinedError
     * @param {string} key The key to be use in the error message.
     * @constructor
     */
    module.exports = function UndefinedError(key) { CustomError.call(this, 'UndefinedError', key, 'is not defined'); };
    module.exports.prototype = Object.create(CustomError.prototype, {constructor: {configurable: true, value: module.exports, writable: true}, name: {value: 'UndefinedError', writable: true}});

}());