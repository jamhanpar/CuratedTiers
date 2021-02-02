import { combineReducers } from 'redux';
import modal from './modal_reducer';

const UiReducer = combineReducers({
    modal,
});

export default UiReducer;