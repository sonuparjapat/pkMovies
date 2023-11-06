import { getmoviefail, getmoviereq, getmoviesucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    data:[]
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getmoviereq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case getmoviesucc:{
            // console.log(payload)
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case getmoviefail:{
            return {...state,isLoading:false,isError:true,data:[]}
        }
        default:{
            return state
        }
    }
}