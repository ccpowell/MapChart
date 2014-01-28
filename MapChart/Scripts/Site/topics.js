/*jslint devel: true, browser: true */
/*global jQuery: false, app: false */

// this is a static configuration file containing the topic definitions
// a topic display consists of
//  1. a map
//  2. a timeseries
//  3. some charts
app.topics = (function ($) {
    'use strict';
    var stuff = {buttons:[]};
    function addTopic(topic) {
        stuff[topic.key] = topic;
        stuff.buttons.push(topic);
    }

    addTopic ({
        key: 'windows',
        label: 'Windows',
        mapOptions: {},
        charts: [{
            type: 'BarChart',
            labelX: 'X',
            labelY: 'Y'
        }, {
            type: 'BarChart',
            labelX: 'X',
            labelY: 'Y'
        }
        ]
    });
    addTopic ({
            key: 'office',
            label: 'Office',
            mapOptions: {},
            charts: []
    });
    addTopic ({
            key: 'phone',
            label: 'Phone',
            mapOptions: {},
            charts: []
    });
    addTopic ({
            key: 'xbox',
            label: 'XBox',
            mapOptions: {},
            charts: []
    });

    return stuff;
}());