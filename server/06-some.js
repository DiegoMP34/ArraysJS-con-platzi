// for vs some
const nums = [1,2,3,4]

let res = false

for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element % 2 === 0){
        res = true
        //break porque ya sabemos si alguno cumple con la condicion
        break;
    }
}

console.log(res)

const res2 = nums.some(item => item % 2 === 0)

console.log('res2', res2)

// ejercicio
const orders = [
    {
      customerName: "Diego",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Jordan",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Jamir",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Esteban",
      total: 240,
      delivered: true,
    },
    {
        
      customerName: "Diego",
      total: 140,
      delivered: false,
    }
  ]

//al menos una orden fue entregada?
console.log("Entregada al menos uno? ", orders.some(item => item.delivered))

//ejercicio 2, con fechas
// agendaremos una fecha, pero tenemos que validar si esta no se cruza con las fechas del array dates,
// usaremos una libreria para saber este tipo de situacion. date-fns
import {areIntervalsOverlapping} from 'date-fns'

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ]


//fecha a agendar
const newAppointment = {
    startDate: new Date(2021, 1, 1, 10, 10),
    endDate: new Date(2021, 1, 1, 11, 30),
  }

const isOverlaping = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate})
    })
}

console.log('IsOverlaping: ', isOverlaping(newAppointment));