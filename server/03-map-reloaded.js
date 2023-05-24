// mutacion con map
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
  ]

// al realizar este tip de asignacion, estamos usando la referencia en memoria
// por lo que tanto orders es modificado, aun cuando map sirve para la inmutabilidad
// esto sucede porque estamos manipulando los elementos de tipo object.
/* const newOrders = orders.map(order => {
    order.tax = .18
    return order
}) */

/* console.log(orders)
console.log(newOrders) */

// Para no realizar esta mutabilidad en orders, usamos spread operator
const newOrders = orders.map(order => {
   return {...order, tax:0.18 , pago: Math.trunc(order.total * .18)}
})

console.log(orders)
console.log(newOrders)