import {
  Switch, BrowserRouter, Redirect, Route,
} from 'react-router-dom';

import Search from '../pages/Search';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/search" exact component={Search} />
      <Route path="/" exact component={() => <Redirect to="/search" />} />
    </Switch>
  </BrowserRouter>
);
