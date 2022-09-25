let Tech = function(power){
    let status = false;
    power = power || 0;

    this.on = function(){
        status = true;
    };

    this.off = function(){
        status = false;
    };

    this.getStatus = function(){
        return status;
    };

    this.getPower = function(){
        return power;
    };
}

let Teapot = function(){
    Tech.apply(this, arguments);

    this.create = function(element){
        const title = document.createElement(element);
        return title;
    }

    this.attr = function(element, attrName, className){
        element.setAttribute(attrName, className);
    }

    this.html = function(element, text){
        element.innerHTML = text;        
    }

    this.search = function(element, selector){
        element.querySelectorAll(selector);
    }

    this.addClass = function(element, className){
        element.classList.add(className);
    }

    this.removeClass = function(element, className){
        element.classList.remove(className);
    }

    this.toggleClass = function(element, className){
        element.classList.toggle(className);
    }

    this.hasClass = function(element, className){
        
        console.log(element.classList.contains(className));
    }

    this.append = function(element, newElement){
        element.appendChild(document.createElement(newElement));
    }

    this.on = function(element, eventName, funcName){
        element.addEventListener(eventName, funcName);
    }
}

const test = new Teapot();
const element = test.create('div');

test.attr(element, 'class', 'elem');
test.html(element, 'Привет');

test.addClass(element, 'container')
test.removeClass(element, 'container')

test.hasClass(element, 'container')

// test.toggleClass(element, 'container')


test.search(element,'elem')

test.append(element, 'p')

test.on(element, 'mouseover', 'showName');

console.log(element);



// const arr = [1, 2, 3, 4, 5];
// const doblArr = []
// arr.forEach((elem) => {
//     if (elem < 4) {
//         doblArr.push(elem);
//     }
// });
// console.log(doblArr);