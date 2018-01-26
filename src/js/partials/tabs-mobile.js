function jsTabs(tabsContainerClass, openedItem) {
    if (typeof tabsContainerClass != 'string' && typeof openedItem != 'boolean') {
        return;
    }

    var tabNav = document.querySelector(tabsContainerClass),
        tabItem = tabNav.querySelectorAll('.control-tabs__item');

    (function init() {
        for (var i = 0; tabItem.length > i; i++) {

            var activePaneId = tabItem[i].getAttribute('data-tab'),
                activePane = tabItem[i].closest('.tab-pane.is-active-mobile').querySelector(activePaneId);
            if ((openedItem - 1) === i) {
                setDefault(tabItem[i], activePane);
                addClass(tabItem[i], 'is-active');
                showTab(activePane);
            } else {
                setDefault(tabItem[i], activePane);
                hideTab(activePane);
            }
        }
    })();

    function setDefault(element, activePane) {
        element.addEventListener('click', function() {
            if (hasClass(element, 'is-active')) {
                // has active, so do nothing
            } else {
                hideAllTabs();
                addClass(element, 'is-active');
                showTab(activePane);
            }
        });
    }

    function hideAllTabs() {
        for(var i = 0; tabItem.length > i; i++) {
            var activePaneId = tabItem[i].getAttribute('data-tab'),
                activePane = tabItem[i].closest('.tab-pane.is-active-mobile').querySelector(activePaneId),
                tabPanel = tabItem[i];
            removeClass(tabPanel, 'is-active');
            hideTab(activePane);
        }
    }

    function hideTab(element) {
        removeClass(element, 'is-active');
    }

    function showTab(element) {
        addClass(element, 'is-active');
    }

    function hasClass(element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    }

    function addClass(element, className){
        if(element.className.indexOf(className) == -1) {
            element.className += ' ' + className;
        }
    }

    function removeClass(element, name) {
        if (hasClass(element, name)) {
            element.className=element.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
        }
    }

}


//export default jsTabs;
// function initMobTabs() {
//     jsTabs('.tabs-mobile', 1);
// }
// window.addEventListener('load', initMobTabs);
// window.addEventListener('resize', initMobTabs);
