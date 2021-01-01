import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

interface StateProps {
  repositories: Repository[];
}

type Props = StateProps

class RepositoryList extends Component<Props> {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  componentDidMount(): void { }

  render(): JSX.Element {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map((repository) => repository.name)}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  bindActionCreators(RepositoriesActions, dispatch);
};

export default connect(mapStateToProps)(RepositoryList);
