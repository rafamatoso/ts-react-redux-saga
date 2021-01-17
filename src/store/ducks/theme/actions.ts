/* eslint-disable implicit-arrow-linebreak */
import { Action, action } from 'typesafe-actions';
import { ThemeTypes } from './types';

export const themeChecked = (): Action => action(ThemeTypes.THEME_CHECKED);
