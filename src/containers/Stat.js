import { connect } from 'react-redux'
import StatComponent from '../components/Stat';
import { addStat, setStat } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  dispatchAddStat: (stat) => {
    dispatch(addStat(stat))
  },
  dispatchSetStat: (stat) => {
    dispatch(setStat(stat))
  }
})

export const Stat = connect(state => ({
  stat: state.stat
}), mapDispatchToProps)(StatComponent);