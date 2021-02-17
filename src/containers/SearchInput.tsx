import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SearchInputComponent from '../components/SearchInput'
import { useLocation, useParams } from 'react-router-dom'
import { fetchUsers, setIsFetching } from '../store/actions/users'

type Tprops = {
    fetchUsers: (arg0: string) => void,
    list: [],
    isFetching: boolean
}

const SearchInput = (props: Tprops) => {

    return <SearchInputComponent {...{list: props.list, isFetching: props.isFetching, fetchUsers: props.fetchUsers}}></SearchInputComponent>

}

const mapStateToProps = (state: any) => {
    return {
        list: state.users.list,
        isFetching: state.users.isFetching
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        fetchUsers: (query: string) => dispatch(fetchUsers(query)),
        setIsFetching: (val: boolean) => dispatch(setIsFetching(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)