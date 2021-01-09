import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import RepositoryItem from '../RepositoryItem';

interface Props {
  repositories: Repository[];
}

const RepositoryList: React.FC<Props> = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories);

  const { data } = repositories;

  const renderRepositoryItem = (repository: Repository) => (
    <RepositoryItem key={repository.id} repository={repository} />
  );

  return (
    <>
      <ul>
        {data.map((repository) => renderRepositoryItem(repository))}
      </ul>
    </>
  );
};

export default RepositoryList;
