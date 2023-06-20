const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
]

//encuentra la comida que cuesta mas de 100
const findIt = products.find(product => product.price>100) // si no se encuentra devuelve undefined

//devuelve la posicion
const findItIndex = products.findIndex(product => product.price>100)// si no se encuentra devuelve -1

console.log(findIt)
console.log(findItIndex)