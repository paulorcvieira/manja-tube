import { combineReducers } from 'redux'

import search from './modules/search/reducers'
import player from './modules/player/reducers'

const rootReducer = combineReducers({
  search,
  player,
})

export default rootReducer