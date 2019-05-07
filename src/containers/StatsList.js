import { connect } from 'react-redux'
import StatsListComponent from '../components/statsList'

export const StatsList = connect(state => ({
    statsHistory: state.statsHistory
}), {})(StatsListComponent)