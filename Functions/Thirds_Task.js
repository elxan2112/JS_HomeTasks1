let numberWithWord = "сто тридцать два";
let numberWithWordArr = numberWithWord.split(" ")

console.log(`Вы ввели число ${numberWithWord}`)

if (numberWithWordArr.length === 2){
    numberWithWordArr.push(" ")
}
else if (numberWithWordArr.length === 1){
    numberWithWordArr.push(".");
    numberWithWordArr.push(" ");
}

function getWordNums(ars){
    let units = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    let dozensExclusive = ["одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    let dozens = ["десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семдесять", "восемьдесять", "девяносто"];
    let hundreds = ["сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
    let a;
    let b;
    let c;
    for (i=0; i<9; i++){
        if (ars[0] === hundreds[i])
            a = (i+1)*100;
        else if (ars[0] === dozens[i])
            a = (i+1)*10;
        else if (ars[0] === dozensExclusive[i])
            a = i+11;
        else if (ars[0] === units [i])
            a = i+1;
//!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!//
        if (ars[1] === dozens[i])
            b = (i+1)*10;
        else if (ars[1] === dozensExclusive[i])
            b = i + 11;
        else if (ars [1] === units[i])
            b = i+1;
        else if (ars[1] === " " || ars[1] === "."){
            b = 0;
        }
//!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!//
        if (ars[2] === units[i])
            c = i+1;
        else if (ars[2] === " "){
            c = 0;
        }
    }
    return (a + b + c)
}
console.log(`Введенное число в числах будет равно: ${getWordNums(numberWithWordArr)}`)