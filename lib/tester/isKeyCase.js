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

    var keyCase   = require('../string/keyCase'),
        isString  = require('../tester/isString'),
        isVoid    = require('../tester/isVoid'),
        xnor      = require('../operator/xnor');

    /**
     * Checks if `value` is key cased.
     *
     * ```js
     * XP.isKeyCase('user_name');
     * // => true
     *
     * XP.isKeyCase('user.name');
     * // => false
     *
     * XP.isKeyCase('0_user_name');
     * // => false
     * ```
     *
     * @function isKeyCase
     * @param {*} value The value to check.
     * @param {boolean} [notEmpty] Specifies if `value` must be not empty.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isKeyCase(value, notEmpty) {
        return isString(value) && value === keyCase(value) && (isVoid(notEmpty) || xnor(value.length, notEmpty));
    };

}());