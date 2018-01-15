var eventtype = mobilecheck() ? 'touchstart' : 'click';


function mobilecheck() {
    var check = false;
    (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}
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



(function() {

    var burger              = document.getElementById('open-mobile-menu'),
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

    burger.addEventListener(eventtype, openNav);
    closeBtn.addEventListener(eventtype, closeNav);
    overlay.addEventListener(eventtype, function () {
        if (wrapper.classList.contains('overflow-hidden')) {
            wrapper.classList.remove('overflow-hidden');
        }
        this.classList.remove('active');
        closeNav();
    });

    window.addEventListener('resize', function () {
        closeNav();
    });

})();

(function () {
    [].forEach.call(document.querySelectorAll('.release-bitcoins-btn'), function(el) {
        el.addEventListener(eventtype, function(e) {
            var self = this;
            var activeTab = self.closest('body').querySelector('.tab-panel__tab-item.is-active');
            var isPaid = activeTab.querySelector('.paid-status-text').innerText.toLowerCase();
            if (isPaid !== 'paid') {
                e.preventDefault();
                activeTab.querySelector('.paid-status-text').innerText = 'paid';
                activeTab.querySelector('.paid-status-text').classList.add('is-paid');
                self.innerText = 'Released';
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
