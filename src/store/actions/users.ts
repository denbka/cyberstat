export const fetchUsers = (query: string) => {
    return {
        type: 'FETCH_USERS',
        query
    }
}

export const fetchedSuccess = (data: any) => {
    return {
        type: 'FETCHED_SUCCESS',
        data
    }
}

export const setIsFetching = (value: boolean) => {
    return {
        type: 'SET_FETCHING',
        value
    }
}