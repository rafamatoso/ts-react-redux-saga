import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ApplicationState } from '../store';

type Props = {
    component: React.FC;
    path: string;
    exact: boolean;
    isPrivate?: boolean;
}

const RouteWrapper: React.FC<Props> = ({ component: Component, isPrivate, ...rest }: Props) => {
  const showResult = useSelector((state: ApplicationState) => state.repositories.showResult);

  if (isPrivate) {
    if (showResult) {
      return <Route {...rest} component={Component} />;
    }
  } else {
    return <Route {...rest} component={Component} />;
  }
  return <Redirect to="/home" />;
};

export default RouteWrapper;
