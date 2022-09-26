let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let submit = document.getElementById("submit");
let id = document.getElementById("id");
let name = document.getElementById("name");
let email = document.getElementById("email");
let address = document.getElementById("address");
let phone = document.getElementById("phone");

// submit.addEventListener("click", function() {

// })

class Contacts {
    constructor(data){
        this.user = [];
    }

    add(contacts) {
        this.user.push(contacts);
    }

    get user1() {
        return this.user;
    }

    set user1(user1) {
        this.user = user1;
    }

    edit(id,obj){
        
    }
    
}

class User {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }

    set edit(obj) {
        this.data = obj; 
    }

    get info() {
        return this.name + ' (' + this.email + ', ' + this.address + ', ' + this.phone + ')';
    }
}

let alex = new User( { id: '0', name:'Alex', email: 'alex@gmail.com', address: 'Minsk, Nemanskaya street', phone: '6464541'} );
console.log(alex);
console.log(alex.info);