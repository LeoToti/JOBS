import { createStore , combineReducers, applyMiddleware, compose } from 'redux'
import mainReducer from './reducers'
import fav from '../store/reducers/fav'
import jobs from '../store/reducers/jobs'

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose







export const initialState = {
    
    favourites: [],
    jobs: {
        jobs: [],
        error: false,
        loading: false,
      },
    
   
  }



  const bigReducer = combineReducers({
    favourites: fav,
    jobs : jobs, 
  })
  //const configureStore = () => createStore( bigReducer, {}, composeEnhancers(applyMiddleware(thunk)))
  
  export default createStore( bigReducer,{}, composeEnhancers(applyMiddleware(thunk)))