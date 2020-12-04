function GetRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rating = GetRandom(0, 100)
if(rating >= 0 && rating < 20){
    console.log(`Рейтинг: ${rating}; Оценка: F`)
}
else if(rating >= 20 && rating < 40){
    console.log(`Рейтинг: ${rating}; Оценка: E`)
}
else if(rating >= 40 && rating < 60){
    console.log(`Рейтинг: ${rating}; Оценка: D`)
}
else if(rating >= 60 && rating < 75){
    console.log(`Рейтинг: ${rating}; Оценка: C`)
}
else if(rating >= 75 && rating < 90){
    console.log(`Рейтинг: ${rating}; Оценка: B`)
}
else if(rating >= 90 && rating <= 100){
    console.log(`Рейтинг: ${rating}; Оценка: A`)
}