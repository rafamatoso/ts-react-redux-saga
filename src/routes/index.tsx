import {
  Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import Route from './routeWrapper';
import Search from '../pages/Search';
import RepositoryList from '../components/RepositoryList';
import NotFound from '../pages/NotFound';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Search} />
      <Route path="/result" exact component={RepositoryList} isPrivate />
      <Route path="/notfound" exact component={NotFound} />
      <Route path="/" exact component={() => <Redirect to="/home" />} />
    </Switch>
  </BrowserRouter>
);
