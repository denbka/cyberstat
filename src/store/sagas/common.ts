import {takeEvery, put, call } from 'redux-saga/effects'
export function* fetchEntity(data:any) {
    console.log(data)
    try {

    } catch(error) {
        console.log(error)
    }
}

export default function* watchGetEntity() {
    yield takeEvery('FETCHING', fetchEntity)
}