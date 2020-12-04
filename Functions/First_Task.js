function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let dayNum = getRandom(1,10);
console.log(dayNum)
switch(dayNum){
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскреcение!!!!!!!!!!!");
        break;
    default:
        console.log("Такого дня недели не существует");
        break;        
}