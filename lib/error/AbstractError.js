/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var CustomError = require('../error/CustomError');

    /**
     * Creates a custom error with the `AbstractError` type and a predefined message.
     *
     *      console.log(new AbstractError('myFunction'));
     *      // => AbstractError{message: 'myFunction is abstract and should be implemented first', stack: '...'}
     *
     * @function AbstractError
     * @param {string} key The key to be used in the error message.
     * @constructor
     */
    module.exports = function AbstractError(key) { CustomError.call(this, 'AbstractError', key, 'is abstract and should be implemented first'); };
    module.exports.prototype = Object.create(CustomError.prototype, {constructor: {configurable: true, value: module.exports, writable: true}, name: {value: 'AbstractError', writable: true}});

}());