(function(){
    function onTabClick(event){
        var actives = document.querySelectorAll('.is-active'),
            anchorReference = event.target,
            activePaneId = anchorReference.getAttribute('href'),
            activePane = document.querySelector(activePaneId),
            contentPanes = document.querySelectorAll('.tab-pane'),
            onceActivatedControlTabs = (function() {
                var executed = false;
                return function() {
                    if (!executed) {
                        executed = true;
                        jsTabs('.activate-control-tabs', 1);
                    }
                };
            })();

        // deactivate existing active tab and panel
        for (var i=0; i < actives.length; i++){
            actives[i].className = actives[i].className.replace('is-active', '');
        }
        if (window.innerWidth <= 1068) {
            for (var j=0; j < contentPanes.length; j++){
                contentPanes[j].className = contentPanes[j].className.replace('is-active-mobile', '');
            }
        }

        // activate new tab and panel
        event.target.parentElement.className += ' is-active';
        document.getElementById(activePaneId.split('#')[1]).className += ' is-active';
        if (window.innerWidth <= 1068) {
            activePane.classList.add('is-active-mobile');
            if (activePane.classList.contains('is-active-mobile')) {
                activePane.querySelector('.control-tabs').classList.add('activate-control-tabs');
                setTimeout(function () {
                    onceActivatedControlTabs();
                }, 300);
            }
        }
    }

    var el = document.querySelector('.tab-panel__tabs');

    el.addEventListener('click', onTabClick, false);
})();