import {combineReducers} from 'redux';
import postReducer from './postReducers';
import userReducer from './userReducers';

export default combineReducers({
    posts:postReducer,
    user: userReducer
});