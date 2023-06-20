const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
]

//si la edad es mayor a 15, el equipo no podra ser inscrito.

const isAgeAccomplished = team.every(member => member.age>15)

if (isAgeAccomplished){
    console.log('Aceptado: El equipo cumple con los requisitos')
}else{
    console.log('No aceptado: Todos los miembros deben tener mas de 15 años')
}