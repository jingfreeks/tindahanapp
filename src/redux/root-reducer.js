import {combineReducers} from 'redux';

import userReducers from './user/reducer';
import cartReducer from './cart/reducer';
export default combineReducers({
    user:userReducers,
    cart:cartReducer,
});