var axios = require("axios")
const express = require("express")
const app = express()

app.get("/",(req,res)=>{
res.json({status:"WORKING"})
})


app.listen(process.env.PORT, ()=>{
    console.log("IZI")
})


setInterval(()=>{

},10000)
