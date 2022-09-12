const filter = function (selector) {
    const filterContainer = document.querySelectorAll(selector);

    const filterHandler = function (butons, contents) {
        butons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                butons.forEach(function (elem) {
                    elem.classList.remove('active');
                    btn.classList.add('active');
                });

                const indexTab = btn.dataset.filter

                contents.forEach(function (elem) {
                    if (elem.dataset.filter === indexTab) {
                        elem.classList.add('active')
                    } else {
                        elem.classList.remove('active');
                    }
                })
            });
        });
    }

    filterContainer.forEach(function (filter){
        const filterButtons = filter.querySelectorAll('.btn');
        const contents = filter.querySelectorAll('.content');

        filterHandler(filterButtons, contents)
    });
}
filter('.portfolio');