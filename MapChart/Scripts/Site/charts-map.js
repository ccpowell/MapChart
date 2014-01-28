/*jslint devel: true, browser: true, unparam: true */
/*global jQuery: false, app: false */

app.charts.Map = (function ($) {
    'use strict';
    var template = $('#template-map');

    function clicked(e) {
        var command = $(this).data('command');
        alert('clicked ' + command);
    }

    function ctor(element, options) {
        // save options
        this.options = $.extend(true, {}, options);
        this.element = element;

        // add HTML
        this.element.append(template.clone());

        // connect events to the element.
        // they will be removed when the element is removed.
        $(this.element).on('click', 'button', clicked);
    }

    ctor.prototype.destroy = function () {
        // remove any event handlers connected to window or body
    };

    // set it
    return ctor;
}(jQuery));