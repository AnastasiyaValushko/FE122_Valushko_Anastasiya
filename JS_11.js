class User {
    #data
    constructor(data) {
        this.id = data.id;
        this.name = data.name,
        this.email = data.email,
        this.address = data.address,
        this.phone = data.phone        
    }

    edit(data){
        Object.assign(this.#data, data);
    }

    get data(){
        return this.#data;
    }

    set data(data){
        Object.assign(this.#data, data);
    }
}

class Contacts{
    #contacts;
    constructor(data){
        this.data = [];
    }

    add(obj){
        if(!obj.title) return;

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
}

class ContactsApp extends Contacts{
    constructor(selector){
        super();
        this.app = null;
        this.init(selector);
    }

    init(selector){
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

        contactsContainer.append(formContainer);

        formContainer.append(nameInput, emailInput, addressInput, phoneInput, addButton);

        this.app.appendChild(contactsContainer);

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
}

new ContactsApp('.contacts')


 