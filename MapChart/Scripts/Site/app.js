/*jslint devel: true, browser: true */
/*global jQuery: false */

var app = (function ($) {
    'use strict';
    var chartsContainer = $('#charts'),
        charts = [],
        map = null,
        timeseries = null,
        currentTopic;

    // we keep all of the components after creating them,
    // we just show or hide them.
    function initialize() {
        app.main.initialize();

        // create map

        // create timeseries
    }

    // remove all charts from the charts section
    // configure components
    function topicChanged(name) {
        alert('new topic is ' + name);
        currentTopic = app.topics[name];

        // clear map

        // clear timeseries

        // clear charts
        $.each(charts, function (index, chart) {
            chart.destroy();
        });
        charts = [];
        chartsContainer.empty();

        // add required chart containers and configure charts
        $.each(currentTopic.charts, function (index, configuration) {
            var element, chart;
            element = $('<div/>').appendTo(chartsContainer);
            configuration.element = element;
            chart = new app.charts[configuration.type](configuration);
            charts.push(chart);
        });
    }

    // set it
    return {
        initialize: initialize,
        topicChanged: topicChanged
    };
}(jQuery));

jQuery(document).ready(app.initialize);
