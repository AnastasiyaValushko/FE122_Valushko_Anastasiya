class Home{
    constructor(){
        this.home = document.createElement('div');
        this.home.classList.add('home');
        this.home.innerHTML = '<h1>Home page</h1>';
    }

    init(){
        return this.home;
    }
}

export default new Home().init();