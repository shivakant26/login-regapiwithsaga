import { REGISTER , REGISTER_SUCCESS ,ERROR} from "../actionType";
import { call, put, takeEvery } from 'redux-saga/effects';
import { http } from "../../Service/fetchapi";
function* register(action){
    console.log(2132132132,action);
    try {
        const res = yield call(http.post,"/signup" ,{user:action.payload});
        yield put({
            type:REGISTER_SUCCESS,
            payload:res
        });
      } catch (error) {
        yield put({ 
            type:ERROR,
            payload:error
        });
      }
}







export default function* userSaga(){
    yield takeEvery(REGISTER,register)
}