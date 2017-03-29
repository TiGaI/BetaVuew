export function messageReducer(state = {
    message=[],
    fetchingData: false,
    getMessage}, action) {
    switch (action.type) {

    case 'Get_NEWLYADDEDFRIEND':
        return Object.assign({}, state, {
            populatedActivities: action.populatedActivities
        });
    case 'GET_MYMESSAGE':
          return Object.assign({}, state, {
              notifications: action.notifications
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
