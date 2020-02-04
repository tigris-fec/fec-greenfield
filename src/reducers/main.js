import { combineReducers } from 'redux';
import dummyreducer from './dummyreducer';
//import the other reducers into this file

var rootReducer = combineReducers({
    dummystate:dummyreducer,//this will link your store with the reducer that will change the value of it
})


export default rootReducer;