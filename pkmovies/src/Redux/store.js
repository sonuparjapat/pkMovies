import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import {reducer as getmoviesreducer} from "./GetMoveis/Reducer"
import {reducer as getsinglereducer} from "./GetSingle/Reducer"
const rootreducer=combineReducers({getmoviesreducer,getsinglereducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))