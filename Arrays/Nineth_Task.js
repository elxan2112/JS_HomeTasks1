function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let lengh = getRandom(5, 15);
let arr = new Array();
for(let i=0; i< lengh; i++){
    let num = getRandom(1, 1000);
    arr.push(num);
}
console.log(`Массив имеет вил: ${arr}`);

function bubbleMethod(ars){
    let temp;
    for(let i=0; i<ars.length; i++){
        for(let j= i+1; j<ars.length; j++){
            if (ars[i]>ars[j]){
                temp = ars [i];
                ars [i] = ars[j];
                ars[j] = temp;
            }
        }
    }
    return ars;
}

console.log(`После сортировки методом пузырька массив имеет вид: ${bubbleMethod(arr)}`);