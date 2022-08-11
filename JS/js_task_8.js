let sum = 0;

for (let i = 0; ;i++){
    let v = prompt('Введите число');
    if (isNaN(v)){ 
        alert ('Ошибка, необходимо ввести число'); 
    }  
    if (v == 0) break;
    if (v == '') break;
    sum = sum + +v;  
}

alert (sum);
alert (sum/i);