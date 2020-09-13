import { createReducer } from '../../utils';
import { types } from './actions';

export const initialState = {
  results: null,
  loading: false,
  info: null,
  tabularMode: true,
  errorMessage: undefined,
};

export const reducer = createReducer(initialState, {
  [types.GET_CONTACTS_START](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.GET_CONTACTS_SUCCESS](state, { payload }) {
    return {
      ...state,
      loading: initialState.loading,
      errorMessage: initialState.errorMessage,
      results: payload.results,
      info: payload.info,
    };
  },
  [types.GET_CONTACTS_FAILURE](state, { payload }) {
    return {
      ...state,
      loading: initialState.loading,
      results: initialState.results,
      info: initialState.info,
      errorMessage: payload,
    };
  },
  [types.TABULAR_MODE](state) {
    return {
      ...state,
      tabularMode: true,
    };
  },
  [types.TILED_MODE](state) {
    return {
      ...state,
      tabularMode: false,
    };
  },
});
