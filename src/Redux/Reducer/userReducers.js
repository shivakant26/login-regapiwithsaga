import { REGISTER_SUCCESS } from "../actionType";

const initialState ={
    data:[]
} 


const userReducer = (state=initialState,action) =>{
    console.log("03")
    switch(action.type){
        case REGISTER_SUCCESS :
            debugger;
            return{
                ...state,
                data : action.payload

            }
            default:
            return state
    }
}

export default userReducer;