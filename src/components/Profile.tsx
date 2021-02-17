import React from 'react'
import styled, { css } from 'styled-components'
import { List } from 'antd'
import MainInfo from './MainInfo'

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
export default (props: any) => {
    return (
        <Container>
            <MainInfo {...props}></MainInfo>
            <List
            itemLayout="horizontal"
            dataSource={props.recentMatches}
            renderItem={(item:any) => (
                <List.Item>
                    <List.Item.Meta
                    title={<a href="https://ant.design">{item.match_id}</a>}>
                    </List.Item.Meta>
                </List.Item>
            )}>
            </List>
        </Container>
    )
}
