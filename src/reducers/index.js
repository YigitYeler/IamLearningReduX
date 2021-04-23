import counterReducer from './counter';
import arrayReducer from './array';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    array: arrayReducer
});

export default allReducer;