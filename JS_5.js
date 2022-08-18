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

function createPyramid(num, symbol){
    let arr = [];
    for (let i = 1; i <= num; i++){
        let n = '';
        for (let j = 0; j < i; j++){
            if (symbol){
                n += symbol;
            }else{
                n += i;
            }
        }
        arr.push(n);
    }
    return arr;
}
console.log(createPyramid());

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

// function fib(num){
//     return num <= 1 ? num : fib(num - 1) + fib(num - 2);
// }


//task10
console.log('Task10--------');

// let num = 16;
// function printSum(a){
//     var arr = a.split('');
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     if(sum > 9){
//         printSum(sum + '');
//     }else{
//         console.log(sum);
//     }
// }
// printSum(num);


//task12
console.log('Task12--------');

function t12(name, surname, lastName, num){
    let title = 'Домашняя работа: "Функции"';
    let subTitle = `Выполнил: студент гр. ${num}`;
    let nameText = name + ' ' + surname + ' '+ lastName; // `${name} ${surname} ${lastName}`;

    let maxStr = 0;
    if(title.length > maxStr) maxStr = title.length;
    if(subTitle.length > maxStr) maxStr = subTitle.length;
    if(nameText.length > maxStr) maxStr = nameText.length;

    title = makeString(title, maxStr);
    subTitle = makeString(subTitle, maxStr);
    nameText = makeString(nameText, maxStr);

    let ramka = '*';

    for(let i = 0; i < maxStr + 3; i++){
        ramka += '*';
    }
    console.log(ramka + '\n' + title + '\n' + subTitle + '\n' + nameText + '\n' + ramka);

}
t12('Nastya', 'Valushka', 'Viktorovna', 'FE122');

function makeString(str, l){
    for(let i = str.length; i < l; i++){
        str += ' ';
    }

    str = '* ' + str + ' *';
    return str;
}

//task13
console.log('Task13--------');

function t13(str){
    let point = str.lastIndexOf('.');
    if(point === str.length - 1 || point === str.length - 2 || point === 0) return 'Не почтовый адрес';

    let dog = str.lastIndexOf('@');
    if(dog !== str.lastIndexOf('@')) return 'Не почтовый адрес';
    if(dog === str.length - 1 || dog === str.length - 2 || dog === 0 || dog < 3) return 'Не почтовый адрес';

    let defis = str.lastIndexOf('-');
    if(defis === str.length - 1 || defis === 0) return 'Не почтовый адрес';

    let n = str.lastIndexOf('_');
    if(n === str.length - 1 || n === 0) return 'Не почтовый адрес';

    let symbols = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ!\"\'#$%&()*+,/:;<=>?[|}{'

    let nums = '1234567890';

    let nameSymbols = '!\"\'#$%&()*+,/:;<=>?[|}{-@_';

    for(let i = 0; i < str.length - 1; i++){
        if (str[i] === '.' && str[i + 1] === '.' ||
        str[i] === '@' && srt[i + 1] === '.' ||
        str[i] === '@' && srt[i + 1] === '@' ||
        str[i] === '@' && srt[i + 1] === '_' ||
        str[i] === '@' && srt[i + 1] === '-' ||

        str[i] === '_' && srt[i + 1] === '.' ||
        str[i] === '_' && srt[i + 1] === '_' ||
        str[i] === '_' && srt[i + 1] === '-' ||
        str[i] === '_' && srt[i + 1] === '@' ||
        
        str[i] === '-' && srt[i + 1] === '.' ||
        str[i] === '-' && srt[i + 1] === '_' ||
        str[i] === '-' && srt[i + 1] === '-' ||
        str[i] === '-' && srt[i + 1] === '@' ||

        str[i] === '.' && srt[i + 1] === '.' ||
        str[i] === '.' && srt[i + 1] === '_' ||
        str[i] === '.' && srt[i + 1] === '-' ||
        str[i] === '.' && srt[i + 1] === '@') return 'Не почтовый адрес';

        if(symbols.includes(str[i])) return 'Не почтовый адрес';
    }

    let postName = str.slice(0, dog);

    if(nums.includes(postName[0])) return 'Не почтовый адрес';

    for (let i = 0; i < postName.length; i++){
        if(nameSymbols.includes(postName[i])) return 'Не почтовый адрес';
    }

    let dom = str.slice(point + 1);
    let domName = str.slice(dog, point);

    if(dom.length < 2 || dom.length > 11) return 'Не почтовый адрес';

    for(let i = 0; i < dom.length; i++){
        if(nums.includes(dom[i])) return 'Не почтовый адрес';
    }

    if(domName.length < 2 || domName.length > 11) return 'Не почтовый адрес';


    return 'Почтовый адрес верен';
}