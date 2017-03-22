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
        category: indexPage.category,
        length: indexPage.populatedActivities.length
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
        fromUserID: indexPage.currentUser,
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
      body: JSON.stringify({
        userID: indexPage.currentUser
      })
    }).then(response => response.json())
      .then(json =>
        dispatch(populateNotifications(json))
      )
  }


export function populateCurrentUser(user){
  return {
    type: types.GET_CURRENT_USER,
    currentUser: user
  }
}

export function getCurrentUser(){
  return dispatch =>
    fetch('http://localhost8080/getCurrentUser', {
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userID: profile.id
        })
    }).then(response => response.json())
      .then(json =>
        dispatch(populatecurrentUser(json))
      )
}

export function populateActivityOwner(activityOwner){
  return {
    type: types.GET_ACTIVITY_OWNER,
    selectedActivityOwner: activityOwner
  }
}

export function getActivityOwner(){
  return dispatch =>
    fetch('http://localhost8080/getActivityOwner', {
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        activityOwner: indexPage.selectedActivity.activityCreator
      })
    }).then(response => response.json())
      .then(json =>
        dispatch(populateActivityOwner(json)))
}
