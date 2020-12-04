function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let lengh = getRandom(5, 15);
let aarrss = new Array();
for (i=0; i<lengh; i++){
    let num = getRandom(1, 100);
    aarrss.push(num)
}

function arrayMin (ars){
    let min = Infinity
    let ind;
    for (let i = 0 ; i< ars.length; i++){
        if(ars[i] <= min){
            min = ars[i];
            ind = i+1
        }
    }
    return ind
}

for (i = 0; i < lengh; i++) {
    console.log( `${i+1}-й элемент массива равен: ${aarrss[i]}` );
  }
  console.log(`Индекс минимального элемента массива равен: ${arrayMin(aarrss)}`);