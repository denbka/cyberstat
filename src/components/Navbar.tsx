import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Select, Spin } from 'antd'
import SearchInput from '../containers/SearchInput'
const menu = [
    {
        id: 1,
        title: 'Главная',
        path: '/profile/156196043'
    },
    {
        id: 2,
        title: 'Ранги героев',
        path: '/profile/156196043/rankings'
    }
]
export default () => {
    return (
        <div>
            {menu.map(item => <Link key={item.id} to={item.path}>
                {item.title}
            </Link>)}
            <SearchInput />
        </div>
    )
}
