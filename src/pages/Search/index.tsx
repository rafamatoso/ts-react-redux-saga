import {
  FormEvent, useCallback, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import './styles.scss';

const Search: React.FC = () => {
  const history = useHistory();

  const repositories = useSelector((state: ApplicationState) => state.repositories);

  const dispatch = useDispatch();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    const inputElement = formRef.current?.elements.namedItem('username') as HTMLInputElement;

    const username = inputElement?.value;

    dispatch(RepositoriesActions.loadRequest(username));

    if (!repositories.error) {
      history.push('/result');
    }
  }, [dispatch, history, repositories.error]);

  const handleClearInput = useCallback((e: FormEvent) => {
    e.preventDefault();

    formRef.current?.reset();
  }, []);

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          name="username"
          className="input"
          placeholder="Nome do usuário"
        />
        <button className="clear-button" aria-label="Close" type="button" onClick={handleClearInput} />
        <button className="submit-button" aria-label="Submit" type="submit">Pesquisar</button>
      </form>
    </div>
  );
};

export default Search;
