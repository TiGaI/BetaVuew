export function populatedActivities(category, prevCategory, nextCategory, populatedActivities) {
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
                prevCategory: prevCategory,
                nextCategory: nextCategory,
                length: populatedActivities
              })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                var activitiesObject = Object.assign({}, responseJson);
                console.log("this is activitiesArray inside of initialAction: ", activitiesObject)
                dispatch(getActivities(activitiesObject, category));
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
export function getActivities(populatedActivities, category) {
    return {
        type: 'POPULATED_ACTIVITIES',
        populatedActivities: populatedActivities,
        category: category
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
