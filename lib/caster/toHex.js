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

    var isInt = require('../tester/isInt');

    /**
     * Returns a base62 representation of `target`.
     *
     *      XP.toHex(10)
     *      // => a
     *
     *      XP.toHex('10')
     *      // => undefined
     *
     *      XP.toHex({})
     *      // => undefined
     *
     * @function toBase
     * @param {*} target The value to be transformed
     * @returns {string | undefined} Returns the transformed target.
     */
    module.exports = function toHex(target) {
        if (!isInt(target)) { return; }
        return target.toString(16).toUpperCase();
    };

}());