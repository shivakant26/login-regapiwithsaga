import { REGISTER_SUCCESS, 
    LOGIN_SUCCESS, ERROR, 
    SHOW_POST_SUCCESS , 
    CREATE_POST_SUCCESS , 
    DELETE_POST_SUCCESS ,
    EDIT_POST_SUCCESS 
} from "../actionType";

const initialState = {
    data: []
}


const userReducer = (state = initialState, action) => {
    console.log("03")
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case LOGIN_SUCCESS:
            debugger;
            return {
                ...state,
                logindata: action.payload,
                token: localStorage.setItem("token", action.payload.data.token),
                userid: localStorage.setItem("userid", action.payload.data.user.id)
            }
        case SHOW_POST_SUCCESS:
            return {
                ...state,
                showallpost: action.payload
            }
            case CREATE_POST_SUCCESS:
            return {
                ...state,
                createpost: action.payload
            }
            case DELETE_POST_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
            case EDIT_POST_SUCCESS:
            return {
                ...state,
                editdata: action.payload
            }
        case ERROR:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default userReducer;