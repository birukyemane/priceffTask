import * as types from '../constants/ActionTypes'

export const populateStatsHistoryList = statsHistory => ({
    type: types.STATS_HISTORY_LIST,
    statsHistory
})

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})

export const setStat = (averageAge,oldestPerson, youngestPerson, northernMostPreson, southernMostPerson)=> ({
    type: types.SET_STAT,
    averageAge,
    oldestPerson,
    youngestPerson,
    northernMostPreson,
    southernMostPerson
})

export const addStat = (averageAge,oldestPerson, youngestPerson, northernMostPreson, southernMostPerson) => ({
    type: types.ADD_STAT,
    averageAge,
    oldestPerson,
    youngestPerson,
    northernMostPreson,
    southernMostPerson
})