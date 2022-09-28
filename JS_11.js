class User {
    #data;
    constructor(data) {
        if(data.name.length > 0) this.#data = data;   
    }

    edit(data){
        
        Object.assign(this.#data, data);
    }

    get data(){
        return this.#data;
    }

    set data(data){
        console.log(this.#data);
        console.log(data);
        Object.assign(this.#data, data);
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
    constructor(selector){
        super();
        this.app = null;
        this.contactsContainer2 = null;
        this.init(selector);
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
                    this.onEdit(contact.data.id, data);
                    console.log(this.contacts);
                }
            });

            onRemove.addEventListener('click', () => {
                this.remove(contact.data.id);
                this.onAdd();
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
}

new ContactsApp('.contacts')


 