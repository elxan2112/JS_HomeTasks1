function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandom(1, 1000);
console.log(`Дано число: ${num}`);
let n =0;
do{
    n*n;
    n++;
}while(n*n <= num);
console.log(`Корень квадратный данного числа равен: ${n}`);