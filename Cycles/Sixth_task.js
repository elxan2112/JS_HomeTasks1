function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandom(1000, 9999);
console.log(`Дано число: ${num}`)
let reverseNum = "";
do{
    let remainder = num%10
    reverseNum += remainder.toString();
    num = (num - num%10)/10
}while(num>0)
console.log(`Зеркальным отображением данного числа является: ${reverseNum}`)