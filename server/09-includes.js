// includes vs for
let arr = ["dog", "turtle", "hipo"]

// si usamos un algortimo para encontrar un elemento con la sentencia for

let isIncluded = false

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element === "hipo"){
        isIncluded = true
        break
    }
}

console.log(isIncluded)

// includes

const isHipoIncluded = arr.includes('cat')

console.log(isHipoIncluded)