import { ChangeEvent, useState } from 'react';
import './styles.scss';

export const ToggleSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChanges = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.body.setAttribute('class', 'dark');
    } else {
      document?.body.removeAttribute('class');
    }

    setChecked(e.target.checked);
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
