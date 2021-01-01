import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';

const username = 'rafamatoso';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* load() {
  try {
    const response = yield call(api.get, `users/${username}/repos`);

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
