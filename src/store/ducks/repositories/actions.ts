import { Action, action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = (): Action => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]): Action =>
  // eslint-disable-next-line implicit-arrow-linebreak
  action(RepositoriesTypes.LOAD_SUCCESS, data);

export const loadFailure = (): Action => action(RepositoriesTypes.LOAD_FAILURE);
