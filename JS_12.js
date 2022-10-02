class User {
    constructor(data) {
        if(data.name.length > 0) this._data = data;   
    }

    edit(data){
        
        Object.assign(this._data, data);
    }

    get data(){
        return this._data;
    }

    set data(data){
        console.log(this._data);
        console.log(data);
        Object.assign(this._data, data);
    }


}

class Contacts{
    #contacts;
    constructor(){
        this.#contacts = [];
        
    }

    add(obj){
        if(!obj.name || !obj.email || !obj.address || !obj.phone) return;

        let contact = new User(obj);
        let id = this.getRandomId();
        contact.data = {id};
        this.#contacts.push(contact);
        return this;
    }

    getRandomId(){
        let id = Math.floor(Math.random() * 1000000);
        if(this.#contacts.length === 0) return id;

        let flag = this.#contacts.some(contact => contact.data.id === id);
        if(flag){
            return this.getRandomId();
        }else{
            return id;
        }
    }

    edit(id, data){
        this.#contacts.forEach(contact =>{
            if (contact.data.id === id){
                contact.data = data;
            }
        });
        return this;
    }

    remove(id){
        this.#contacts = this.#contacts.filter(contact => contact.data.id !== id);
        return this;
    }

    get contacts(){
        return this.#contacts;
    }
}

class ContactsApp extends Contacts{
    constructor(){
        super();
        this.app = null;
        this.contactsContainer2 = null;
        this.init();
    }

    init(){
        this.app = document.querySelector('body');

        let contactsContainer = this.createElement('div', [
            ['class', 'contacts']
        ]);
        let formContainer = this.createElement('form');
        
        let nameInput = this.createElement('input', [
            ['type', 'text'],
            ['placeholder','Введите Ваше имя']
        ]);
        let emailInput = this.createElement('input', [
            ['type', 'text'],
            ['placeholder','Введите Вашу электронную почту']
        ]);
        let addressInput = this.createElement('input', [
            ['type', 'text'],
            ['placeholder','Введите Ваш адрес']
        ]);
        let phoneInput = this.createElement('input', [
            ['type', 'text'],
            ['placeholder','Введите Ваш номер телефона']
        ]);

        let addButton = this.createElement('button', [
            ['type', 'submit']
        ], 'Добавить контакт');
        
        formContainer.append(nameInput, emailInput, addressInput, phoneInput, addButton);  
        formContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            let data = {
                id: 0,
                name: nameInput.value,
                email: emailInput.value,
                address: addressInput.value,
                phone: phoneInput.value,
            };

            this.add(data);
            this.onAdd();
            this.storage = this.contacts;
            nameInput.value = '';
            emailInput.value = '';
            addressInput.value = '';
            phoneInput.value = '';
        });
        

        this.contactsContainer2 = this.createElement('div', [
            ['class', 'contacts2']
        ]);
            
        contactsContainer.append(formContainer, this.contactsContainer2);

        this.app.append(contactsContainer);

        if(this.storage){
            let data = this.storage;
            data.forEach(contact => {
                Object.keys(contact).forEach(key => this.add(contact[key]));
            })

            this.onAdd();
        }
        this.getData();
    }
    

    onAdd(){
        this.contactsContainer2.innerHTML = '';
        this.contacts.forEach(contact => {
            let contactElem = this.createElement('div', [
                ['class', 'contact']
            ]);
            
            let contactName = this.createElement('h2', [
                ['class', 'name']
            ], contact.data.name);

            let contactEmail = this.createElement('p', [
                ['class', 'email']
            ], contact.data.email);

            let contactAddress = this.createElement('p', [
                ['class', 'address']
            ], contact.data.address);

            let contactPhone = this.createElement('p', [
                ['class', 'phone']
            ], contact.data.phone);

            let onEdit = this.createElement('button', [], 'Edit');
            let onRemove = this.createElement('button', [], 'Remove');
            
            let flag = true;
            onEdit.addEventListener('click', () => {
                if (flag){
                    contactName.contentEditable = true;
                    contactEmail.contentEditable = true;
                    contactAddress.contentEditable = true;
                    contactPhone.contentEditable = true;
                    onEdit.innerHTML = 'Save';
                    flag = !flag;
                }else{
                    contactName.contentEditable = false;
                    contactEmail.contentEditable = false;
                    contactAddress.contentEditable = false;
                    contactPhone.contentEditable = false;
                    onEdit.innerHTML = 'Edit';
                    flag = !flag;

                    let data = {
                        name: contactName.innerText,
                        email: contactEmail.innerText,
                        address: contactAddress.innerText,
                        phone: contactPhone.innerText,
                    }
                    this.edit(contact.data.id, data);
                    this.storage = this.contacts;
                    console.log(this.contacts);
                }
            });

            onRemove.addEventListener('click', () => {
                this.remove(contact.data.id);
                this.onAdd();
                this.storage = this.contacts;
            });         

            contactElem.append(contactName,contactEmail,contactAddress, contactPhone, onEdit, onRemove);
            this.contactsContainer2.append(contactElem);
        });
    }

    createElement(name, attributes = [], content = ''){
        let elem = document.createElement(name);

        if(attributes.length > 0){
            attributes.forEach(attr => elem.setAttribute(attr[0], attr[1]));
        }

        if (content){
            elem.innerHTML = content;
        }
        return elem;
    };

    get storage() {
        if(!localStorage.getItem('contacts')) return false;

        if(!this.storageExpiration){
            localStorage.removeItem('contacts');
            return false;
        }

        let data = localStorage.getItem('contacts');
        data = JSON.parse(data);
        return data;
    }

    set storage(data){
        let dataJson = JSON.stringify(data);
        localStorage.setItem('contacts', dataJson);
        this.storageExpiration = 864000;
    }

    get storageExpiration(){
        let name = 'contacts'
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches || false;
    }

    set storageExpiration(time){
        let name = 'contacts';
        let value = 'contacts';
        let options = {
            path: '/',
            secure: true,
            'max-age': time
        };
        
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
              updatedCookie += "=" + optionValue;
            }
        }
        
        document.cookie = updatedCookie;
    }

    async getData() {
        
        let url = 'https://jsonplaceholder.typicode.com/users';

        await fetch(url).then(function(response) {
            return response.json();
        }).then(function(data){
            console.log(data);
        });
    };
}

new ContactsApp('.contacts')


 