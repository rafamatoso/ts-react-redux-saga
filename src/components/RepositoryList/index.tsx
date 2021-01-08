import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import RepositoryItem from '../RepositoryItem';

interface Props {
  repositories: Repository[];
}

const RepositoryList: React.FC<Props> = ({ repositories }: Props) => {
  const renderRepositoryItem = (repository: Repository) => (
    <RepositoryItem key={repository.id} repository={repository} />
  );

  return (
    <>
      <ul>
        {repositories.map((repository) => renderRepositoryItem(repository))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

export default connect(mapStateToProps)(RepositoryList);
