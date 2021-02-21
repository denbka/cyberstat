import React from 'react'
import { Table } from 'antd'


export const TableComponent = ({ columns, data }:any) => {
    return (
        <Table
        columns={columns}
        dataSource={data}>
        </Table>
    )
}

export default TableComponent
