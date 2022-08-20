//task1
console.log('task1-----------------');

let str = 'aaa@bbb@ccc';
console.log('aaa@bbb@ccc'.replace (/@/g, '!'));


//task2
console.log('task2-----------------');

let date = '2025-12-31';
let dateRe = date.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1');
let dateRe2 = dateRe.replace(/-/g, '/');
console.log(dateRe2);


//task3
console.log('task3-----------------');

str = 'Я учу javascript!';

//substr

console.log(str.substr(0,1) + ' ' + ' ' + str.substr(16,1));

//substring

console.log(str.substring(0,1) + ' ' + ' ' + str.substring(16,17));

//slice

console.log(str.slice(0,1) + ' ' + ' ' + str.slice(16,17));


//task4
console.log('task4-----------------');

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += Math.pow(arr[i], 2);
}
let sqrt = Math.sqrt(sum);
console.log(sqrt);


//task5
console.log('task5-----------------');

let a = 3;
let b = 5;
let c = Math.abs(a - b);
console.log(c);

a = 6;
b = 1;
c = Math.abs(a - b);
console.log(c);


//task6
console.log('task6-----------------');

let dateNow = new Date();

function addNull(a){
    if(a > 1 && a < 10){
        return '0' + a;
    }else{
        return a;
    }
}
console.log(dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds() + ' ' + addNull(dateNow.getDay()) + '.' + addNull(dateNow.getMonth()) + '.' + dateNow.getFullYear() + '.');


//task7
console.log('task7-----------------');

str = 'aa aba abba abbba abca abea'.replace(/ab.a/g, '*');
console.log(str);


//task8
console.log('task8-----------------');

function getPhone(a){
    let regexp = /^([+]{1})+([0-9]{3})+([0-9]{2})+([0-9]{7})$/gi;
    return regexp.test(a);
}
console.log(getPhone('+37544558115656'));


//task9
console.log('task9-----------------');

function getEmail(email){
    let regexp2 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{2,11})+\.([A-Za-z]{2,11})$/gi; //Знаки «^» и «$» обозначают начало и конец проверяемой строки
    return regexp2.test(email);
}
console.log(getEmail('nastya.valushko@yandex.ru'));


//task10
console.log('task10-----------------');

function domainName(url){
    let u = /^(?:[^:]+:\/\/[^.\/?#]+\.[^.\/?#]+)\.([^.\/?#]+)(?:$|[\/?#])/;
    const dom = s => s.match(u)[0];
    return dom(url);
};

console.log(domainName("https://tech.onliner.by/2018/04/26/smart-do-200/"));