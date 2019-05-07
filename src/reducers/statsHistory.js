
import * as types from '../constants/ActionTypes'

const statsHistory = (state = [], action) => {
    switch (action.type) {
      case types.ADD_STAT:
        return [...state, action.stat];        
      case types.STATS_HISTORY_LIST:
        return action.statsHistory  
      default:
        return state
    }
}
 
export default statsHistory;