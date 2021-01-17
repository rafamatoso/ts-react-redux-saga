/**
 * Action types
 */
export enum ThemeTypes {
  THEME_CHECKED = '@repositories/CHECKED',
}

export interface ThemeState {
  readonly checked: boolean;
}
