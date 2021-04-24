const express=require('express')
const path =require('path')
const app=express()
const port=process.env.PORT || 3000
app.use(express.static('public'))
app.get('/',(req,res)=>{
res.send("sent")
})
app.listen(port,()=>{
    console.log("Server is at "+port)
})