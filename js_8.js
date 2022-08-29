let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let title = document.createElement('title');
title.innerHTML = 'Call_to_Action';
let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute('charset', 'UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUTF8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
let p1 = document.createElement('p');
p1.classList.add('p1');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

document.body.appendChild(h1);
document.body.appendChild(p1);

let divDisplay = document.createElement('div');
divDisplay.innerHTML = '';
divDisplay.classList.add('divDisplay');
document.body.appendChild(divDisplay);

let div11 = document.createElement('div');
div11.innerHTML = '';
div11.classList.add('div11');
divDisplay.appendChild(div11);

let div1 = document.createElement('div');
div1.innerHTML = '';
div1.classList.add('div1');
div11.appendChild(div1);

let h5 = document.createElement('h5');
h5.innerHTML = 'FREELANCER';
div1.appendChild(h5);

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially</br> designed to ';
div1.appendChild(h2);

p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p2.classList.add('p2');
div1.appendChild(p2);

let button = document.createElement('button');
button.innerHTML = 'START HERE';
div1.appendChild(button);

let clone = div11.cloneNode(true);
clone.classList.add('clone');
clone.querySelector('h5').innerHTML = 'STUDIO';
divDisplay.appendChild(clone);


let style = document.createElement('style');
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');


    body{
        text-align: center;
    }

    .clone{
        background-color: #8F75BE;
    }
    .clone h2,.clone p, .clone button {
        color: white;
    }
    .clone button{
        background-color: #8F75BE;
    }

    .clone h5{
        color: #FFC80A;
        
    }

    .divDisplay{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 55px;
    }

    .div11{
        border: 1px solid #E8E9ED;
        width: 260px;
        height: 479px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding:  0 70px;
    }

    
    h1 {
        text-align: center;
        font-family: 'Arvo', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        color: #212121;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .p1{
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
    }

    .p2{
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        line-height: 22px;
        color: #9FA3A7;
    }

    h5 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 2.4px;
        color: #9FA3A7;
        margin-bottom: 20px;
    }

    h2{
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        color: #212121;
        }

    button{    
        width: 147px;
        height: 46px;
        border: 3px solid #FFC80A;
        border-radius: 25px;
        background-color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 2.4px;
        color: #212121;
        margin-top: 60px;
    }


`;

document.head.appendChild(style);
