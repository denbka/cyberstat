import { all } from 'redux-saga/effects'
import { watchProfileInfo } from './profile'
export default function* rootSaga() {
    yield all([
        watchProfileInfo()
    ])
}