
function initChat() {
    var chatDisplay = document.getElementById('messages');
    var localData;

    if(!localStorage.getItem('chat')){
        localStorage.setItem('chat', JSON.stringify([]));
    }
    var chatHistory = JSON.parse(localStorage.getItem('chat'));

    var send = document.getElementById('send-message-btn');
    var i = 0;
    for (i; i < chatHistory.length; i++) {
        localData = localStorage.getItem('chat');
        localData = JSON.parse(localData);
        var template =
            '<div class="grid grid--right message-row">' +
            '<div class="grid-cell">' +
            '<div class="grid grid--1of2 message-box">' +
            '<div class="grid-cell">' +
            '<p class="message">' + localData[i].text + '</p>' +
            '<div class="publish-time"><span>' + localData[i].dateTime + '</span><span>pm</span></div>' +
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
}

initChat();



{

    let leftBurger          = document.getElementById('open-mobile-menu'),
        wrapper             = document.getElementById('wrapper'),
        sideNav             = document.getElementById('mobile-menu'),
        overlay             = document.querySelector('.overlay'),
        closeBtn            = document.getElementById('close-btn');

    function openNav() {
        sideNav.classList.add('active');
        overlay.classList.add('active');
        wrapper.classList.add('overflow-hidden');
    }

    function closeNav() {
        sideNav.classList.remove('active');
        overlay.classList.remove('active');
        wrapper.classList.remove('overflow-hidden');
    }

    leftBurger.addEventListener('click', openNav);
    closeBtn.addEventListener('click', closeNav);
    overlay.addEventListener('click', function () {
        if (wrapper.classList.contains('overflow-hidden')) {
            wrapper.classList.remove('overflow-hidden');
        }
        this.classList.remove('active');
        closeNav();
    });

    window.addEventListener('resize', function () {
        closeNav();
    });

}

(function () {
    [].forEach.call(document.querySelectorAll('.release-bitcoins-btn'), function(el) {
        el.addEventListener('click', function(e) {
            var self = this;
            var activeTab = self.closest('body').querySelector('.tab-panel__tab-item.is-active');
            var isPaid = activeTab.querySelector('.paid-status-text').innerText.toLowerCase();
            if (isPaid !== 'paid') {
                e.preventDefault();
                activeTab.querySelector('.paid-status-text').innerText = 'paid';
                activeTab.querySelector('.paid-status-text').classList.add('is-paid');
                self.innerText = 'released';
                self.classList.add('disabled');
            } else {
                self.innerText = 'Released';
                self.classList.add('disabled');
            }
        })
    });
})();

function tabNav() {
    // store tabs variable
    var tabs = document.querySelectorAll('.tab-panel__tabs > .tab-panel__tab-item');

    function myTabClicks(tabClickEvent) {
        var clickedTab = tabClickEvent.currentTarget,
            anchorReference = tabClickEvent.target,
            activePaneId = anchorReference.getAttribute('href'),
            activePane = document.querySelector(activePaneId),
            contentPanes = document.querySelectorAll('.tab-pane');

        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('is-active');
        }
        clickedTab.classList.add('is-active');
        tabClickEvent.preventDefault();
        for (i = 0; i < contentPanes.length; i++) {
            contentPanes[i].classList.remove('is-active');
        }
        activePane.classList.add('is-active');
    }

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', myTabClicks)
    }
}

window.addEventListener('load', tabNav);
