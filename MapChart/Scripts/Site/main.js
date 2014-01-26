/*jslint devel: true, browser: true */
/*global jQuery: false, app: false */

app.main = (function ($) {
    'use strict';

    function initialize() {
        $('#subjects button').click(function (e) {
            var subject = $(this).data('subject');
            app.subjectChanged(subject);
            return false;
        })
    }

    // set it
    return {
        initialize: initialize
    };
}(jQuery));
