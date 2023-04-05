import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import { carsReducer } from './reducers/carsReducer';


const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
    carsReducer,

})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)

  )
);

export default store