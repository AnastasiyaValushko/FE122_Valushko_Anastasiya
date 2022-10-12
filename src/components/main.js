class Main {
    constructor() {
        this.main = document.createElement('main');
        this.main.classList.add('main');
        this.main.innerHTML = `<h1>Main</h1>`;
    }

    router() {
        let hash = location.hash.slice(1);

        if (!hash) hash = 'home'

        import(`./${hash}.js`)
            .then(module => {
                this.main.innerHTML = '';
                console.log(module);
                this.main.append(module.default);
            })
            .catch(error => {
                this.main.innerHTML = '<h1>404</h1>'
            });
    }

    init() {
        window.addEventListener('hashchange', (e) => {
            this.router();
        });

        window.addEventListener('load', () => {
            const a = document.querySelectorAll('a[href="/"]');
            console.log(a);
            a.forEach(elem => {
                elem.addEventListener('click', e => {
                    e.preventDefault();
                    location.hash = '';
                });
            });
            this.router();
        });
        return this.main;
    }
}

export default new Main().init();