import { createSelector } from 'reselect';

const _getContactsState = (state) => {
  return state.app.contacts;
};

export const isLoading = createSelector(
  [_getContactsState],
  (contacts) => contacts.loading
);

export const isTabularMode = createSelector(
  [_getContactsState],
  (contacts) => contacts.tabularMode
);

export const contactsResults = createSelector(
  [_getContactsState],
  (contacts) => contacts.results
);

export const selectors = {
  isLoading,
  isTabularMode,
  contactsResults,
};
