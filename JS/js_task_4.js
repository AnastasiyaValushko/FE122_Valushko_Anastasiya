let sum = 0;
for (i = 1; i <= 5; i++){
    sum = 0;
    for (let j = 1; j <= i; j++){
        sum = sum + j;
    }
    console.log('sum ' + i + ' = ' + sum);
}