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
                self.innerText = 'released';
                self.classList.add('disabled');
            } else {
                self.innerText = 'Released';
                self.classList.add('disabled');
            }
        })
    });
})();
