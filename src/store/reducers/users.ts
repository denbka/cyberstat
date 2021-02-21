const initialStore = {
    list: [],
    isFetching: false
}

export default (store = initialStore, action: { type: string, data: any }) => {
    switch(action.type) {
        case 'FETCHED_SUCCESS': {
            return {
                ...store,
                list: action.data,
                loading: false
            }
        }
        case 'SET_FETCHING': {
            return {
                ...store,
                isFetching: action.data
            }
        }
        default:
            return store
    }
}