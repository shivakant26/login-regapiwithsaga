import { REGISTER , LOGIN, SHOW_POST, CREATE_POST ,DELETE_POST, EDIT_POST ,UPDATE_POST} from "../actionType";

export const register_user = (data) =>{
    return{
        type:REGISTER,
        payload:data
    }
}

export const login_user = (data) =>{
    return{
        type:LOGIN,
        payload:data
    }
}

export const show_all_post = () =>{
    return{
        type:SHOW_POST
    }
}

export const create_post = (data) =>{
    return{
        type:CREATE_POST,
        payload:data
    }
}
export const delete_post = (data) =>{
    return{
        type:DELETE_POST,
        payload:data
    }
}

export const edit_post = (id)=>{
    return{
        type:EDIT_POST,
        payload:id
    }
}

export const update_post = (id)=>{
    return{
        type:UPDATE_POST,
        payload:id
    }
}