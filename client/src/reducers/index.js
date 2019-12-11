import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth-reducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer
});

///redux for reducer must have the form key name.