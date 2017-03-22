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
      body: JSON.stringify({
        category: store.getState().category,
        length: store.getState().populatedActivities.length
      })
    }).then(response => response.json())
      .then(json =>
        dispatch(populateActivities(json)))
}

export function updateNotifications(notification) {
  return {
    type: types.UPDATE_NOTIFICATIONS,
    notification: notification
  }
}
export function sendFriendRequest(friendToAdd){
  return dispatch =>
    fetch('http://localhost8080/sendFriendRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fromUserID: store.getState().currentUser,
        toUserID: friendToAdd
      })
    }).then(response => response.json())
      .then(json =>
        dispatch(updateNotifications(json)))
}

export function acceptFriendRequest(accepted, notification) {
  return dispatch =>
    fetch('http://localhost8080/acceptFriendRequest', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        accepted: accepted,
        toUserID: notification.toUserID,
        fromUserID: notification.fromUserID
      }).then(response => response.json())
        .then(json =>
          dispatch(updateNotifications(json)))
    })
}

export function populateNotifications(notifications){
  return {
    type: types.GET_NOTIFICATIONS,
    notifications: notifications
  }
}

export function getNotifications(){
  return dispatch =>
    fetch('http://localhost8080/getNotifications', {
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      userID: store.getState().currentUser
    }).then(response => response.json())
      .then(json =>
        dispatch(populateNotifications(json)))
  })
}

export function getCurrentUser(){

}

export function getActivityOwner(){

}
