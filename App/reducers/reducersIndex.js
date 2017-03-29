import * as types from '../actions/actionTypes';
import * as actions from '../actions/action';

const categories = ["sports", "art", "food"];

Array.prototype.next = function(item) {
  if (item === null) {
    return this[0];
  }
  let i = this.indexOf(item);
  if (i === this.length - 1){
    return this[0];
  } else {
    return this[(i + 1)];
  }
};

const initialState = {
  nav: "ActivitiesPage",
  fetchingData: false,
  populatedActivities: [],
  category: categories.next(),
  selectedActivity: null
}

function betavuew(state = initialState, action = {}) {
  switch(action.type){

  case types.CHANGE_CATEGORY:
    return {...state,
      catigory: action.currentCategory
    }

  case types.SELECT_ACTIVITY_:
    return {
      ...state,
      selectedActivity: action.selectedActivity,
      nav: "Activity"
    }

  case types.SELECT_ACTVITIES_FETCH:
    return {
      ...state,
      fetchingData: true
    }

  case types.SCROLL_ACTIVITIES_SUCCESS:
    popAct = state.populatedActivities
    newAct = popAct.concat(action.newActivities)
    return {
      ...state,
      populatedActivities: newAct,
      fetchingData: false
    }



  case "TEST":
    console.log('in reducer Bitch!')
    return state;

  default:
    return state;
  }
}

module.exports=betavuew;