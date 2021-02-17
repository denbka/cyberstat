import { TTest } from './types/testTypes'

const initialState: TTest = {
    pageTitle: 'Главная',
    loading: false,
}

export default (state = initialState, action: { type: string, data: any }) => {
    console.log(action.type)
    switch (action.type) {
        case 'FETCHED_PROFILE_INFO': {
            return {
                ...state,
                loading: true
            }
        }
        case 'SET_PROFILE_INFO': {
            return {
                ...state,
                info: action.data,
                loading: false
            }
        }
        case 'SET_LOADING': {
            return {
                ...state,
                loading: action.data
            }
        }
        default: return state
    }
}