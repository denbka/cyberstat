const initialStore:any = {
    
}

export default (store = initialStore, action: {type: string}) => {
    switch(action.type) {
        case 'FETCH_SUCCESS': {
            return store
        }

        default:
            return store
    }
}