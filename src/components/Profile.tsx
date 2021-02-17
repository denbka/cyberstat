import React from 'react'
import styled, { css } from 'styled-components'
type Tprops = {
    info: any
}

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

// type Tinfo = {
//     profile: Tprofile
// }

// type Tprofile = {
//     avatarfull: string
// }

export default (props: Tprops) => {
    console.log(props.info, 'profile-component')
    return (
        <Container>
            {props.info && <img src={props.info.profile.avatarfull} alt=""/>}
        </Container>
    )
}
