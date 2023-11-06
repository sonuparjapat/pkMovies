const express=require('express')
const cors=require('cors')
const { getRouter } = require('./Router/getRouter')
const app=express()
app.use(cors())
app.use(express.json())
 app.use("/getmovies",getRouter)
app.listen(8080,()=>{
    console.log("backend is working on port 8080")
})



