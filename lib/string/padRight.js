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

    var lodash         = require('lodash'),
        assertArgument = require('../assert/assertArgument'),
        isVoid         = require('../tester/isVoid'),
        isIndex        = require('../tester/isIndex'),
        isString       = require('../tester/isString');

    /**
     * Pads `string` on the right side if it is shorter then the given padding length.
     * The `chars` string may be truncated if the number of padding characters exceeds the padding length.
     *
     * ```js
     * XP.padRight('abc', 6);
     * // => 'abc   '
     *
     * XP.padRight('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * XP.padRight('abc', 3);
     * // => 'abc'
     * ```
     *
     * @function padRight
     * @param {string} [string = ""] The string to pad.
     * @param {number} [length = 0] The padding length.
     * @param {string} [chars = " "] The string used as padding.
     * @returns {string} Returns the padded string.
     */
    module.exports = function padRight(string, length, chars) {
        assertArgument(isVoid(string) || isString(string), 1, 'string');
        assertArgument(isVoid(length) || isIndex(length), 2, 'number');
        assertArgument(isVoid(chars) || isString(chars), 3, 'string');
        return lodash.padRight(string, length, chars);
    };

}());