let isRainy = !false
let isSun = true
let isWendy = true
let temperature = 15
let blueSky = true
let clothes = ''

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}

if (temperature < 15 && isRainy) {
  clothes += 'coat,umbrella '
} else if (temperature > 15 && temperature <15) {
  clothes += 'sweater, '
} else if (isRainy && temperature >= 10) {
    clothes += 'Kway, '}
    else if (blueSky && isSun) {
        clothes += 'Lunette de soleil, '}
 else {
  clothes += 'Rien du tout avant de prende la température '
}
console.log(`Je vous recommande de porter: ${clothes}`);