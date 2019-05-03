import { combineReducers } from "redux"
import statsHistory from "./statsHistory"
import users from "./users"
import stat from "./stat"

const usersStat = combineReducers({
  statsHistory,
  users,
  stat
});

export default usersStat;
