import {
  FormEvent, useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import './styles.scss';

const Search: React.FC = () => {
  const history = useHistory();

  const repositories = useSelector((state: ApplicationState) => state.repositories.data);

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    const username = inputRef.current?.value || '';

    dispatch(RepositoriesActions.loadRequest(username));
  }, []);

  useEffect(() => {
    if (repositories.length > 0) {
      history.push('/result');
    }
  }, [history, repositories.length]);

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="input"
          placeholder="Nome do usuário"
          ref={inputRef}
        />
        <button className="button" type="submit">Pesquisar</button>
      </form>
    </div>
  );
};

export default Search;
