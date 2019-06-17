import React from 'react';

import { storiesOf } from '@storybook/react';
import fetchMock from 'fetch-mock';
import LanguagesList from '../LanguagesList';

import 'antd/dist/antd.css';

const payload = {
  "JavaScript": 3006415,
  "HTML": 56296,
  "C++": 44278,
  "TypeScript": 20252,
  "CoffeeScript": 16077,
}

storiesOf('Languages List', module)
  // .add('default data', () => <LanguagesList />)
  .add('with mock data', () => {
    fetchMock.restore().getOnce(
      'https://api.github.com/repos/facebook/react/languages',
      payload,
    )
    return <LanguagesList />;
  })
  .add('with network delay', () => {
    fetchMock
      .restore()
      .getOnce(
        'https://api.github.com/repos/facebook/react/languages',
        new Promise(resolve => setTimeout(resolve, 200)).then(
          () => payload,
        ),
      );
    return <LanguagesList />;
  })