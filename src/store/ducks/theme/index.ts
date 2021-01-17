import { Reducer } from 'redux';
import { ThemeState, ThemeTypes } from './types';

const INITIAL_STATE: ThemeState = {
  checked: false,
};

const reducer: Reducer<ThemeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeTypes.THEME_CHECKED:
      return {
        ...state,
        checked: !state.checked,
      };

    default:
      return state;
  }
};

export default reducer;
