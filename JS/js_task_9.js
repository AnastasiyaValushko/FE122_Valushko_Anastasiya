let f = prompt('Введите число для перевода в дни');
let g = f / 365;
let m = f / 31;
let ned = f / 7;
let h = f * 24;
let min = f * 1440;
let s = f * 86400;

(f > 365) ? console.log (g) : console.log ('Меньше года');
(f > 31) ? console.log (m) : console.log ('Меньше месяца');
(f > 7) ? console.log (ned) : console.log ('Меньше недели');
console.log (h);
console.log (min);
console.log (s);


