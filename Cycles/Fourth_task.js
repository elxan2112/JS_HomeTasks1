let num;
let number = 1;
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
num = getRandom(1, 10);
for (i = num; i>0 ; i--){
    number = number * i;
    }
console.log(`Факториал числа ${num} равен: ${number}`);