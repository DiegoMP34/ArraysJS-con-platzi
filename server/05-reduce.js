// for vs reduce
const array = [1, 2, 3, 4, 5]

let element = 0
for (let index = 0; index < array.length; index++) {
    element += array[index];
}

console.log(element)

const res = array.reduce((sum,item) => sum + item,0)

console.log('res ', res )

//reduce reloaded
// reducir a un objeto, un array de numeros, donde nos indique la cantidad de 1, 2 y 3 que tiene el array
const nums = [1,3,2,3]

const objRes = nums.reduce((obj,item) => {
    if (!obj[item]){
        obj[item] = 1
    }else{
        obj[item] = obj[item] + 1
    }
    return obj
},{})

console.log(objRes)

//Ejercicio
// reducir a un objeto un array de numeros, donde nos indique la cantidad de numeros
// de acuerdo a el rango de 1-5, 6-8 y 9-10.
const numeros = [10,1,2,3,2,3,5,8,8,6,3,5,8,9,3,2,5,6,4,8,10,4]

//validando el rango
const between = (num, a, b) =>{
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    return num >= min && num <= max
} 

const objRes2 = numeros.reduce((obj,item) => {
    if (between(item,1,5)) {
        obj["1-5"] += 1
    }else if(between(item,6,8)){
        obj["6-8"] += 1
    }else if(between(item,10,9)){
        obj["9-10"] += 1
    }
    return obj
}, {"1-5":0,"6-8":0,"9-10":0})

console.log(objRes2)