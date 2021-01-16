import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import RepositoryItem from '../RepositoryItem';
import { Loading } from '../Loading';

import './styles.scss';

const RepositoryList: React.FC = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories);

  const { data, loading } = repositories;

  const { owner } = data[0];

  const renderRepositoryList = () => (
    <>
      <div id="owner-container">
        <div id="img-container">
          <img src={owner.avatar_url} alt="Avatar" />
        </div>
        <h1>{owner.login}</h1>
      </div>
      <ul id="list-container">
        {data
          .sort((previous, current) => current.stargazers_count - previous.stargazers_count)
          .map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
      </ul>
    </>
  );

  return (
    <>
      {loading ? Loading() : renderRepositoryList()}
    </>
  );
};

export default RepositoryList;
