
import * as types from '../constants/ActionTypes'

const statsHistory = (state = [], action) => {
    //const {averageAge,oldestPerson, youngestPerson, northernMostPreson, southernMostPerson} = action;
    switch (action.type) {
      case types.ADD_STAT:
        return [...state, action.stat];
        /*state.concat([
          {
            averageAge,
            oldestPerson, 
            youngestPerson,
            northernMostPreson,
            southernMostPerson            
          }
        ])*/
      case types.STATS_HISTORY_LIST:
        return action.statsHistory  
      default:
        return state
    }
  }
  
  export default statsHistory;