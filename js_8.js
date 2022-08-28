

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
h2.innerHTML = 'Initially designed to ';
div1.appendChild(h2);

p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.classList.add('p1');
div1.appendChild(p1);

let button = document.createElement('p');
button.innerHTML = 'START HERE';
div1.appendChild(button);













let style = document.createElement('style');
style.innerHTML = `
    body{
        text-align: center;
    }

    .div11{
        border: 1px solid #E8E9ED;
        width: 400px;
        height: 479px;
        display: flex;
        align-items: center;
    }


    .div1{
        
    }
    
    h1 {
        text-align: center;
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        color: #212121;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .p1{
        font-family: 'OpenSans';
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
    }

    h5 {
        font-family: 'Montserrat';
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


`;

document.head.appendChild(style);
