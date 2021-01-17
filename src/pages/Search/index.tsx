import {
  ChangeEvent,
  FormEvent, useCallback, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { Loading } from '../../components/Loading';
import { ToggleSwitch } from '../../components/ToggleSwitch';

import { logo } from '../../assets/logo';
import './styles.scss';

const Search: React.FC = () => {
  const history = useHistory();
  const { loading } = useSelector((state: ApplicationState) => state.repositories);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setUsername(value);
  };

  const handleClearInput = useCallback((e: FormEvent) => {
    e.preventDefault();
    setUsername('');
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    dispatch(RepositoriesActions.loadRequest(username, history));
  }, [dispatch, history, username]);

  const renderSearch = () => (
    <>
      <div id="switch-container">
        <ToggleSwitch />
      </div>
      <div id="logo-container">
        <img src={logo.github} alt="Logo" />
      </div>
      <div id="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Nome do usuário"
            value={username}
            onChange={(e) => handleInputChanges(e)}
          />
          <button
            className="clear-button"
            aria-label="Close"
            type="button"
            onClick={(e) => handleClearInput(e)}
          />
          <button
            className="submit-button"
            aria-label="Submit"
            type="submit"
            disabled={!username}
          >
            Pesquisar
          </button>
        </form>
      </div>
    </>
  );

  return (
    <>
      {loading ? Loading() : renderSearch()}
    </>
  );
};

export default Search;
