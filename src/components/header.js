class Header{
    constructor(){
        this.header = document.createElement('header');
        this.header.classList.add('header');
        this.header.innerHTML = `
            <div class="logo">
                <a href="/">
                    <img src="https://via.placeholder.com/200x50" alt="">
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#Catalog">Catalog</a></li>
                    <li><a href="#About">About</a></li>
                </ul>
            </nav>
            <div class="cart">
                <div class="widget">
                    <span>0</span>
                    <span>0 Тугриков</span>
                </div>
            </div>
        `;
    }

    init(){
        return this.header;
    }
}

export default new Header().init();