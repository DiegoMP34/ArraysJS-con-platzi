// foreach - usado para realizar un callback function por cada elemento iterado
const letters = ['z', 'x','y','v']

for (let letter = 0; letter < letters.length; letter++) {
    console.log('for', letters[letter])
}

letters.forEach(letter => console.log('foreach', letter))