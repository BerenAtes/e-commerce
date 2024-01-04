import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";

export const reducers = combineReducers({});

export const store = createStore(reducers, applyMiddleware(logger, thunk));