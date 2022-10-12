class Footer{
    constructor() {
        this.footer = document.createElement('footer');
        this.footer.classList.add('footer');
        this.footer.innerHTML = `
            <p><a href="#Abaut">О нас</a></p>
        `;
    }
    
    init(){
        return this.footer;
    }
}

export default new Footer().init();