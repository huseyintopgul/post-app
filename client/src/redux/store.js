import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import modalReducer from './reducers/modalReducer';
import postReducer from './reducers/postReducer';


const initialState = {


}


const reducers = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    posts: postReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;