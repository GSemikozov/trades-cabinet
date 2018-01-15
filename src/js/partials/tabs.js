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
