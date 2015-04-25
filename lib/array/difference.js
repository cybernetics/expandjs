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

    var lodash      = require('lodash'),
        ary         = require('../function/ary'),
        map         = require('../collection/map'),
        filter      = require('../collection/filter'),
        isArrayable = require('../tester/isArrayable'),
        toArray     = require('../caster/toArray');

    /**
     * Creates an array excluding all the values found in `values` from
     * `array, using `SameValueZero` for equality comparisons.
     *
     *      var num = [1, 2, 3],
     *          takeAway1 = [2, 10],
     *          takeAway2 = [3, 4];
     *
     *      XP.difference(num, takeAway1);
     *      // => [1, 3]
     *
     *      XP.difference(num, takeAway1, takeAway2);
     *      // => [1]
     *
     * @function difference
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The arrays of values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     */
    module.exports = function difference(array, values) {
        return lodash.difference.apply(lodash, map(filter(arguments, ary(isArrayable, 1)), ary(toArray, 1)));
    };

}());