import { createReducer, on } from "@ngrx/store"
import { decrement, increment } from "./counter.action";

const listeCounter:number = 0;
export const counterReducer = createReducer(listeCounter,on(increment,(state,action)=>state+action.val),on(decrement,(state,action)=>state-action.valInt));
