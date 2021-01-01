import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';

const username = 'rafamatoso';

export function* load() {
  try {
    const response = yield call(api.get, `users/${username}/repos`);

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
