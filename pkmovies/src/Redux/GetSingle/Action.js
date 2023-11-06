import axios from "axios"
import { getsinglereq, getsinglesucc, getsinglfail } from "./ActionTypes"

export const getsinglerequest=()=>{
    return {type:getsinglereq}
}

export const getsinglesuccess=(payload)=>{
    return {type:getsinglesucc,payload}
}

export const getsinglefailure=()=>{
    return {type:getsinglfail}
}

export const getsingle=(obj)=>async(dispatch)=>{
    dispatch(getsinglerequest())
try{
    const response=await axios.get("https://omdbbackend.onrender.com/getmovies/getsingle",{
        params:obj
    })
    // console.log(response)
    const moviedata=await response.data.moviedata
    if(moviedata){
        dispatch(getsinglesuccess(moviedata))
    }
}catch{
    dispatch(getsinglefailure())
}
}