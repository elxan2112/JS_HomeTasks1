function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let lengh = getRandom(5, 15);
let aarrss = new Array();
for (i=0; i<lengh; i++){
    let num = getRandom(1, 100);
    aarrss.push(num)
}

function arrElementsIndexSumm(ars){
    let count = 0;
    for (let i = 0; i < ars.length; i++){
        if(ars[i]%2 !== 0){
            count++
        }
    }
    return count;
}

for (i = 0; i < lengh; i++) {
    console.log( `${i+1}-й элемент массива равен: ${aarrss[i]}` );
  }
  console.log(`Количество всех нечетных элементов данного массива равно: ${arrElementsIndexSumm(aarrss)}`);
