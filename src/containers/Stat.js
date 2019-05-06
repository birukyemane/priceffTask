import { connect } from 'react-redux'
import StatComponent from '../components/Stat';

export const Stat = connect(state => ({
  stat: state.stat
}), {})(StatComponent);