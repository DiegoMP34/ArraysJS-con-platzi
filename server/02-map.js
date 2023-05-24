// for vs map
const numbers = [100,101,102,104]

/* const newNumbers = []
for (let number = 0; number < numbers.length; number++) {
    const element = numbers[number]
    newNumbers.push(element + 10)
} */

const newNumbers = numbers.map(number => number + 10)

console.log(numbers)
console.log(newNumbers)

// mismo resultado, menos codigo.
// OJO: a diferencia de foreach, map nos devuelve un array.