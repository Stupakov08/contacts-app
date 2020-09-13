import React from 'react';
import { ContactsTable } from 'components/app/contacts-table';

const View = ({ tabularMode }) => {
  return <div>{!tabularMode ? null : <ContactsTable />}</div>;
};

export { View };
