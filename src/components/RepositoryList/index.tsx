import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import RepositoryItem from '../RepositoryItem';
import { Loading } from '../Loading';

import './styles.scss';

const RepositoryList: React.FC = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories);

  const { data, loading } = repositories;

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
      {loading ? Loading() : renderRepositoryList()}
    </>
  );
};

export default RepositoryList;
