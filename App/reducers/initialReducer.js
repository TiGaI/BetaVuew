export function populatedActivities(state = {
  nav: "ActivitiesPage",
  fetchingData: false,
  populatedActivities: [],
  category: "Sports",
  selectedActivity: null,
  selectedActivityOwner: null,
  notifications: []
}, action) {
    switch (action.type) {
    case 'POPULATED_ACTIVITIES':
        return Object.assign({}, state, {
            populatedActivities: action.populatedActivities
        });
    case 'GET_NOTIFICATIONS':
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


// import * as types from '../actions/actionTypes';
// import * as actions from '../actions/initialAction';
//
// const categories = ["sports", "art", "food"];
//
// Array.prototype.next = function(item) {
//   if (item === null) {
//     return this[0];
//   }
//   let i = this.indexOf(item);
//   if (i === this.length - 1){
//     return this[0];
//   } else {
//     return this[(i + 1)];
//   }
// };
//
// const initialState = {
//   nav: "ActivitiesPage",
//   currentUser: null,
//   fetchingData: false,
//   populatedActivities: [],
//   category: categories.next(),
//   selectedActivity: null,
//   selectedActivityOwner: null,
//   notifications: []
// }
//
// function betavuew(state = initialState, action = {}) {
//   switch(action.type){
//
//   case types.CHANGE_CATEGORY:
//     return {...state,
//       catigory: action.currentCategory
//     }
//
//   case types.SELECT_ACTIVITY:
//     return {
//       ...state,
//       selectedActivity: action.selectedActivity,
//       nav: "Activity"
//     }
//
//   case types.SELECT_ACTVITIES_FETCH:
//     return {
//       ...state,
//       fetchingData: true
//     }
//
//   case types.SCROLL_ACTIVITIES_SUCCESS:
//     popAct = state.populatedActivities
//     newAct = popAct.concat(action.newActivities)
//     return {
//       ...state,
//       populatedActivities: newAct,
//       fetchingData: false
//     }
//
//   case types.UPDATE_NOTIFICATIONS:
//     var notificationAdded = [].concat([...state.notifications, ...action.notification])
//     return {
//       ...state,
//       notifications: notificationAdded
//     }
//
//     case types.GET_NOTIFICATIONS:
//       return {
//         ...state,
//         notifications: notifications
//       }
//
//     case types.GET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: action.currentUser
//       }
//
//     case types.GET_ACTIVITY_OWNER:
//       return {
//         ...state,
//         selectedActivityOwner: action.selectedActivityOwner
//       }
//
//
//
//   case "TEST":
//     console.log('in reducer Bitch!')
//     return state;
//
//   default:
//     return state;
//   }
// }
//
// module.exports=betavuew;
