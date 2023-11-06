import axios from "axios"
import { getmoviefail, getmoviereq, getmoviesucc } from "./ActionTypes"
import { apikey } from "../ApiRelated/Api"

export const getmovierequest=()=>{
    return {type:getmoviereq}
}

export const getmoviesuccess=(payload)=>{
    return {type:getmoviesucc,payload}
}
export const getmoviefailure=()=>{
    return {type:getmoviefail}
}

export const getmovies=(obj)=>async(dispatch)=>{
// obj.s=="undefined"&&(obj.s="avatar")
dispatch(getmovierequest())


    try {
        const response = await axios.get(
          `https://omdbbackend.onrender.com/getmovies/get`,{
            "params":obj
          }
        );
// console.log(response.data.Search)
// console.log(response)
        if (response.data.moviedata) {
          dispatch(getmoviesuccess(response.data.moviedata))
         
        } 
      } catch (err) {
       dispatch(getmoviefailure())
      }
}