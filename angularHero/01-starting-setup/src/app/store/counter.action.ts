import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    "[counter] increment", props<{val:number}>()
);

export const decrement = createAction(
    "[Counter] decrement",props<{valInt:number}>()
);