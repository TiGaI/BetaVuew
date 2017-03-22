import * as types from './actionTypes';

export function changeCategory(currCategory){
  return {
    type: types.CHANGE_CATEGORY,
    currentCategory: currCategory
  }
}

export function selectActivity(activity) {
  return {
    type: types.SELECT_ACTIVITY,
    selectedActivity: activity

  }
}

export function fetchData(){
  return {
    types: types.SCROLL_ACTIVITIES,

  }
}
