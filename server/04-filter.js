// for vs filter
const words = ['luz','agua','gas','internet']

/* const newArr = []
for (let word = 0; word < words.length; word++) {
    const element = words[word]
    if(element.length > 3){
        newArr.push(element)
    }
} */

/* console.log(words)
console.log(newArr) */

// filter - devuelve un array, por lo que no afecta al original (inmutable)
// donde solo devolvera ese array con valores que hayan pasado una CONDICION

const res = words.filter( item => item.length > 3)

console.log(words)
console.log(res)

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

const res2 = orders.filter(item => item.delivered && item.total > 100)

console.log(res2)

//buscador sencillo
const search = (query) =>{
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search("Die"));
console.log(search("J"));