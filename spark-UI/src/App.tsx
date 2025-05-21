import React from 'react';
import moment from 'moment';
import Table from 'rc-table';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { GeneralTable } from './components/SharedComponents';

const App = () => {
  const data = [{ key: '1', name: 'John', age: 32 }];
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
  ];
  const { t } = useTranslation();
  return (
    <div>
      <h1>Hello from Spark UI</h1>
      <h1>{t('welcome')}</h1>
      <p>Current Time: {moment().format('LLLL')}</p>
      <Table data={data} columns={columns} />
      <GeneralTable
      tableKey='id'
      scroll={{ x: 600, y: null }}
      data={data} columns={columns}
  />
      <button onClick={() => i18n.changeLanguage('fr')}>Français</button>
    </div>
  );
};

export default App;
