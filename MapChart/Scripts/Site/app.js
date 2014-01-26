/*jslint devel: true, browser: true */
/*global jQuery: false */

var app = (function ($) {
    'use strict';

    function initialize() {
        app.main.initialize();
    }

    function subjectChanged(subject) {
        alert('new topic is ' + subject);
    }

    // set it
    return {
        initialize: initialize,
        subjectChanged: subjectChanged
    };
}(jQuery));

jQuery(document).ready(app.initialize);
