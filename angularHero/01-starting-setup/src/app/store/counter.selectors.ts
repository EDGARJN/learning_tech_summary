import { createSelector } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";

export const singleSelector = (state:{counter:number})=>state.counter;
export const doubleSelector = createSelector(singleSelector,(state)=>state*2);