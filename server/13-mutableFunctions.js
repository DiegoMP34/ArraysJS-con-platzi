// Algunas de la funciones de arrays son mutables como:
// splice, push, shift, unshift, pop, sort.
//La idea del siguiente codigo es comprender la mutabilidad de estos metodos con los arrays.
const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// lo que haremos es agregar un producto a mi myProducts y retirar ese producto del array products
/* const productIndex = products.findIndex(item => item.id === '🍔')
if (productIndex !== -1) {
    myProducts.push(products[productIndex])
    products.splice(productIndex, 1)
}  

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10)); */

//RETO1: Eliminar un elemento de products sin modificarlo.
let newProducts = []
const productIndex = products.findIndex(item => item.id === '🍔')
if (productIndex !== -1) {
    myProducts.push(products[productIndex])
    newProducts = products.filter((_,idx) => idx !== productIndex)
}

console.log("products", products)
console.log('new Products', newProducts)
console.log("myProducts", myProducts)
console.log("-".repeat(10))

//Vamos a realizar un update, usaremos un product "version 2"
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
]

const updateV2 ={
    id: '🥞',
    changes: {
        price: 201,
        description: 'Delicious'
    }
}


/* Solucion modificando el array orignal 
const productIndexV2 = productsV2.findIndex(product => product.id === updateV2.id)
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...updateV2.changes,
} */

/* Solucion mas obvia, usando spread operator, para no modificar el array original 
let newProductsV2 = []
const productIndexV2 = productsV2.findIndex(product => product.id === updateV2.id)
newProductsV2 = [
    ...productsV2,
    {
        ...productsV2[productIndexV2],
        ...updateV2.changes,
    }
] */

//solucion mas sencilla y limpia, para no modificar el array original.
const newProductsV2 = productsV2.map(item => {
    if (item.id === updateV2.id) {
      return {
        ...item,
        ...updateV2.changes,
      }
    }
    return {...item};
  })

console.log("productsV2", productsV2)
console.log("new productsV2", newProductsV2)
console.log("-".repeat(10))