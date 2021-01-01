import { all, takeLatest } from 'redux-saga/effects';
import { load } from './repositories/sagas';
import { RepositoriesTypes } from './repositories/types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  return yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
}
