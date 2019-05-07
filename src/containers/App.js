import { connect } from 'react-redux';
import AppComponent from '../App';
import { populateStatsHistoryList } from '../actions/index';

const mapDispatchToProps = dispatch => ({
    dispatchStatsHistory: (statsHistory) => {
      dispatch(populateStatsHistoryList(statsHistory))
    }
})
  
export const App = connect(() => ({}), mapDispatchToProps)(AppComponent);