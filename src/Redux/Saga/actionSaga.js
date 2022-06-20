import { REGISTER , REGISTER_SUCCESS ,
    ERROR, LOGIN_SUCCESS, LOGIN, SHOW_POST,
     SHOW_POST_SUCCESS, CREATE_POST,
     CREATE_POST_SUCCESS,DELETE_POST,DELETE_POST_SUCCESS
    } from "../actionType";
import { call, put, takeEvery } from 'redux-saga/effects';
import http from "../../Service/fetchapi";



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
function* login(action){
    try{
        const res = yield call(http.post,"/signin" ,{user:action.payload})
        yield put({
            type:LOGIN_SUCCESS,
            payload:res
        })
    }catch(error){
        yield put({
            type:ERROR,
            payload:error
        })
    }
}

function* showPost(){
    try{
        const res = yield call(http.get,"/posts")
        yield put({
            type:SHOW_POST_SUCCESS,
            payload:res
        })
    }catch(error){
        yield put({
            type:ERROR,
            payload:error
        })
    }
}

function* CreatePost(action){
    try{
        const res = yield call(http.post,"/posts" , {post:action.payload})
        yield put({
            type:CREATE_POST_SUCCESS,
            payload:res
        })
    }catch(error){
        yield put({
            type:ERROR,
            payload:error
        })
    }
}

function* DeletePost(action){
    debugger;
    try{
        const res = yield call(http.delete,`/posts/${action.payload}`)
        yield put({
            type:DELETE_POST_SUCCESS,
            payload:res
        })
    }catch(error){
        yield put({
            type:ERROR,
            payload:error
        })
    }
}


export default function* userSaga(){
    yield takeEvery(REGISTER,register);
    yield takeEvery(LOGIN,login)
    yield takeEvery(SHOW_POST,showPost)
    yield takeEvery(CREATE_POST,CreatePost)
    yield takeEvery(DELETE_POST,DeletePost)
}