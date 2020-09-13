import { API_URL, API_VERSION, API_CONTACTS_SEED_KEY } from 'constants/env';

export const contactsUrl = ({ options }) => {
  options = {
    results: 126,
    seed: API_CONTACTS_SEED_KEY,
    ...options,
  };

  const query = Object.keys(options)
    .map((k) => `${k}=${options[k]}`)
    .join('&');

  return `${API_URL}/api/${API_VERSION}/?${query}`;
};

export const parseStatus = async (res) => {
  const status = res.status;
  res = await res.json();

  return new Promise((resolve, reject) => {
    status >= 200 && status < 300 ? resolve(res) : reject({ status, res });
  });
};

export const provide = (url, options) => {
  return fetch(url, {
    method: 'GET',
    ...options,
  }).then(parseStatus);
};
