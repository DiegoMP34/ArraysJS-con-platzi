// foreach - usado para realizar un callback function por cada elemento iterado
const letters = ['z', 'x','y','v']

for (let letter = 0; letter < letters.length; letter++) {
    console.log('for', letters[letter])
}

letters.forEach(letter => console.log('foreach', letter))

// vemos como despues del forEach el numbers sigue intacto
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)

numbers.forEach(number => console.log( number * 10))

console.log(numbers)

// aqui si afecta al array number.
numbers.forEach((number, _index, numbers) => {
    numbers.push(number * 2)
})

console.log(numbers)

// pero si usamos map
let numbers1 = [1,  2, 3, 4, 5]

console.log(numbers1)

//nos devolveria un array distinto sin afectar al principal.
const newNumbers1 = numbers1.map(number => number * 2)

console.log(numbers1)
console.log(newNumbers1)