import { takeLatest, call, all, put } from 'redux-saga/effects';
import { getContactsSuccess, getContactsFailure, types } from './actions';
import { contactsProvider } from 'services/index';

function* fetchContactsAsync() {
  try {
    const contacts = yield contactsProvider.get();
    yield put(getContactsSuccess(contacts));
  } catch (error) {
    yield put(getContactsFailure(error));
  }
}
function* getContactsStart() {
  yield takeLatest(types.GET_CONTACTS_START, fetchContactsAsync);
}

export function* sagas() {
  yield all([call(getContactsStart)]);
}
