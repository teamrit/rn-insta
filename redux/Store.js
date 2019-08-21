import { createStore , applyMiddleware , compose , composeEn } from "redux";
import rootReducer from "./reducers/IndexReducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk),
));

window.store = store;

export default store;