import {
  FormEvent, useCallback, useEffect, useRef,
} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { Repository } from '../../store/ducks/repositories/types';
import './styles.scss';

interface Props {
    loadRequest(username: string): void;
    repositories: Repository[];
}

const Search: React.FC<Props> = ({ loadRequest, repositories }: Props) => {
  const history = useHistory();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    const username = inputRef.current?.value || '';

    loadRequest(username);
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

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
