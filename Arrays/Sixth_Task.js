function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let lengh = getRandom(5, 15);
let aarrss = new Array();
for (i=0; i<lengh; i++){
    let num = getRandom(1, 100);
    aarrss.push(num)
}
for (i = 0; i < lengh; i++) {
    console.log(`${i+1}-й элемент массива равен: ${aarrss[i]}`);
  }
let ars2 = aarrss.reverse();

console.log(ars2);