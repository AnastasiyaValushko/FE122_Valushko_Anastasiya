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
    if (a % 2 == 0){
        return true;
    }else{
        return false;
    }
}
var result = isEven(6);
console.log(result);


//task6
console.log('Task6--------');

function createArray2(length){
    array = [];
    for(var i = 1; i <= length; i++){
        array.push(i); 
    }
    
}
createArray2();




// //task7
// console.log('Task7--------');

// function createArray(length){
//     var array = [];
//     for(var i = 1; i <= length; i++){
//         array.push(i);
//         console.log(array);
//     }
// }
// createArray(3);