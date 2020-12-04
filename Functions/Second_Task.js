function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let number = getRandom(1,999)
console.log (`Вы ввели число: ${number}`)

function getNumsName(num){
    let units = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    let dozensExclusive = ["одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    let dozens = ["десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семдесять", "восемьдесять", "девяносто"];
    let hundreds = ["сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
    let un = num%10;
    let doz = num%100;
    let hun = ((num - doz)/100)%10;
    let a;
    let b;
    let c;
    if (un>0 && un<10)
    a = units [un-1];
    else if (un === 0)
    a = "";
    //!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!//
    if (doz>10 && doz<20){
    b = dozensExclusive[doz-11];
    a = ""
    }
    else if (doz === 10 || doz>19){
        let remainder = Math.floor(doz/10);
        b = dozens[remainder - 1];
    }
    else if (doz < 10)
    b = "";
    //!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!//
    if (hun>0 && hun <10)
    c = hundreds[hun-1];
    else if (hun < 1)
    c = "";
    
    return(c + " " + b + " " + a);
}

console.log(`Прописью данное число будет равно: ${getNumsName(number)}`); 