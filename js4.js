//task1
let arr = [1,2,3,4,5];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//task2
arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > -10 && arr[i] < -3){
    console.log(arr[i]);
    }
}

//task3
let arr2 = [];
let result = 0;
for(let i = 23; i <= 57; i++){
    arr2.push(i);
    result += i;
}
console.log(arr2);
console.log(result);

let i = 0;
    while(i <= arr2.length - 1){
    console.log(arr2[i]);
    i++
}

//task4

let arr3 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arr3.length; i++) {
    if(arr3[i][0] == 1 || arr3[i][0] == 2 || arr3[i][0] == 5){
    console.log(arr3[i]);
    }
}

//task5
arr = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let newArr = arr.split(',');
let arr11 = newArr.slice(0,7);

for(i = 0; i < 1; i++){
    document.write(arr11[0],arr11[1],arr11[2],arr11[3],arr11[4],arr11[5].bold(),arr11[6].bold());
}

//task6
let fruits = ['Яблоко', 'Груша', 'Персик'];
console.log(fruits);
fruits.push('Апельсин');
console.log(fruits[fruits.length - 1]);

//task7
let arr4 = [];
for(i = 0; ; i++){
    arr4[i] = prompt('Введите число');
    if (arr4[i] === ''){
        break;
    }
}
arr4.pop();
arr4.sort(function(a,b){
    return a - b;
});
console.log(arr4);

//task8
let arrMix = [12, false, 'Текст', 4, 2, -5, 0];
while(i <= arrMix.length-7){
    arrMix.reverse();
    i++;
    console.log(arrMix);
}

//task9
arr = [5, 9, 21,'','', 9, 78,'','','', 6];
let count = 0;
for(i = 0; i < arr.length; i++){
    if(arr[i] == ''){
    count++;    
    }
}
console.log(count);

//task10
arr = [1,8,0,13,76,8,7,0,22,0,2,3,2];
let first1 = arr.indexOf(0);
let last1 = arr.lastIndexOf(0);
let sum = first1 + last1;

for(i = 0; i < arr.length; i++){
    if(first1 == -1){
        sum = 0;
    }
    if(last1 == -1){
        sum = 0;
    }
}
console.log(sum);

//task11
i = 0,
j = 0;
let height = prompt('Введите высоту треугольника');
let empty = "",
    star = "";

while (i < height) {
  empty = "";
  star = "";
    for (j = 0; j < height - i; j++) empty += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "^";
  console.log(empty + star);
  i++;
}









