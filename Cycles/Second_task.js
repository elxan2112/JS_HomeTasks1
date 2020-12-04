function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandom(1, 100);
for (i=2; i <= num; i++){
    if (num%i === 0 && i !== num) {
        console.log(`${num} является составным числом`);
        break;
    }
    else if (num%i === 0 && i === num)
        console.log(`${num} является простым числом`);
}
if (num ===1 || num ===0)
console.log(`${num} является простым числом`);