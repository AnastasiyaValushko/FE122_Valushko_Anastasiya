import { getApiData } from "./API/spa.js";

class Catalog{
    constructor(){
        this.catalog = document.createElement('div');
        this.catalog.classList.add('catalog');
        this.catalog.innerHTML = '<h1>Catalog page</h1>';
    }

    async initComponent(){
        const data = await getApiData();
        console.log(data);
        this.catalog.innerHTML = '';

        const catalogContainer = document.createElement('div');
        catalogContainer.classList.add('catalog-container');
        data.forEach(element => {
            const {id, image, title, price, rating: {rate}} = element;
            const product = document.createElement('div');
            product.classList.add('product');
            product.innerHTML = `
            <div class="img">
                <a href="#Product/${id}"><img src="${image}" alt=""></a>
            </div>
            <p class="text"><a href="#Product/${id}">${title}</a></p>
            <span class="price">${price}</span>
            <span class="raiting">${rate}</span>
            `;

            catalogContainer.append(product);
        });

        this.catalog.append(catalogContainer);
    }

    init(){
        this.initComponent();
        return this.catalog;
    }
}

export default new Catalog().init();