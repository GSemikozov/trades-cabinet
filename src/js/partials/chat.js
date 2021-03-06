function initChat() {
    var chatDisplay = document.getElementById('messages'),
        localData,
        messageInput = document.querySelector('.tab-pane.is-active .chat-room textarea'),
        chatHistory = JSON.parse(localStorage.getItem('chat')),
        send = document.getElementById('send-message-btn'),
        i = 0;

    if(!localStorage.getItem('chat')){
        localStorage.setItem('chat', JSON.stringify([]));
    }

    for (i; i < chatHistory.length; i++) {
        localData = localStorage.getItem('chat');
        localData = JSON.parse(localData);
        var template =
            '<div class="grid grid--right message-row">' +
            '<div class="grid-cell">' +
            '<div class="grid grid--1of2 message-box">' +
            '<div class="grid-cell">' +
            '<p class="message">' + localData[i].text + '</p>' +
            '<div class="publish-time"><span>' + localData[i].dateTime + '</span></div>' +
            '</div>' +
            '<div class="grid-cell avatar">' +
            '<i class="icon icon-circle user-icon"></i>' +
            '</div></div></div></div>';
        chatDisplay.innerHTML += template;
    }

    send.addEventListener('click', function () {

        var message = {
            name : "Chanaar",
            text : document.getElementById('message-text').value,
            dateTime : new Date().toLocaleTimeString() + " " + new Date().toDateString(),
            src : ""
        };
        chatHistory.push(message);
        document.getElementById('message-text').value = "";
        localStorage.setItem('chat', JSON.stringify(chatHistory));

        var template =
        '<div class="grid grid--right message-row">' +
            '<div class="grid-cell">' +
            '<div class="grid grid--1of2 message-box">' +
            '<div class="grid-cell">' +
            '<p class="message">' + message.text + '</p>' +
        '<div class="publish-time"><span>' + message.dateTime + '</span><span>pm</span></div>' +
        '</div>' +
        '<div class="grid-cell avatar">' +
            '<i class="icon icon-circle user-icon"></i>' +
            '</div></div></div></div>';
        chatDisplay.innerHTML += template;
    });

    messageInput.addEventListener('keydown', autosize);
    messageInput.addEventListener('change',  autosize);
    messageInput.addEventListener('cut',     autosize);
    messageInput.addEventListener('paste',   autosize);
    messageInput.addEventListener('drop',    autosize);

    function autosize() {
        var el = this;
        setTimeout(function(){
            el.style.cssText = 'height:auto;';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
            el.closest('.message-sender').style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 0);
    }
}

initChat();


