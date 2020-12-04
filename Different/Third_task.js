function GetRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let a = GetRandom (-100 , 100);
let b = GetRandom (-100 , 100);
let c = GetRandom (-100 , 100);
console.log(`a=${a}; b=${b}; c=${c}`);
function Checkh(num){
    if (num < 0)
    return 0
    else
    return num
}
let checked_a = Checkh(a)
let checked_b = Checkh(b)
let checked_c = Checkh(c)
console.log(`Сумма всех положительных чисел равна: ${checked_a + checked_b + checked_c}`)