const express=require('express');
const app=express();
const products=require('./db/products')
const person=[{item:'Pants',price:24},{item:'Shoes',price:25}];
app.get("/api/products",(request, response)=>{
  response.status(200).json(products)
})
app.get("/cart",(request, response)=>{
  response.send('Hello from Express Server')
})
app.listen(3000,() =>{
  console.log('server is up and running')
});