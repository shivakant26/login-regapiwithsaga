import { REGISTER } from "../actionType";

export const register_user = (data) =>{
    console.log("01")
    return{
        type:REGISTER,
        payload:data
    }
}