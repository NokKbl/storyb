import React from 'react';

import { Table } from 'antd';

const { Column } = Table;

interface Column {
    title: string,
    dataIndex: string,
    key: string,
}

interface Worker {
    key: string,
    firstName: string,
    lastName: string,
    gender: string,
}

interface Params {
    data: Worker[],
    loading: boolean,
}

const column: Column[] = [
    {
        title: 'ID',
        dataIndex: 'key',
        key: 'id'
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName'
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName'
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender'
    },
]

const DataTable: React.FC<Params> = (prop) => {
    
    return (
        <div className="DataTable" style={{ padding: '0 50px', margin: 20 }}>
            <Table loading={prop.loading} dataSource={prop.data} columns={column} />
        </div>
    )
}

export default DataTable;