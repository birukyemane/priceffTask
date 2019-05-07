import { connect } from 'react-redux'
import StatComponent from '../components/Stat';
import { addStat } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  dispatchAddStat: (stat) => {
    dispatch(addStat(stat))
  }
})

export const Stat = connect(state => ({
  stat: state.stat
}), mapDispatchToProps)(StatComponent);