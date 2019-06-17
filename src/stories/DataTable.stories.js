import React from 'react';
import { storiesOf } from '@storybook/react';

import DataTable from '../DataTable';

import 'antd/dist/antd.css';

const data = [
    {
        key: 'd281',
        firstName: 'Name',
        lastName: 'Surname',
        gender: 'Girl'
    },
    {
        key: 'd294',
        firstName: 'G',
        lastName: 'TK',
        gender: 'Female'
    }
]

storiesOf('DataTable', module)
    .add('with data', () => <DataTable data={data} />)
    .add('with no data', () => <DataTable />)
    .add('loading with data', () => <DataTable loading={true} data={data} />)
    .add('loading with no data', () => <DataTable loading={true} />)
