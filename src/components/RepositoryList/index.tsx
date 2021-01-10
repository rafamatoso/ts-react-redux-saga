import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { ApplicationState } from '../../store';
import RepositoryItem from '../RepositoryItem';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import './styles.scss';

const RepositoryList: React.FC = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories);

  const dispatch = useDispatch();

  const { data, loading } = repositories;

  const renderLoading = () => (
    <div id="loading-container">
      <ReactLoading type="spin" color="#000000" height={50} width={50} />
    </div>
  );

  useEffect(() => {
    dispatch(RepositoriesActions.clearState());
  }, [dispatch]);

  const renderRepositoryList = () => (
    <ul id="list-container">
      {data
        .sort((previous, current) => current.stargazers_count - previous.stargazers_count)
        .map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
    </ul>
  );

  return (
    <>
      {loading ? renderLoading() : renderRepositoryList()}
    </>
  );
};

export default RepositoryList;
