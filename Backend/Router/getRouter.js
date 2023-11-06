const { default: axios } = require("axios")
const express=require("express")

const getRouter=express.Router()

getRouter.get("/get",async(req,res)=>{
const {s,apiKey}=req.query

try{
    const response=await axios.get(`http://www.omdbapi.com/?s=${s}&apikey=${apiKey}`)

    if (response.data.Search) {
        res.status(200).json({moviedata:response.data.Search})

}}catch(err){
    res.status(400).json({msg:"something going wrong"})
}


})


// for single data

getRouter.get("/getsingle",async(req,res)=>{
    const {i,apiKey}=req.query

try{
    const response=await axios.get(`http://www.omdbapi.com/?i=${i}&apikey=${apiKey}`)

    if (response.data) {
        res.status(200).json({moviedata:response.data})

}}catch(err){
    res.status(400).json({msg:"something going wrong"})
}

})
module.exports={getRouter}