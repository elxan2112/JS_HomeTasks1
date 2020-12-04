function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let lengh = getRandom(5, 15);
let aarrss = new Array();
for (i=0; i<lengh; i++){
    let num = getRandom(1, 100);
    aarrss.push(num)
}

function arrayMax (ars){
    let max = -Infinity
    let ind;
    for (let i = 0 ; i< ars.length; i++){
        if(ars[i] >= max){
            max = ars[i];
        }
    }
    return max
}

for (i = 0; i < lengh; i++) {
    console.log( `${i+1}-й элемент массива равен: ${aarrss[i]}` );
  }
  console.log(`Максимальный элемент массива равен: ${arrayMax(aarrss)}`);