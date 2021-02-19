import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
`

const Avatar = styled.img`
    border-radius: 50%;
    width: 150px;
`

const Rank = styled.div`
    width: 150px;
    height: 150px;
    position: relative;

    img {
        width: 100%;
        position: absolute;
    }

    img:first-child {
        top: -10px;
        left: 3px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`

const Info = styled.div`
    margin-left: 25px;
    display: flex;
    flex-direction: column;
`

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }
`

const InfoItemContainer = styled.div`
    display: flex;
`

type MarkProps = {
    success?: boolean
    danger?: boolean
}

const Mark = styled.mark<MarkProps>`
    background: transparent;
    color: #a7a7a7;

    ${props => props.success && css`
        color: green;
    `}
    ${props => props.danger && css`
        color: red;
    `}
`

const MainInfo = (props:any) => {
    console.log(props)

    const getWR = () => {
        const wr = props.wl.win / (props.wl.win + props.wl.lose)
        return `${(wr * 100).toFixed(2)}%`
    }
    return (
        <Container>
            <InfoContainer>
            <Avatar src={props.profile.avatarfull} alt=""/>
                <Info>
                    <h2>{props.profile.personaname}</h2>
                    <InfoItemContainer>
                        <InfoItem>
                            <span>Победы</span>
                            <Mark success>{props.wl.win}</Mark>
                        </InfoItem>
                        <InfoItem>
                            <span>Поражения</span>
                            <Mark danger>{props.wl.lose}</Mark>
                        </InfoItem>
                        <InfoItem>
                            <span>Процент побед</span>
                            <Mark>{getWR()}</Mark>
                        </InfoItem>
                    </InfoItemContainer>
                </Info>
            </InfoContainer>
            <Rank>
                <img src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${props.rank_tier.toString()[1]}.png`} alt=""/>
                <img src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${props.rank_tier.toString()[0]}.png`} alt=""/>
            </Rank>    
        </Container>
    )
}


export default MainInfo
