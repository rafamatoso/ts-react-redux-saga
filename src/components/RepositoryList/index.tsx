import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from '../RepositoryItem';

interface State {
  username: string;
}

interface Props {
  loadRequest(username: string): void;
  repositories: Repository[];
}

class RepositoryList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      username: 'rafamatoso',
    };
  }

  componentDidMount() {
    const { username } = this.state;
    const { loadRequest } = this.props;

    loadRequest(username);
  }

  render(): JSX.Element {
    const { repositories } = this.props;

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
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
