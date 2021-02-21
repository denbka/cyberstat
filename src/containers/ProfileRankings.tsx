import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ProfileComponent from '../components/Profile'
import { fetchProfileInfo } from '../store/actions/profile'
import { useLocation, useParams } from 'react-router-dom'

type Tparams = {
    profile_id: string
}

type Tprops = {
    getProfileInfo: (arg0: string) => void,
    profile: any,
    loading: boolean
}

// type Tinfo = {
//     profile: Tprofile
// }

// type Tprofile = {
//     avatarfull: string
// }

const Profile = (props: Tprops) => {
    let params:Tparams = useParams()
    console.log(props.profile.profile)
    useEffect(():any => {
        props.getProfileInfo(params.profile_id)
    }, [])
    if (!props.profile.loading) {
        return <ProfileComponent info={props.profile.info}></ProfileComponent>
    } else return <div>Загрузка</div>

}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        profile: state.profile,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getProfileInfo: (profile_id: string) => dispatch(fetchProfileInfo(profile_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)