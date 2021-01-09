import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
    repository: Repository;
}

const RepositoryItem: React.FC<OwnProps> = ({ repository }: OwnProps) => (
  <>
    <li>{repository.name}</li>
    <li>{repository.stargazers_count}</li>
  </>
);

export default RepositoryItem;
