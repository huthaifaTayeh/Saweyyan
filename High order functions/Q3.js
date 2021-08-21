const products = [
    { id:0,category: "cars", name : "bmw",price:10 },
    { id:1,category: "phones", name : "iphone",price:100 },
    { id:2,category: "laptops", name : "maacbook pro",price:1000 },
    { id:3,category: "phones", name : "oneplus 8t",price:10000 },
    { id:4,category: "phones", name : "samsung s21",price:100000 },
    { id:5,category: "cars", name : "kia",price:10000000 },
    { id:6,category: "cars", name : "honda",price:100000000 }, 
  ]
  
// #1
console.log(products.find((prod) =>{
    if (prod.id === 1) {
        return prod
    }
}))

// #2

console.log(products.map((prod) => {
    return prod.price
}).reduce((tot, curr) =>{
    return tot+ curr
}))

products.forEach((prod) =>{
    console.log(prod)
})