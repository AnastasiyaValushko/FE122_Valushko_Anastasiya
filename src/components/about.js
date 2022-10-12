class About{
    constructor(){
        this.about = document.createElement('div');
        this.about.classList.add('about');
        this.about.innerHTML = '<h1>About</h1>'
    }

    init(){
        return this.about;
    }
}

export default new About().init();