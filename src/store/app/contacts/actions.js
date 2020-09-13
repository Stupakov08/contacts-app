import { createAction } from '../../utils';
import { OActionTypes } from '../actions';

export const prefix = `${OActionTypes.prefix}/contacts`;

export const types = {
  GET_CONTACTS_START: `${prefix}/GET_CONTACTS_START`,
  GET_CONTACTS_SUCCESS: `${prefix}/GET_CONTACTS_SUCCESS`,
  GET_CONTACTS_FAILURE: `${prefix}/GET_CONTACTS_FAILURE`,
  TABULAR_MODE: `${prefix}/TABULAR_MODE`,
  TILED_MODE: `${prefix}/TILED_MODE`,
  FILTER_CONTACTS: `${prefix}/FILTER`,
};

export const getContactsStart = createAction(types.GET_CONTACTS_START);
export const getContactsSuccess = createAction(types.GET_CONTACTS_SUCCESS);
export const getContactsFailure = createAction(types.GET_CONTACTS_FAILURE);
export const switchToTabularMode = createAction(types.TABULAR_MODE);
export const switchToTiledMode = createAction(types.TILED_MODE);
export const filterContacts = createAction(types.FILTER_CONTACTS);
