import {createStore, combineReducers, applyMiddleware} from 'redux'
import menuReducer from '../reducer/menuReducer'
import thunk from 'redux-thunk'
import searchReducer from '../reducer/searchReducer'
import orderReducer from '../reducer/orderReducer'
import typeReducer from '../reducer/typeReducer'

function menuStore(){
    const store = createStore(combineReducers ({
         menu : menuReducer,
         search: searchReducer,
         order : orderReducer,
         type: typeReducer
         
    }), applyMiddleware(thunk))
    return store
}

export default menuStore