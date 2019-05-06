import { connect } from 'react-redux';
import FetchUserComponent from '../components/FetchUsers';
import { populateUsersList, setStat} from '../actions/index';

const mapDispatchToProps = dispatch => ({
  dispatchUsers: (users) => {
    dispatch(populateUsersList(users))
  },
  dispatchStat: (stat) => {
    dispatch(setStat(stat))
  }
})

export const FetchUsers = connect(() => ({}), mapDispatchToProps)(FetchUserComponent);