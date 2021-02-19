import React from 'react'
import styled, { css } from 'styled-components'
import { List, Table } from 'antd'
import MainInfo from './MainInfo'
import Moment from 'react-moment'
const Container = styled.div`
`

// type Tinfo = {
//     profile: Tprofile
// }

// type Tprofile = {
//     avatarfull: string
// }

type Titem = {
    match_id: number
}

const columns = [
    {
        title: 'Герой',
        dataIndex: 'hero',
        key: 'hero',
        render: (props:any, match:any) => (
            <>
                <img src={`https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/${match.hero.name}_sb.png`} />
                <span>{match.hero.localized_name} </span>
                <Moment unix fromNow>{match.start_time}</Moment>
            </>
        )
    },
    {
        title: 'Результат',
        dataIndex: 'result',
        key: 'result'
    },
    {
        title: 'Режим игры',
        dataIndex: 'mode',
        key: 'mode'
    },
    {
        title: 'Длительность',
        dataIndex: 'duration',
        key: 'duration'
    },
    {
        title: 'КДА',
        dataIndex: 'kda',
        key: 'kda'
    },
]
export default (props: any) => {
    return (
        <Container>
            <MainInfo {...props}></MainInfo>
            <Table
            columns={columns}
            dataSource={props.recentMatches}>
            </Table>
        </Container>
    )
}
