// concat vs for
const array = [1,2,3,4,5]
const otherArray = [6,7,8,9,10]

//al asignar de esta manera, se realiza una mutacion de la varaibles array, debido a la referencia.
//const newArray = array

//seria mejor que se asignase con un spread operator.
const newArray = [...array]
for (let index = 0; index < otherArray.length; index++) {
    const element = otherArray[index]
    newArray.push(element)
}

console.log(newArray)

const concatArray = array.concat(otherArray)

console.log(concatArray)

//Otra forma de agregar elementos de arrays a otro.
array.push(...otherArray)
console.log(array)