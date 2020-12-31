import { Action, action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = (): Action => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]): void => {
  action(RepositoriesTypes.LOAD_SUCCESS, data);
};

export const loadFailure = (): Action => action(RepositoriesTypes.LOAD_FAILURE);
