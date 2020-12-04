function GetRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let a = GetRandom (-20, 20);
let b = GetRandom (-20, 20);
let c = GetRandom (-20, 20);
let multiply = a*b*c;
let summ = a+b+c;
console.log(`a=${a}; b=${b}; c=${c}`);
if(multiply > summ)
console.log(`Answer = ${multiply + 3}`)
else if (multiply < summ)
console.log(`Answer = ${summ + 3}`)