let summ = 0;
for (i=1; i<100; i++){
    if (i%2 === 0){
       summ = summ + i;
    }
}

console.log(`Сумма всех четных чисел в диапозоне от 1 до 99 равна: ${summ}`);