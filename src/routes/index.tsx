import {
  Switch, BrowserRouter, Redirect, Route,
} from 'react-router-dom';
import RepositoryList from '../components/RepositoryList';

import Search from '../pages/Search';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/result" exact component={RepositoryList} />
      <Route path="/" exact component={() => <Redirect to="/search" />} />
    </Switch>
  </BrowserRouter>
);
