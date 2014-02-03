$(document).ready(function() {
    // connect the socket
    var connection = new WebSocket('ws://' + document.location.host + '/chat/');
    connection.onopen = function() {
        console.log('Connection open!');
    }
    connection.onmessage = function(msg) {
        if (msg.data !== 'keep-alive') {
            $(".conversation").append(msg.data);
            $('.conversation-window').scrollTop($('.conversation-window')[0].scrollHeight);
        }
    }
    connection.onclose = function() {
        console.log('Connection closed!');
    }

    // wire up the button
    $('.send-button').on('click', function(e) {
        e.preventDefault();
        if ($('.message').val() != '') {
            try {
                connection.send($('.message').val());
                $('.message').val('');
            } catch (exception) {
                console.log('Websocket error: ' + exception.message);
            }
        }
    });
    $('.message').keypress(function(event) {
        if (event.keyCode == '13') {
            $('.send-button').trigger('click');
        }
    });
});