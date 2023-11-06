import axios from "axios"
import { getmoviefail, getmoviereq, getmoviesucc } from "./ActionTypes"

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
          `http://www.omdbapi.com`,{
            "params":obj
          }
        );
// console.log(response.data.Search)
        if (response.data.Search) {
          dispatch(getmoviesuccess(response.data.Search))
         
        } 
      } catch (err) {
       dispatch(getmoviefailure())
      }
}