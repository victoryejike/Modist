import {combineReducers} from 'redux';
import shopReducer from './shopReducer';
import testimonyReducer from './testimonyReducer';
import OurProductReducer from './ourProductReducer';

export default combineReducers({
    Shop: shopReducer,
    Testimony: testimonyReducer,
    allProducts: OurProductReducer
});