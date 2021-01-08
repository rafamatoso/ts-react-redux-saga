/* eslint-disable implicit-arrow-linebreak */
import { Action, action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = (username: string): Action =>
  action(RepositoriesTypes.LOAD_REQUEST, { username });

export const loadSuccess = (data: Repository[]): Action =>
  action(RepositoriesTypes.LOAD_SUCCESS, { data });

export const loadFailure = (): Action => action(RepositoriesTypes.LOAD_FAILURE);
