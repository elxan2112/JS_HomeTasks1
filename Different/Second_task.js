function GetRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let x = GetRandom (-10, 10);
let y = GetRandom (-10, 10);
if (x>0 && y>0)
console.log(`X= ${x}, Y=${y}. Первая четверть`);
else if (x<0 && y>0)
console.log(`X= ${x}, Y=${y}. Вторая четверть`);
else if (x<0 && y<0)
console.log(`X= ${x}, Y=${y}. Третья четверть`);
else if (x>0 && y<0)
console.log(`X= ${x}, Y=${y}. Четвертая четверть`);
else if (x=0 && y>0 || y<0)
console.log(`X= ${x}, Y=${y}. Точка находится на оси Y`);
else if (y=0 && x<0 || x>0 )
console.log(`X= ${x}, Y=${y}. Точка находится на оси X`);
else
console.log(`X= ${x}, Y=${y}. Точка находится на начале координат`);