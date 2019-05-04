import * as types from '../constants/ActionTypes'

const stat = (state = {}, action) => {
  switch (action.type) {
    case types.SET_STAT:      
      return action.stat
    default:
      return state
  }
}

export default stat;