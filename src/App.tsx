import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import RepositoryList from './components/RepositoryList';
import store from './store';

const App = (): ReactElement => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
