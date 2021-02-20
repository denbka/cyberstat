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

type Tmatch = {
    assists: number
    cluster: number
    deaths: number
    duration: number
    game_mode: number
    gold_per_min: number
    hero: Thero
    hero_damage: number
    hero_healing: number
    hero_id: number
    is_roaming: number
    kills: number
    lane: number
    lane_role: number
    last_hits: number
    leaver_status: number
    lobby_type: number
    match_id: number
    party_size: number
    player_slot: number
    radiant_win: boolean
    skill: number
    start_time: number
    tower_damage: number
    team: Tteam
    isWin: string
    version: number
    xp_per_min: number
}

type Tteam = {
    name: string
    id: number
}

type Thero = {
    name: string
    id: number
    localized_name: string
}

type Titem = {
    match_id: number
}

const getSkill = (skill: number) => {
    switch (skill) {
        case 1: return 'Обычный уровень'
        case 2: return 'Высокий уровень'
        case 3: return 'Очень высокий уровень'
        default: return 'Неизвестный уровень'
    }
}

const columns = [
    {
        title: 'Герой',
        dataIndex: 'hero',
        key: 'hero',
        render: (props: undefined, match:Tmatch) => (
            <>
                <img src={`https://steamcdn-a.akamaihd.net/apps/dota2/images/heroes/${match.hero.name}_sb.png`} />
                <span> {match.hero.localized_name} </span>
                <Moment unix fromNow>{match.start_time}</Moment>
            </>
        )
    },
    {
        title: 'Результат',
        dataIndex: 'result',
        key: 'result',
        render: (props: undefined, match:Tmatch) => (
            <>
                <span>{match.isWin}</span>
            </>
        )
    },
    {
        title: 'Режим игры',
        dataIndex: 'mode',
        key: 'mode',
        render: (props: undefined, match:Tmatch) => {
            console.log(match, '3')
            return (
                <>
                    <span>{getSkill(match.skill)}</span>
                </>
            )
        }
    },
    {
        title: 'Длительность',
        dataIndex: 'duration',
        key: 'duration',
        render: (props: undefined, match:Tmatch) => (
            <>
                <Moment unix format="mm:ss">{match.duration}</Moment>
                <div>{match.team.name}</div>
            </>
        )
    },
    {
        title: 'КДА',
        dataIndex: 'kda',
        key: 'kda',
        render: (props: undefined, match:Tmatch) => (
            <>
                <span>{match.kills} </span>
                <span>{match.deaths} </span>
                <span>{match.assists} </span>
            </>
        )
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
