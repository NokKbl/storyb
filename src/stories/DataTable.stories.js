import React from 'react';
import { storiesOf } from '@storybook/react';

import DataTable from '../DataTable';

import 'antd/dist/antd.css';

const data = [
    {
        key: 'd281',
        firstName: 'John',
        lastName: 'Sevan',
        gender: 'Male'
    },
    {
        key: 'd294',
        firstName: 'Lena',
        lastName: 'Gin',
        gender: 'Female'
    }
]

storiesOf('DataTable', module)
    .add('with data', () => <DataTable data={data} />)
    .add('with no data', () => <DataTable />)
    .add('loading with data', () => <DataTable loading={'ffff'} data={data} />)
    .add('loading with no data', () => <DataTable loading={true} />)
