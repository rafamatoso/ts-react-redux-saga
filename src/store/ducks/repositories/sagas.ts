import { call, Effect, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';

export function* load(action: Effect) {
  try {
    const response = yield call(
      api.get,
      `users/${action.payload.username}/repos`,
    );

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
