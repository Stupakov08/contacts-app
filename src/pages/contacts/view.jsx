import React, { useEffect } from 'react';
import { ContactsPageHeader } from 'components';
import { ContactsPageBody } from 'components';

const View = ({ getContacts, routeName }) => {
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <>
      <ContactsPageHeader routeName={routeName}></ContactsPageHeader>
      <ContactsPageBody></ContactsPageBody>
    </>
  );
};

export { View };
