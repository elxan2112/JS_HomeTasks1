function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let a_x = getRandom(-10, 10)
let a_y = getRandom(-10, 10)
let b_x = getRandom(-10, 10)
let b_y = getRandom(-10, 10)

function findDistance(x1, x2, y1, y2){
    let distance = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))
    console.log(`Расстояние между точками (${x1}, ${y1}) и (${x2}, ${y2}) равно: ${distance}`)
}

findDistance(a_x, b_x, a_y, b_y)