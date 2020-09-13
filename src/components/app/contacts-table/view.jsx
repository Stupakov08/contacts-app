import './style.scss';
import React from 'react';
import { Table } from 'antd';
import { columns } from './columns';
import { ContactsHeader } from 'components/app/contacts-header';

const View = ({ contacts }) => {
  return (
    <Table
      columns={columns}
      dataSource={contacts}
      pagination={{ position: 'bottomRight', size: 'small' }}
      rowKey={(record) => record.cell}
      className={'table-mode'}
      title={() => <ContactsHeader />}
    />
  );
};

export { View };
