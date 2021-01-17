import { combineReducers } from 'redux';

import theme from './theme';
import repositories from './repositories';

export default combineReducers({ theme, repositories });
