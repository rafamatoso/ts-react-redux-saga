/* eslint-disable camelcase */
/**
 * Action types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
  CLEAR_STATE = '@repositories/CLEAR_STATE',
}

/**
 * Data types
 */
export interface Repository {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
}

/**
 * State type
 */
export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly path?: string;
}
