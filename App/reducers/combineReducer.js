import tabs from './tabReducer';
import indexPage from './reducersIndex';
import {loginReducer, profileReducer} from './loginReducer';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
	login: loginReducer,
	profile: profileReducer,
	tabs,
	indexPage
};

export default function createReducer() {
	return combineReducers(applicationReducers);
}
