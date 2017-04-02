// import socket from '../socket';

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


export function getMessage(currentUserID, friendToAddID){
    return dispatch => {
        dispatch(fetching());
        console.log('currentUserID in getMessage in messagerAction: ', currentUserID);
        console.log('friendToAddID in getMessage in messagerAction: ', friendToAddID);

        fetch('http://localhost:8080/getMessage', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                toUserID: friendToAddID,
                fromUserID: currentUserID
              })
            }).then((response) => response.json())
            .then((responseJson) => {
                console.log('getMessage is ',responseJson)
                var userObject = [...responseJson];
                console.log(userObject, ' is the super userObject from getUserNotifications');

                dispatch(getMessageAction(userObject, friendToAddID));
                dispatch(doneFetching())
            })
            .catch((err) => {
              console.log('error: ', err)
            });
    };
}

function getMessageAction(messagesArray, chattinguserObject) {
  return {
      type: 'GET_MESSAGES',
      messagesArray,
      chattinguserObject
  };
}


export function sendMessage(currentUserID, friendToAddID, body) {
    return dispatch => {
        console.log('currentUserID in sendMessage in messagerAction: ', currentUserID);
        console.log('friendToAddID in sendMessage in messagerAction: ', friendToAddID);
        console.log('body in sendMessage in messagerAction: ', body);

        fetch('http://localhost:8080/sendMessage', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                message: body,
                toUserID: currentUserID,
                fromUserID: friendToAddID
              })
            }).then((response) => response.json())
            .then((responseJson) => {
            })
            .catch((err) => {
              console.log('error: ', err)
            });
    };
}

export function getReceiveMessage(currentUserID, friendToAddID) {
    return dispatch => {
        dispatch(fetching());
        console.log('currentUserID in getNewlyAddedFriend in messagerAction: ', currentUserID);
        console.log('friendToAddID in getNewlyAddedFriend in messagerAction: ', friendToAddID);

        fetch('http://localhost:8080/receiveMessage', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                toUserID: currentUserID,
                fromUserID: friendToAddID
              })
            }).then((response) => response.json())
            .then((responseJson) => {

                var userObject = [...responseJson];


                dispatch(doneFetching())
            })
            .catch((err) => {
              console.log('error: ', err)
            });
    };
}

export function getRecentlyAddedFriend(currentUserID) {
    return dispatch => {
        dispatch(fetching());
        console.log('currentUserID in getNewlyAddedFriend in messagerAction: ', currentUserID);

        fetch('http://localhost:8080/getNewlyAddedFriend', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                toUserID: currentUserID
              })
            }).then((response) => response.json())
            .then((responseJson) => {
                var userObject = [...responseJson.connections]
                dispatch(getNewFriendComplete(userObject));
                dispatch(doneFetching())
            })
            .catch((err) => {
              console.log('error: ', err)
            });
    };
}


function getNewFriendComplete(userconnection) {
    return {
        type: 'GET_NEWLYADDEDFRIEND',
        userconnection
    };
}

// export function createMessage(author, text) {
//   return socket.action({
//     type: 'CREATE_MESSAGE',
//     message: {
//       author,
//       text
//     }
//   });
// };

export function receiveMessage(message) {
  console.log('receiving message', message);
  return {
    type: 'RECEIVE_MESSAGE',
    message
  };
}

// socket.on(RECEIVE_MESSAGE, receiveMessage);
