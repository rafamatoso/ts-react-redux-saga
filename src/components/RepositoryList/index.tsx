import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { ApplicationState } from '../../store';
import RepositoryItem from '../RepositoryItem';

const RepositoryList: React.FC = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories);

  const { data, loading } = repositories;

  const renderLoading = () => (
    <ReactLoading type="spin" color="#000000" height={50} width={50} />
  );

  const renderRepositoryList = () => (
    <ul>
      {data.map((repository) => (
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
