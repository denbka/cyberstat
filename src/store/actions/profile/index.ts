export const fetchProfileInfo = (profile_id: string) => {
    return {
        type: 'FETCHED_PROFILE_INFO',
        profile_id
    }
}

export const fetchedSuccess = (data: any) => {
    return {
        type: 'SET_PROFILE_INFO',
        data
    }
}

export const setLoading = (data: boolean) => {
    return {
        type: 'SET_LOADING',
        data
    }
}