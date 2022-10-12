import header from "./header.js";
import main from "./main.js";
import footer from "./footer.js";

class App{
    constructor(root){
        this.root = document.getElementById(root);
    }

    render(...elems){
        elems.forEach(elem => this.root.append(elem));
    }

    init(){
        this.render(header, main, footer);
    }
}

export default App;