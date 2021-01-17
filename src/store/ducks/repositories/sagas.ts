import { call, Effect, put } from 'redux-saga/effects';
import { loadFailure, loadSuccess } from './actions';
import { Repository } from './types';
import api from '../../../services/api';

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
  const { username, history } = action.payload;

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
    history.push('/result');
  } catch (error) {
    yield put(loadFailure());
    history.push('/notfound');
  }
}
