function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandom (0, 10000);
let temp = 0;
console.log(num)
do {
    temp += num%10
    num = (num - num%10)/10
}while(num > 0)
console.log(temp)