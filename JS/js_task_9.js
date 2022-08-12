let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57 ',
    min = Infinity,
    max = -Infinity,
    buffer = '';
for (i = 0; i < str.length; i++){
    buffer = buffer + str[i];
    if(str[i] === ' '){
        buffer = +buffer;
        if(buffer > max) max = buffer;
        if(buffer < min) min = buffer;
        buffer = '';
    }
}    
console.log('max = ' + max);
console.log('min = ' + min);

