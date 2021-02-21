export const fetchEntity = (data:any) => ({
    type: 'FETCHING',
    data
})

export const fetchSuccess = (data: any) => ({
    type: 'FETCH_SUCCESS',
    data
})

export const fetchError = (error: any) => ({
    type: 'FETCH_ERROR',
    error
})