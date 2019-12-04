import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { SEARCH_ENDPOINT } from '../../../common/constants';
import * as Actions from './actions';

import { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from './actionTypes';

import axios from 'axios';

function* getUsersByNameAPI(action: any) {
  try {
    const name = action.name;
    const urlRequest = `${SEARCH_ENDPOINT}name:${name}`;
    const users = yield call(axios.get, urlRequest);

    yield put(Actions.getUsersByNameSuccess(users));
  } catch (error) {
    yield put(Actions.getUsersByNameError(error));
  }
}

export default function* menuSagas() {
  yield takeEvery(GET_USERS, getUsersByNameAPI);
}
