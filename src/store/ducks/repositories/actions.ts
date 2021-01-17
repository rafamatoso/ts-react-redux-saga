import { Action, action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = (username: string, history: unknown): Action =>
  action(RepositoriesTypes.LOAD_REQUEST, { username, history });

export const loadSuccess = (data: Repository[]): Action =>
  action(RepositoriesTypes.LOAD_SUCCESS, { data });

export const loadFailure = (): Action => action(RepositoriesTypes.LOAD_FAILURE);
