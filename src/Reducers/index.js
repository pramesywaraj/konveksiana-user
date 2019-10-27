import { combineReducers } from 'redux';
import { authentication } from './authReducer';
import { orderPage } from './orderReducer'

const rootReducer = combineReducers({ 
    authentication,
    orderPage
});

export default rootReducer;