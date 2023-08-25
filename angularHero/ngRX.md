## STATE MANAGEMENT IN ANGULAR
- NgRX
    - Is the state management solution
    - To install ngrx write ``ng add @ngrx/store`` in your text editor terminal
    - Building block of NgRX
        - store
            - This is the place where you'll store your state data.
            - First You should create store for storing youer data
             - create reducer
                ```
                    // app.module.ts
                    @NgModule({
                        imports:[
                            storeModule.forRoot({keyReducer:reducerName}) // store
                        ]
                    });

                    // reducer.ts
                    const initialVal  = 0;
                    export const reducerName = createReducer(initialVal);

                    // read your stored data
                    //output.ts
                    export class OutPutComponent{

                        outPutVal:Observable<number>;

                        constructor(private store:Store<{reduceKey:number}>){
                        this.outPutVal = store.select('reduceKey')
                        }
                    }



                    // Use Action When you need to update your value as shown below...
                    //action.ts
                    const actionName = createAction(
                        "[featureName] action-name",
                        props<dataType>()  // this used when you need to pass a value that'll be used into operation of update initial value
                    );

                    // back to reducer

                    constructor(private store:Store<{reduceKey:type}>){
                        outPutVal = store.select("reduceKey",on(actionName,(state,data)=>state + data.key ))
                    } 

                    // call method to update
                    onClick(){
                        store.dispatch(actionName({passedVal:value}));
                    }  
                    
                    //note:
                    // when you call this method automatically you're updating the initial value and trigger the oberver
                    // which was listening for initialval, so automatically the outPutVal will be updated and user see Miracle.


                ```
        - Selector
        - action
        - reducer
        - Effects
            - Used to handle side effect (Http Request, Send Data to local storage, Logging)
            - add effect package into angular app ``ng add @ngrx/effects``