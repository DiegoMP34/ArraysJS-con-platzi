// for vs join
const array = ['diego','aprobo','el','examen']
const separador = '-'
let joined = ''

/* for (let index = 0; index < array.length; index++) {
    const element = array[index]
    joined += element + separador
} */

//no mostrar el separador al final de la cadena joined.
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(array[array.length-1] === element){
        joined += element
    }else{
        joined += element + separador
    }
} */

//JOIN
const string = array.join(separador)
console.log(array)
console.log(string)

//Ejercicio: En este desafío vas a recibir el título de un artículo y tú debes 
//transformarlo en un formato de URL en donde normalmente se transforma todo 
//en minúscula y se cambian los espacios por un guion (-).

const parseToURL = (title) => {
    return title.split(' ').join('-').toLowerCase()
}

console.log(parseToURL(`Mi Personal Page Diego's`));