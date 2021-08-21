let products = [
    { category: "cars", name : "bmw" },
    { category: "phones", name : "iphone" },
    { category: "laptops", name : "maacbook pro" },
    { category: "phones", name : "oneplus 8t" },
    { category: "phones", name : "samsung s21" },
    { category: "cars", name : "kia" },
    { category: "cars", name : "honda" }, 
  ]
  
// complete the code
products.map((prod, index) =>{
    prod['id'] = index;
})

console.log(products)
// final output, don't use loops , 
/*
[
  { category: "cars", name : "bmw",id:0},
  { category: "phones", name : "iphone",id:1 },
  { category: "laptops", name : "maacbook pro",id:2 },
  { category: "phones", name : "oneplus 8t" ,id:3},
  { category: "phones", name : "samsung s21" ,id:4},
  { category: "cars", name : "kia",id:5 },
  { category: "cars", name : "honda" ,id:6}, 
]
*/