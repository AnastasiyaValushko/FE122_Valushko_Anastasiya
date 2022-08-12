n = prompt('Введите целое число');
let count = 0;
sum = 0;
reverse = '';
for(i = 0; i < n.length ; i++){
    count++;
    sum = sum + +(n[i]);
    reverse = n[i] + reverse;
}
console.log('a) Число ' + n);
console.log('b) Количество цифр ' + count);
console.log('с) Сумма цифр числа ' + sum);
console.log('d) Обратное число ' + reverse);