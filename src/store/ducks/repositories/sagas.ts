/* eslint-disable camelcase */
import { call, Effect, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';
import { Repository } from './types';

interface DataResponse {
  public_repos: number;
}

interface UserResponse {
  data: DataResponse;
}

interface ReposResponse {
  data: Repository[];
}

export function* load(action: Effect) {
  const { username, meta } = action.payload;

  try {
    const userResponse: UserResponse = yield call(api.get, `users/${username}`);

    const { public_repos } = userResponse.data;

    const response: ReposResponse = yield call(
      api.get,
      `users/${username}/repos`,
      {
        params: {
          per_page: public_repos,
        },
      },
    );

    yield put(loadSuccess(response.data));
    meta('/result');
  } catch (error) {
    yield put(loadFailure());
    meta('/notfound');
  }
}
