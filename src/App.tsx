import { Provider } from 'react-redux';
import RepositoryList from './components/RepositoryList';
import store from './store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
