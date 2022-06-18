import { all } from "redux-saga/effects";
import userSaga from "./actionSaga";
export default function* rootSaga(){
    yield all([
        userSaga()
    ])
}