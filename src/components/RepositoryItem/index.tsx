/* eslint-disable camelcase */
import { memo } from 'react';
import { icon } from '../../assets/icons';
import { Repository } from '../../store/ducks/repositories/types';

import './styles.scss';

interface OwnProps {
    repository: Repository;
}

const RepositoryItem: React.FC<OwnProps> = ({ repository }: OwnProps) => {
  const { name, stargazers_count, html_url } = repository;

  const goToRepository = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div
        id="item-container"
        onClick={() => goToRepository(html_url)}
        onKeyDown={() => goToRepository(html_url)}
        role="button"
        tabIndex={0}
      >
        <li>{name}</li>
        <div id="star-container">
          <img
            className="star-icon"
            src={icon.star}
            alt="Star"
          />
          <li className="star-count">{stargazers_count > 0 ? stargazers_count : ''}</li>
        </div>
      </div>
    </>
  );
};

export default memo(RepositoryItem);
