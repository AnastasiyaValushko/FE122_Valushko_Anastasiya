let S = 2,
    p = 10,
    years = 5;
let kredit = ((S + p) / (1 - (1 + p) * (1 - years))) + ' млн.руб.';     
console.log(kredit);