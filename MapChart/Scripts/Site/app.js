/*jslint devel: true, browser: true, unparam: true */
/*global jQuery: false */

var app = (function ($) {
    'use strict';
    var chartsContainer = $('#charts'),
        mapContainer = $('#map-column'),
        charts = [],
        map = null,
        timeseries = null,
        currentTopic,
        currentView;


    // remove all charts from the charts section
    // configure components
    function topicChanged(name) {
        var element;
        currentTopic = app.topics[name];

        // clear map
        if (map) {
            map.destroy();
        }

        // clear timeseries
        if (timeseries) {
            timeseries.destroy();
        }
        mapContainer.empty();

        // clear charts
        $.each(charts, function (index, chart) {
            chart.destroy();
        });
        charts = [];
        chartsContainer.empty();

        // create map
        element = $('<div/>').appendTo(mapContainer);
        map = new app.charts.Map(element, currentTopic.mapOptions);

        // create timeseries
        element = $('<div/>').appendTo(mapContainer);
        timeseries = new app.charts.TimeSeries(element, currentTopic.timeseriesOptions);

        // add required chart containers and configure charts
        $.each(currentTopic.charts, function (index, configuration) {
            var chart;
            element = $('<div/>').appendTo(chartsContainer);
            chart = new app.charts[configuration.type](element, configuration);
            charts.push(chart);
        });
    }

    // The view contains:
    //   subdivision id (world if null)
    //   topic
    //   filter 
    function setView(view) {
        var oldView = currentView;

        // clear map, charts, timeseries

        // if new shapes are required, get them

        // get data for the view
        
    }

    function initialize() {
        app.main.initialize();
        $('#topics button:first').click().focus();
    }

    // set it
    return {
        initialize: initialize,
        topicChanged: topicChanged
    };
}(jQuery));

jQuery(document).ready(app.initialize);
