import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchedSuccess } from '../actions/users'
function* fetchUsers(data: {type: string, query: string}) {
    try {
        const response = yield call(<any>axios.get, '/api/search', {
            params: {
                q: data.query
            }
        })
        yield put(fetchedSuccess(response.data))
    } catch(e) {
        console.log(e)
    }
}

export default function* watchFetchingUsers() {
    yield takeEvery('FETCH_USERS', fetchUsers)
}