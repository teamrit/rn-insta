import { combineReducers } from "redux";
import FeedReducer from './FeedReducer';

const rootReducer = combineReducers({ feed : FeedReducer });

export default rootReducer;