// flat vs for
const matrix1 = [5,3,7,[1,2],10]
const matrix = [[11,21],[12,43],[54,66,[121,132,146,[1016,1027]]]]
const newArray = []

// aplanamos has un nivel 2, para realizar mas nivel con for, el algoritmo seria recursivo.
/* for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
        newArray.push(element[j])
    }
} */

//recursividad
function aplanar(lista){
    let nLista = []
    if(typeof lista != 'object') return [lista]
    lista.forEach(el => {
        nLista = nLista.concat(aplanar(el))
    })
    return nLista
}

const rArray = aplanar(matrix)
console.log(rArray)

//flat
const flated = matrix.flat(4)
console.log(flated)

//FlatMap - aplanar una matriz con objetos, esto te obliga a recorrer los objetos
//para acceder a sus propiedades arrays para aplanarlas.
const users = [
    {userId: 1, username: "pablo", attributes: ["nice","kind"]},
    {userId: 1, username: "sara", attributes: ["lovely"]},
    {userId: 1, username: "someone", attributes: ["nice","cute"]}
]

const res1 = users.map(user => user.attributes).flat() // [ 'nice', 'kind', 'lovely', 'nice', 'cute' ]
console.log(res1)

const res2 = users.flatMap(user => user.attributes) // [ 'nice', 'kind', 'lovely', 'nice', 'cute' ]
console.log(res2)

//Reto: Obtener en un array lineal, todas las fechas de inicio de cada uno de los calendarios del siguiente array
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  }
  
/* Mi solucion
const fechasInicio = []
for (const calendar in calendars) {
  fechasInicio.push(calendars[calendar].map( appointment => appointment.startDate))
}
console.log(fechasInicio.flat()) */

//solucion del profesor
const res3 = Object.values(calendars).flatMap(calendar => calendar.map(appointment => appointment.startDate))
console.log(res3)

/*
[
  2021-02-01T20:00:00.000Z,
  2021-02-01T22:00:00.000Z,
  2021-02-01T17:00:00.000Z,
  2021-02-01T14:00:00.000Z
]
*/