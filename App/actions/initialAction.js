export function populatedActivities(category, populatedActivities) {
    return dispatch => {
        dispatch(fetching());
        console.log('category in initialAction: ', category);
        console.log('populateActivities in initialAction: ', populatedActivities);

        fetch('http://localhost:8080/populateActivities', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                category: category,
                length: populatedActivities
              })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                var userObject = [...responseJson];
                console.log("this is userObject inside of initialAction: ", userObject)
                dispatch(getActivities(userObject));
                dispatch(doneFetching())
            })
            .catch((err) => {
              console.log('error: ', err)
            });
    };
}

function fetching(){
  return {
    type: "FETCHING_DATA"
  }
}
function doneFetching() {
  return {
    type: "DONE_FETCHING"
  }
}
export function getActivities(populatedActivities) {
    return {
        type: 'POPULATED_ACTIVITIES',
        populatedActivities
    };
}

export function getUserNotifications(currentUserID) {
    return dispatch => {
        dispatch(fetching());
        console.log('currentUserID in getNotifications in initialAction: ', currentUserID);

        fetch('http://localhost:8080/getNotification', {
              method: 'POST',
              header: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                userID: currentUserID
              })
          }).then((response) => response.json())
            .then((responseJson) => {

                var userObject = Object.assign({}, responseJson);

                dispatch(getNotifications(userObject));
                dispatch(doneFetching())
            })
            .catch((err) => {
              console.log('error: ', err)
            });
    };
}

export function getNotifications(notifications) {
    return {
        type: 'GET_NOTIFICATIONS',
        notifications
    };
}

export function sendFriendRequest(currentUserID, friendToAddID){

  return dispatch => {
      dispatch(fetching());
      console.log('currentUserID in sendFriendRequest in initialAction: ', currentUserID);
      console.log('friendToAddID in sendFriendRequest in initialAction: ', friendToAddID);

      fetch('http://localhost8080/sendFriendRequest', {
            method: 'POST',
            header: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              toUserID: friendToAddID,
              fromUserID: currentUserID
            })
        }).then((response) => response.json())
          .then((responseJson) => {
            console.log('you send a friend request!')
          })
          .catch((err) => {
            console.log('error: ', err)
          });
  };
}


export function acceptFriendRequest(currentUserID, friendToAddID, accepted) {

  return dispatch => {
      dispatch(fetching());
      console.log('currentUserID in acceptFriendRequest in initialAction: ', currentUserID);
      console.log('friendToAddID in acceptFriendRequest in initialAction: ', friendToAddID);

      fetch('http://localhost:8080/acceptFriendRequest', {
            method: 'POST',
            header: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              accepted: accepted,
              toUserID: friendToAddID,
              fromUserID: currentUserID
            })
        }).then((response) => response.json())
          .then((responseJson) => {
            dispatch(doneFetching())
            console.log('you accepted a friend')
          })
          .catch((err) => {
            console.log('error: ', err)
          });
  };
}


// export function changeCategory(currCategory){
//   return {
//     type: types.CHANGE_CATEGORY,
//     currentCategory: currCategory
//   }
// }
//
// export function selectActivity(activity) {
//   return {
//     type: types.SELECT_ACTIVITY,
//     selectedActivity: activity
//
//   }
// }
//
// function populateActivities(activities) {
//   if(activities) {
//     return {
//       type: SCROLL_ACTIVITIES_SUCCESS,
//       newActivities: activities
//     }
//   } else {
//     return {
//       type: SCROLL_ACTIVITIES_FAILURE
//     }
//   }
//
// }
//
// export function fetchData(){
//   console.log('FETCHING DATA')
//   return dispatch =>
//     fetch('http://localhost8080/populateActivities', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         category: indexPage.category,
//         length: indexPage.populatedActivities.length
//       })
//     }).then(response => response.json())
//       .then(json =>
//         dispatch(populateActivities(json)))
// }
//
// export function updateNotifications(notification) {
//   return {
//     type: types.UPDATE_NOTIFICATIONS,
//     notification: notification
//   }
// }

// export function populateNotifications(notifications){
//   return {
//     type: types.GET_NOTIFICATIONS,
//     notifications: notifications
//   }
// }
//
// export function getNotifications(){
//   return dispatch =>
//     fetch('http://localhost8080/getNotifications', {
//       method: 'GET',
//       header: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         userID: indexPage.currentUser
//       })
//     }).then(response => response.json())
//       .then(json =>
//         dispatch(populateNotifications(json))
//       )
//   }
//
//
// export function populateCurrentUser(user){
//   return {
//     type: types.GET_CURRENT_USER,
//     currentUser: user
//   }
// }
//
// export function getCurrentUser(profile){
//   console.log('In here')
//   return dispatch =>
//     fetch('http://localhost8080/getCurrentUser', {
//         method: 'GET',
//         header: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           userID: profile.id
//         })
//     }).then(response => response.json())
//       .then(json =>
//         dispatch(populatecurrentUser(json))
//       )
// }
//
// export function populateActivityOwner(activityOwner){
//   return {
//     type: types.GET_ACTIVITY_OWNER,
//     selectedActivityOwner: activityOwner
//   }
// }
//
// export function getActivityOwner(){
//   return dispatch =>
//     fetch('http://localhost8080/getActivityOwner', {
//       method: 'GET',
//       header: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         activityOwner: indexPage.selectedActivity.activityCreator
//       })
//     }).then(response => response.json())
//       .then(json =>
//         dispatch(populateActivityOwner(json)))
// }
