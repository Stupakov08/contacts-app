import { contactsUrl, provide } from 'utils/index';

export const contactsProvider = {
  get: (searchString) => {
    const url = contactsUrl({});
    return provide(url);
  },
};
