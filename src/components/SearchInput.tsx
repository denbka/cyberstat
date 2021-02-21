import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Select, Spin } from 'antd'
import { useHistory } from 'react-router-dom'
const { Option }:any = Select

type Tprops = {
    isFetching: boolean,
    list: any
    fetchUsers: (arg0: string) => void
}

export default (props:Tprops) => {
    const history = useHistory()
    const [ value, setValue ] = useState('')
    const onChange = (props: any) => {
    }
    return (
        <Select
        showSearch
        labelInValue
        value={value}
        notFoundContent={props.isFetching ? <Spin size="small" /> : null}
        filterOption={false}
        defaultActiveFirstOption={false}
        showArrow={false}
        onSearch={props.fetchUsers}
        onChange={onChange}
        style={{width: '300px'}}>
        {props.list.map((item:any, key: number) => (
          <Option key={key}>
                <Link to={`/profile/${item.account_id}`}>
                    <img style={{width: '25px'}} src={`${item.avatarfull}`} alt=""/>
                    <span>{item.personaname}</span>
                </Link>
          </Option>
        ))}
      </Select>
    )
}
