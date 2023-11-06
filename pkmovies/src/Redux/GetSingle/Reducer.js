
import { getsinglereq, getsinglesucc, getsinglfail } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    single:[]
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getsinglereq:{
            return {...state,isLoading:true,isError:false,single:[]}
        }
        case getsinglesucc:{
            return {...state,isLoading:false,isError:false,single:payload}
        }
        case getsinglfail:{
            return {...state,isLoading:false,isError:true,single:[]}
        }
        default:{
            return state
        }
    }
}