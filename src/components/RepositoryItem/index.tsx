import { memo } from 'react';
import { Repository } from '../../store/ducks/repositories/types';

import './styles.scss';

interface OwnProps {
    repository: Repository;
}

const RepositoryItem: React.FC<OwnProps> = ({ repository }: OwnProps) => (
  <>
    <div id="item-container">
      <li>{repository.name}</li>
      <li>{repository.stargazers_count}</li>
    </div>
  </>
);

export default memo(RepositoryItem);
