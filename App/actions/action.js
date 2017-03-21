import * as types from './actionTypes';


// export function login(navProps, res) {
//   console.log(res);
//   return {
//     type: types.LOGIN,
//     nav:navProps,
//     data: res
//   };
// }
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

export function populateActivities(activities) {
  if(activities) {
    return {
      type: SCROLL_ACTIVITIES_SUCCESS,
      newActivities: activities
    }
  } else {
    return {
      type: SCROLL_ACTIVITIES_FAILURE,
      newActivities: activities
    }
  }

}

export function fetchData(){
  return dispatch =>
    fetch('http://localhost8080/populateActivities', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(json =>
        dispatch(populateActivities(json))
}
