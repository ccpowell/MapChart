/*jslint devel: true, browser: true */
/*global jQuery: false, app: false */

app.main = (function ($) {
    'use strict';

    function initialize() {
        var i, topic, button, topics = $('#topics');
        // create a button for each topic
        // <button type="button" class="btn btn-default btn-lg" data-topic="windows">Windows</button>
        for (i = 0; i < app.topics.buttons.length; i += 1) {
            topic = app.topics.buttons[i];
            button = $('<button type="button" class="btn btn-default btn-lg" data-topic="windows"></button>')
                .data('topic', topic.key)
                .text(topic.label);
            button.appendTo(topics);
        }

        $('button', topics).click(function () {
            var tpc = $(this).data('topic');
            app.topicChanged(tpc);
            return false;
        });
    }

    // set it
    return {
        initialize: initialize
    };
}(jQuery));
