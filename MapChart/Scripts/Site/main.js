/*jslint devel: true, browser: true, unparam: true */
/*global jQuery: false, app: false */

app.main = (function ($) {
    'use strict';

    function initialize() {
        var topics = $('#topics');

        // create a button for each topic
        $.each(app.topics.buttons, function (index, topic) {
            $('<button type="button" class="btn btn-default btn-lg"></button>')
                .data('topic', topic.key)
                .text(topic.label)
                .appendTo(topics);
        });

        // change the topic when a button is clicked
        topics.on('click', 'button', function () {
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
