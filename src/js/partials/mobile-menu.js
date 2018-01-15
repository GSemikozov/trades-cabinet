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
