import { put, call, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'
import { fetchedSuccess, setLoading } from '../../actions/profile'
import heroesList from '../../../helpers/heroesList.json'
type TFetchProfileInfo = {
    type: string,
    profile_id: string
}

const addHeroById = (matches: []) => {
    return matches.map((match:any) => {
        const hero = <any>heroesList.heroes.find((hero:any) => hero.id === match.hero_id)
        return {
            ...match,
            hero
        }
    })
}

export function* fetchProfileInfo({profile_id}: TFetchProfileInfo) {
    try {
        const fetchedData = yield call(axios.get, `/api/players/${profile_id}`)
        const fetchedDataWL = yield call(axios.get, `/api/players/${profile_id}/wl`)
        let fetchedRecentlyMatches = yield call(axios.get, `/api/players/${profile_id}/recentMatches`)
        const fetchedHeroes = yield call(axios.get, `/api/players/${profile_id}/heroes`)
        fetchedRecentlyMatches = addHeroById(fetchedRecentlyMatches.data)
        const summaryData = {
            ...fetchedData.data,
            wl: fetchedDataWL.data,
            recentMatches: fetchedRecentlyMatches,
            heroes: fetchedHeroes.data,
        }
        console.log(summaryData)
        yield put(fetchedSuccess(summaryData))
    } catch(e) {
        console.log(e)
    }
}

export function* watchProfileInfo() {
    yield takeEvery('FETCHED_PROFILE_INFO', fetchProfileInfo)
}