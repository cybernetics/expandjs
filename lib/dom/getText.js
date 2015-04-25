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

    var assertArgument = require('../assert/assertArgument'),
        isNode         = require('../tester/isNode'),
        isTemplate     = require('../tester/isTemplate');

    /**
     * Returns the text content of a node and it's children.
     *
     *      <div id="target">
     *          First text node.
     *          <div id="inner">Second text node.</div>
     *      </div>
     *
     *      <script>
     *          var elem = document.querySelector('#target');
     *
     *          XP.getText(elem);
     *          // => 'First text node.Second text node.'
     *
     *      </script>
     *
     * @function getText
     * @param {Node} node The reference node
     * @returns {string} The text content of the node
     */
    module.exports = function getText(node) {
        assertArgument(isNode(node), 1, 'Node');
        return isTemplate(node) ? '' : node.textContent;
    };

}());