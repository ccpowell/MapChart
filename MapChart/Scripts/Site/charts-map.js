/*jslint devel: true, browser: true */
/*global jQuery: false, app: false */

app.charts.Map = (function ($) {
    'use strict';
    var template = $('#template-map');

    function ctor(options) {
        console.log('new Map');

        this.element = options.element;
        this.element.html(template.clone());
    }

    ctor.prototype.destroy = function () {

    }

    // set it
    return ctor;
}(jQuery));