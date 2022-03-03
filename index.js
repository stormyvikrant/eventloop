


const express=require("express")
const app=express()

app.get("/users",function(req,res){
    console.log("hellow")
    res.send("hello")
});

app.get("/books",function(req,res){
   var data=[{
    name:"A Farewell To Arms",
    author:"Ernest Hemingway"},

   {name:"Brave New World",
   author:"Aldous Huxley"},

   {name:"Lord Of The Flies",
   author:"William Golding"},
]
    res.send(data)
});

app.listen(5000,()=>{
    // console.log("vikki vikrant")
})