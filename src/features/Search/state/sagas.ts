import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { SEARCH_ENDPOINT } from '../../../common/constants';
import { parseUser } from './utils';
import { isNumber } from 'util';
import * as Actions from './actions';

import { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from './actionTypes';

import axios from 'axios';

function* getUsersByNameAPI(action: any) {
  try {
    const { name, offset, limit } = action;
    let query = {};
    let params = '';
    if (name) {
      query = { name: { term: name } };
    }
    if (offset) {
      params += `&offset=${offset}`;
    }
    if (limit) {
      params += `&size=${limit}`;
    }
    const urlRequest = `${SEARCH_ENDPOINT}?${params}`;
    const response = yield call(axios.post, urlRequest, query);
    const users: User[] = parseUser(response.data.results);
    yield put(Actions.getUsersByNameSuccess(users, isNumber(offset)));
  } catch (error) {
    yield put(Actions.getUsersByNameError(error));
  }
}

export default function* menuSagas() {
  yield takeEvery(GET_USERS, getUsersByNameAPI);
}
