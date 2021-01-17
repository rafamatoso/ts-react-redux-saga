import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as ThemeActions from '../../store/ducks/theme/actions';
import './styles.scss';

export const ToggleSwitch: React.FC = () => {
  const checked = useSelector((state: ApplicationState) => state.theme.checked);

  const dispatch = useDispatch();

  const handleCheckboxChanges = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.body.setAttribute('class', 'dark');
    } else {
      document?.body.removeAttribute('class');
    }

    dispatch(ThemeActions.themeChecked());
  };

  return (
    <div className="toggle-switch-container">
      <label
        className="theme-switch"
        htmlFor="checkbox"
      >
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={(e) => handleCheckboxChanges(e)}
        />
        <div className="slider round" />
      </label>
    </div>
  );
};
