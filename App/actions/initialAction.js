export function populatedActivities(category, prevCategory, nextCategory, populatedActivities) {
    return dispatch => {
        dispatch(fetching());

        fetch('http://localhost:8080/populateActivities', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                category: category,
                prevCategory: prevCategory,
                nextCategory: nextCategory,
                length: populatedActivities
              })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                var activitiesObject = {
                  ...responseJson
                };
                dispatch(getActivities(activitiesObject, category));
                dispatch(doneFetching())
            })
            .catch((err) => {
              console.log('error in populatedActivities -> ', err)
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
              headers: {
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


      fetch('http://localhost:8080/sendFriendRequest', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              toUser: friendToAddID.toString(),
              fromUser: currentUserID.toString()
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

export function test(){
  return {
    type: "TEST"
  }
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
