function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let lengh = getRandom(1, 9);
let aarrss = new Array();
let ars2 = new Array();
for (i=0; i<lengh; i++){
    let num = getRandom(1, 100);
    aarrss.push(num);
}

for (let i = Math.floor(aarrss.length/2); i < aarrss.length; i++){
    let temp = aarrss[i]
    ars2.push(temp);
}
for (let i = 0; i< Math.floor(aarrss.length/2); i++){
    let temp = aarrss[i]
    ars2.push(temp);
}
console.log(aarrss);

console.log(ars2);