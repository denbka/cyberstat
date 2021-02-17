import { put, call, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'
import { fetchedSuccess, setLoading } from '../../actions/profile'
type TFetchProfileInfo = {
    type: string,
    profile_id: string
}
export function* fetchProfileInfo({profile_id}: TFetchProfileInfo) {
    try {
        //jeka 284685272 
        //ya 156196043
        //shergarat 372801387
        // yield put(setLoading(true))
        const fetchedData = yield call(axios.get, `/api/players/${profile_id}`)
        const fetchedDataWL = yield call(axios.get, `/api/players/${profile_id}/wl`)
        const fetchedRecentlyMatches = yield call(axios.get, `/api/players/${profile_id}/recentMatches`)
        const fetchedHeroes = yield call(axios.get, `/api/players/${profile_id}/heroes`)
        const summaryData = {...fetchedData.data, wl: fetchedDataWL.data, recentMatches: fetchedRecentlyMatches.data, heroes: fetchedHeroes.data}
        yield put(fetchedSuccess(summaryData))
        // yield put(setLoading(false))
    } catch(e) {
        console.log(e)
        // yield put(setLoading(false))
    }
}

export function* watchProfileInfo() {
    yield takeEvery('FETCHED_PROFILE_INFO', fetchProfileInfo)
}