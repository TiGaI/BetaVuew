import tabs from './tabs';
import indexPage from './reducersIndex';
import { combineReducers } from 'redux-immutable';

const applicationReducers = {
	tabs,
	indexPage
};
export default function createReducer() {
	return combineReducers(applicationReducers);
}
