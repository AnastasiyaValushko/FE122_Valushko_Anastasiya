//task1
console.log('Task1--------');

function sum(a, b, c){
    return (a - b) / c;
}
var d = sum(2,8,10);
console.log(d);

//task2
console.log('Task2--------');

function returnNumber(e){
    var g = Math.sqrt(e); 
    var j = Math.cbrt(e);
    return[g, j];
}
var f = returnNumber(8);
console.log(f);

//task3
console.log('Task3--------');

function minMax(a,b){
    var a = 10; 
    var b = 20;
    g = Math.min(a, b);
    j = Math.max(a, b);
}
minMax();
console.log('Min = ' + g + ' Max = ' + j);

//task4
console.log('Task4--------');

function createArray(length){
    length = prompt('Введите диапазон значений');
    array = [];
    for(var i = 1; i <= length; i++){
        array.push(i); 
    }
}
createArray();

function showArray(length){
    var createArray2 = createArray;
    console.log(array);
}
showArray();


//task5
console.log('Task5--------');

function isEven(a){
    if (a % 2 === 0){
        return true;
    }else{
        return false;
    }
}
var result = isEven(6);
console.log(result);


//task6
console.log('Task6--------');

function createArray2(arr){
    let array = [];
    for(var i = 0; i < arr.length; i++){
        if (isEven(arr[i])){
            array.push(arr[i]);
            
        }
        console.log(array);
    }
}
createArray2(10);




//task7
console.log('Task7--------');

// function createPyramid(height){
//     for (var i = 1; i <= height; i++) {
//         var str = '';

//         for (var j = 0; j < i; j++);{
//         str += symbol == undefined ? i : symbol;
//         }
//         console.log(str + '\height');
//     }
    
// };
// createPyramid(prompt('число'));

function createPyramid(height){
    i = 0,
    j = 0;
    let empty = "",
        star = "";

    while (i < height) {
    i++;
    empty = "";
    star = "";
        for (j = 0; j < height - 1; j++) empty += " ";
        for (j = 0; j < 2 * i + 1; j++) star += height;
        console.log(empty + star);
    }
}
createPyramid(5);


//task8
console.log('Task8--------');


//task9
console.log('Task9--------');

function createArray3(a){
    let array = [];
    for(var i = 0; i < a; i++){
        if(i == 0 || i == 1){
            array[i] = 1;
        }else{
            array[i] = array[i -1] + array[i - 2];
        }
    }
    return array;
}
let result3 = createArray3(16);
console.log(result3);

//task10
console.log('Task10--------');

let num = 16;
function printSum(a){
    var arr = a.split('');
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    if(sum > 9){
        printSum(sum + '');
    }else{
        console.log(sum);
    }
}
printSum(num);
