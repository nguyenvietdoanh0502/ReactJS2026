import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./type";

const initState = {
    count:1
}
export const counterReducer = (state = initState,action) =>{
    console.log(state.count);
    switch(action.type){
        case INCREMENT_COUNTER:
            return{
                count: state.count+1
            }
        case DECREMENT_COUNTER:
            return{
                count: state.count-1
            }
        default:
            return state;
    }
}
