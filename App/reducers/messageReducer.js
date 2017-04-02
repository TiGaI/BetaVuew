export function messageReducer(state = {
    message: [],
    userconnection: [],
    chatingUser: null,
    fetchingData: false,
    getMessage: null
    }, action) {
    switch (action.type) {

    case 'GET_NEWLYADDEDFRIEND':
        return Object.assign({}, state, {
            userconnection: action.userconnection
        });
    case 'GET_MESSAGES':
          return Object.assign({}, state, {
              message: action.messagesArray,
              chatingUser: action.chattinguserObject
          });
    case "FETCHING_DATA":
      return Object.assign({}, state, {
        fetchingData: true
    })
    case "DONE_FETCHING":
          return Object.assign({}, state, {
            fetchingData: false
    })

    default:
        return state;
    }
}
