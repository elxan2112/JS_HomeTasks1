function GetRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let a = GetRandom(1, 100);
let b = GetRandom(1,100);
let answer
if(a % 2 === 0)
answer = a * b;
else
answer = a + b;

console.log (`а равно: ${a}; b равно: ${b}; Ответ: ${answer}`)