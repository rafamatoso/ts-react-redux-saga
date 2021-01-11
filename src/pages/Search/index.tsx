import {
  ChangeEvent,
  FormEvent, useCallback, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { Loading } from '../../components/Loading';

import './styles.scss';

const Search: React.FC = () => {
  const history = useHistory();

  const [disabled, setDisabled] = useState(true);

  const { loading } = useSelector((state: ApplicationState) => state.repositories);

  const dispatch = useDispatch();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    const inputElement = formRef.current?.elements.namedItem('username') as HTMLInputElement;

    const username = inputElement?.value;

    dispatch(RepositoriesActions.loadRequest(username, history.push));
  }, [dispatch, history.push]);

  const handleInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    return value ? setDisabled(false) : setDisabled(true);
  };

  const handleClearInput = useCallback((e: FormEvent) => {
    e.preventDefault();

    formRef.current?.reset();
  }, []);

  const renderSearch = () => (
    <div id="search-container">
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          name="username"
          className="input"
          placeholder="Nome do usuário"
          onChange={(e) => handleInputChanges(e)}
        />
        <button
          className="clear-button"
          aria-label="Close"
          type="button"
          onClick={handleClearInput}
        />
        <button
          className="submit-button"
          aria-label="Submit"
          type="submit"
          disabled={disabled}
        >
          Pesquisar
        </button>
      </form>
    </div>
  );

  return (
    <>
      {loading ? Loading() : renderSearch()}
    </>
  );
};

export default Search;
