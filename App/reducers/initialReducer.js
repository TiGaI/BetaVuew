export function populatedActivities(state = {
  nav: "ActivitiesPage",
  fetchingData: false,
  populatedActivities: [],
  category: "Sport",
  notifications: []
}, action) {
    switch (action.type) {
    case 'POPULATED_ACTIVITIES':
        return Object.assign({}, state, {
            populatedActivities: action.populatedActivities
        });
    case 'GET_NOTIFICATIONS':
    console.log('i am here');
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
