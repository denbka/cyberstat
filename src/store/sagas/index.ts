import { all } from 'redux-saga/effects'
import { watchProfileInfo } from './profile'
import watchFetchingUsers from './users'
import watchFetching from './common'
export default function* rootSaga() {
    yield all([
        watchProfileInfo(),
        watchFetchingUsers(),
        watchFetching()
    ])
}