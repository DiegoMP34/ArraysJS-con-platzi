// Metodo para ordenar un conjunto de elementos. Este metodo es mutable
const months = ["March", "Jan", "Feb", "Dec"]

months.sort()
console.log(months) // el orden que retorna es de acuerdo al ordamiento de ASCII

const numbers = [1, 30, 4, 21, 100000]
numbers.sort((a, b) => a - b) // se pasa los paramentros a la funcion comparefn
console.log(numbers) // aqui se ordena de manera ascendente

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
]

words.sort()
console.log(words)

//ordenar de acuero al total de manera ascendente
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2023,7,14,10,40,20)
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2023,7,14,10,42,10)
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2023,7,14,10,20,1),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2023,7,14,10,9,59),
    },
]

orders.sort((a, b) => a.total - b.total)
console.log(orders)

//RETO: ordenar las orders de acuerdo a un fecha, de la primera hasta la mas reciente. 
orders.sort((a, b) => b.date - a.date)
console.log(orders)